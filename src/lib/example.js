export function sum(a, b) {
    return a + b;
}

export function toUpperCase(str) {
    return str.toUpperCase();
}

const businessHours = [9, 17];

export function purchase() {
    const currentHour = new Date().getHours();
    const [open, close] = businessHours;

    if (currentHour > open && currentHour < close) {
        return { message: 'Success' };
    }

    return { message: 'Error' };
}

export const messages = {
    items: [
        { message: 'Simple test message', from: 'Testman' },
        // ...
    ],
    // eslint-disable-next-line no-use-before-define
    getLatest,
};

export function getLatest(index = messages.items.length - 1) {
    return messages.items[index];
}

export function executeAfterTwoHours(func) {
    setTimeout(func, 1000 * 60 * 60 * 2); // 2 hours
}

export function executeEveryMinute(func) {
    setInterval(func, 1000 * 60); // 1 minute
}
