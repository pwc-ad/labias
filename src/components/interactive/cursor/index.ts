import {
	CURSOR_DATA_ATTRIBUTES,
	CURSOR_DATA_ATTRIBUTES_MAP,
	CURSOR_LAYERS,
	CURSOR_INTERACTIVE_TARGET_QUERY_SELECTOR,
	CURSOR_MODES,
	type CursorLayers,
	type CursorMode,
} from '@/constants/cursor';

// TODO use a class instead?

export function createCustomCursor() {
	// Cleanup helpers
	const controller = new AbortController();
	const eventListenerDefaultOptions: AddEventListenerOptions = {
		passive: true,
		signal: controller.signal,
	} as const;

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
			isVisible: false,
			isContentVisible: false,
			isInactive: false,
		},
	};

	// Position tracking
	let currentX = window.innerWidth / 2;
	let currentY = window.innerHeight / 2;

	let nextX = currentX;
	let nextY = currentY;

	// Inactivity tracking
	let inactivityTimer: number | null = null;

	function updatePosition(x: number, y: number) {
		nextX = x;
		nextY = y;

		// Reset inactive state on movement
		if (cursor.state.isInactive) {
			cursor.state.isInactive = false;
			cursor.elements.pointer.classList.remove('inactive');
		}

		// Clear existing timer
		if (inactivityTimer !== null) {
			clearTimeout(inactivityTimer);
		}

		// Set new timer for inactivity
		inactivityTimer = window.setTimeout(() => {
			cursor.state.isInactive = true;
			cursor.elements.pointer.classList.add('inactive');
		}, 1000);
	}

	function animateCursor() {
		currentX += (nextX - currentX) * 0.2;
		currentY += (nextY - currentY) * 0.2;
		cursor.elements.pointer.style.left = `${currentX}px`;
		cursor.elements.pointer.style.top = `${currentY}px`;

		requestAnimationFrame(animateCursor);
	}

	animateCursor()

	function setVisible(visible: boolean) {
		if (cursor.state.isVisible === visible) return;
		cursor.state.isVisible = visible;
		cursor.elements.pointer.classList.toggle('visible', visible);
	}

	function setContentVisible(visible: boolean) {
		if (cursor.state.isContentVisible === visible) return;
		cursor.state.isContentVisible = visible;
		cursor.elements.content.classList.toggle('visible', visible);
	}

	async function removeContent() {
		if (cursor.state.mode === 'interactive') {
			setContentVisible(false);
			cursor.elements.content.textContent = '';
			return new Promise<void>((resolve) => {
				// setTimeout(() => {
				// 	resolve();
				// }, 200); // Match CSS transition duration
				resolve();
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
			updatePosition(
				Math.min(left, window.innerWidth),
				Math.min(top, window.innerHeight)
			);
		},
		eventListenerDefaultOptions
	);

	window.addEventListener('click', () => {
		cursor.state.isInactive = true;
		cursor.elements.pointer.classList.add('inactive');
	});

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

		switch (cursorInteraction) {
			case 'custom': {
				removeContent().then(() => {
					document.body.setAttribute('data-has-custom-cursor', 'false');
					setVisible(true);
					cursor.elements.pointer.classList.remove('interactive');
					cursor.elements.pointer.classList.add('custom');
					cursor.state.content = '';
				});
				break;
			}
			case 'interactive': {
				removeContent().then(() => {
					document.body.setAttribute('data-has-custom-cursor', 'true');
					setVisible(true);
					cursor.elements.pointer.classList.remove('custom');
					cursor.elements.pointer.classList.add('interactive');
					
					// Wait for scale animation before showing content
					// setTimeout(() => {
						cursor.elements.content.textContent =
							cursor.state.content = content as string;
						setContentVisible(true);
					// }, 150); // Slightly less than transform transition
				});
				break;
			}

			case 'default': {
				document.body.setAttribute('data-has-custom-cursor', 'false');
				cursor.elements.pointer.classList.remove('interactive', 'custom');
				setVisible(false);
				setContentVisible(false);
				cursor.elements.content.textContent = cursor.state.content = '';
				// setTimeout(() => {
				// }, 200); // Match CSS transition duration
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

			if (cursor.state.mode !== 'default') {
				handleCursorInteraction(interactionTarget);
			}
		},
		eventListenerDefaultOptions
	);

	document.body.addEventListener(
		'mousemove',
		function handleMouseMove(event) {
			updatePosition(event.x, event.y);

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
			setVisible(true);
			cursor.elements.content.textContent = cursor.state.content = '';
		},
		eventListenerDefaultOptions
	);

	document.body.addEventListener(
		'mouseleave',
		function handleMouseLeave() {
			setVisible(false);
			cursor.elements.content.textContent = cursor.state.content = '';
		},
		eventListenerDefaultOptions
	);

	return function destroy() {
		if (inactivityTimer !== null) {
			clearTimeout(inactivityTimer);
		}
		controller.abort();
	};
}
