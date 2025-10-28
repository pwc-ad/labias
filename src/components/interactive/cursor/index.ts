import {
	CURSOR_DATA_ATTRIBUTES,
	CURSOR_DATA_ATTRIBUTES_MAP,
	CURSOR_LAYERS,
	CURSOR_INTERACTIVE_TARGET_QUERY_SELECTOR,
	CURSOR_MODES,
	type CursorLayers,
	type CursorMode,
} from '@/constants/cursor';
import { animate, motionValue, springValue, styleEffect } from 'motion';

// TODO use a class instead?

export function createCustomCursor() {
	// Cleanup helpers
	const controller = new AbortController();
	const eventListenerDefaultOptions: AddEventListenerOptions = {
		passive: true,
		signal: controller.signal,
	} as const;
	const unsubscribers: Array<() => void> = [];

	const cursor = {
		elements: {
			content: document.getElementById(
				CURSOR_LAYERS.content
			) as HTMLDivElement,
			pointer: document.getElementById(
				CURSOR_LAYERS.pointer
			) as HTMLDivElement,
		} as const satisfies Record<CursorLayers, HTMLDivElement>,
		state: {
			content: '',
			mode: null! as CursorMode,
		},
	};

	// MOVEMENT
	const x = motionValue(window.innerWidth / 2);
	const y = motionValue(window.innerHeight / 2);
	// OPACITY
	const opacity = motionValue(0);
	// SCALE
	const cursorBaseScale = 0.3;
	const scale = springValue<number>(cursorBaseScale);

	unsubscribers.push(
		styleEffect(cursor.elements.pointer, {
			opacity,
			x,
			y,
			scale,
		})
	);

	const contentOpacity = motionValue(0);

	unsubscribers.push(
		styleEffect(cursor.elements.content, {
			opacity: contentOpacity,
		})
	);

	async function removeContent() {
		if (cursor.state.mode === 'interactive') {
			return animate(contentOpacity, 0).then(() => {
				cursor.elements.content.textContent = '';
			});
		}

		return Promise.resolve();
	}

	// Prevents cursor from leaving the frame on resizing
	window.addEventListener(
		'resize',
		function handleResize() {
			const { left, top } =
				cursor.elements.pointer.getBoundingClientRect();
			x.set(Math.min(left, window.innerWidth));
			y.set(Math.min(top, window.innerHeight));
		},
		eventListenerDefaultOptions
	);

	const cursorDataAttributesKeys = Object.values(CURSOR_DATA_ATTRIBUTES);

	function handleCursorInteraction(interactionTarget: Element | null) {
		const interactionDataType =
			interactionTarget instanceof HTMLElement
				? cursorDataAttributesKeys.find(
						(name) => interactionTarget.dataset[name]
					)
				: null;

		const cursorInteraction = interactionDataType
			? CURSOR_DATA_ATTRIBUTES_MAP[interactionDataType]
			: CURSOR_MODES.custom;

		const content =
			interactionDataType === 'cursorInteractive' &&
			(interactionTarget as HTMLElement).dataset[interactionDataType];

		if (
			cursorInteraction === 'interactive'
				? cursor.state.content === content
				: cursor.state.mode === cursorInteraction
		) {
			return;
		}

		const current = opacity.get();
		const previous = opacity.getPrevious();
		const isFadingIn = current > (previous ?? 0);

		async function maybeFadeIn() {
			document.body.setAttribute('data-has-custom-cursor', 'true');
			if (!isFadingIn) {
				return animate(opacity, 1, { duration: 0.5 });
			}
			return Promise.resolve();
		}

		switch (cursorInteraction) {
			case 'custom': {
				removeContent().then(() => {
					maybeFadeIn();
					animate(scale, cursorBaseScale);
					cursor.state.content = '';
				});
				break;
			}
			case 'interactive': {
				removeContent()
					.then(() => {
						maybeFadeIn();
						return animate(scale, 1);
					})
					.then(() => {
						cursor.elements.content.textContent =
							cursor.state.content = content as string;
						animate(contentOpacity, 1);
					});
				break;
			}

			case 'default': {
				document.body.setAttribute('data-has-custom-cursor', 'false');
				animate(scale, cursorBaseScale, { duration: 0.2 });
				animate(opacity, 0, { duration: 0.2 });
				animate(contentOpacity, 0, { duration: 0.2 }).then(() => {
					cursor.elements.content.textContent = cursor.state.content =
						'';
				});
				break;
			}
		}

		cursor.state.mode = cursorInteraction;
	}

	document.addEventListener(
		'scrollend',
		function handleScrollEnd(event) {
			const interactionTarget =
				Array.from(
					(event.target as HTMLElement).querySelectorAll(
						CURSOR_INTERACTIVE_TARGET_QUERY_SELECTOR
					)
				).find((element) => element.matches(':hover')) ?? null;

			console.log(cursor);

			if (cursor.state.mode !== 'default') {
				handleCursorInteraction(interactionTarget);
			}
		},
		eventListenerDefaultOptions
	);

	document.body.addEventListener(
		'mousemove',
		function handleMouseMove(event) {
			x.set(event.x);
			y.set(event.y);

			if (!(event.target instanceof HTMLElement)) {
				// Bails out early
				return;
			}

			const interactionTarget = event.target.closest(
				CURSOR_INTERACTIVE_TARGET_QUERY_SELECTOR
			);

			handleCursorInteraction(interactionTarget);
		},
		eventListenerDefaultOptions
	);

	document.body.addEventListener(
		'mouseenter',
		function handleMouseIn() {
			animate(opacity, 1, { duration: 0.2 });
			cursor.elements.content.textContent = cursor.state.content = '';
		},
		eventListenerDefaultOptions
	);

	document.body.addEventListener(
		'mouseleave',
		function handleMouseLeave() {
			animate(opacity, 0, { duration: 0.2 });
			cursor.elements.content.textContent = cursor.state.content = '';
		},
		eventListenerDefaultOptions
	);

	return function destroy() {
		unsubscribers.forEach((unsubscribe) => {
			unsubscribe();
		});
		controller.abort();
	};
}
