export function setupTime(element: HTMLElement) {
    const time = new Date();
    const millisecondsUntilNextSecond = 1000 - time.getMilliseconds();

    renderTime(element, time);

    console.log(millisecondsUntilNextSecond);

    setTimeout(() => {
        setupTime(element);
    }, millisecondsUntilNextSecond);
}

function renderTime(element: HTMLElement, time: Date) {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    element.innerText = `${hours}:${minutes}:${seconds}`;
}
