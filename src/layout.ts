export function setupLayout(element: HTMLElement) {
    setFontSize(element);

    window.addEventListener('resize', () => {
        setFontSize(element);
    });
}

function setFontSize(elment: HTMLElement) {
    const { fontSize, isPhone } = computeFontSize(elment);

    elment.style.fontSize = `${fontSize}px`;
    elment.classList.toggle('phone', isPhone);
}

/** The width-to-height ratio of the text. */
const WIDTH_TO_HEIGHT = 4.8;
/** As the percentage of the page. */
const MIN_PADDING_X = 0.1;
const MIN_PADDING_Y = 0.1;
const MAX_FONT_SIZE_PX = 240;

const PHONE_MAX_WIDTH_PX = 800;

function computeFontSize(element: HTMLElement) {
    const w = element.clientWidth;
    const h = element.clientHeight;
    const isPhone = w < PHONE_MAX_WIDTH_PX && w < h;

    const x = isPhone ? h : w;
    const y = isPhone ? w : h;

    const innerContentRatio = (x * (1 - 2 * MIN_PADDING_X)) / (y * (1 - 2 * MIN_PADDING_Y));

    const fontSize = innerContentRatio > WIDTH_TO_HEIGHT
        // Height is the limiting factor.
        ? y * (1 - 2 * MIN_PADDING_Y)
        // Width is the limiting factor.
        : x * (1 - 2 * MIN_PADDING_X) / WIDTH_TO_HEIGHT;

    return {
        fontSize: Math.min(Math.round(fontSize), MAX_FONT_SIZE_PX),
        isPhone,
    };
}
