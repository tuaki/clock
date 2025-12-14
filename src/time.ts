export function setupTime(element: HTMLElement) {
    const time = new Date();

    renderTime(element, time);

    setInterval(() => {
        renderTime(element, new Date());
        // This is probably not the most precise but it's good enough for now.
    }, 1000);
}

function renderTime(element: HTMLElement, time: Date) {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    element.innerText = `${hours}:${minutes}:${seconds}`;
}
