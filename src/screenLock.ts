export function setupScreenLock(element: HTMLElement) {
    element.addEventListener('click', async () => toggleWakeLock(element));
}

let wakeLock: WakeLockSentinel | undefined;
let wakeLockRequest: Promise<boolean> | undefined;

async function toggleWakeLock(element: HTMLElement) {
    if (wakeLock) {
        await releaseWakeLock();
        element.classList.remove('locked');
        return;
    }

    if (wakeLockRequest)
        return;

    wakeLockRequest = createWakeLockRequest();
    const result = await wakeLockRequest;
    if (result)
        element.classList.add('locked');
}

async function createWakeLockRequest(): Promise<boolean> {
    try {
        wakeLock = await navigator.wakeLock.request('screen');
        return true;
    }
    catch {
        wakeLock = undefined;
        return false;
    }
    finally {
        wakeLockRequest = undefined;
    }
}

async function releaseWakeLock() {
    await wakeLock?.release();
    wakeLock = undefined;
}
