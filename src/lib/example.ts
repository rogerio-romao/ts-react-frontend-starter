export function sum(a: number, b: number): number {
    return a + b;
}

export function toUpperCase(str: string): string {
    return str.toUpperCase();
}

const businessHours = [9, 17];

export function purchase(): { message: string } {
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

    getLatest,
};

export function getLatest(index = messages.items.length - 1): {
    message: string;
    from: string;
} {
    return messages.items[index];
}

export function executeAfterTwoHours(func: () => void): void {
    setTimeout(func, 1000 * 60 * 60 * 2); // 2 hours
}

export function executeEveryMinute(func: () => void): void {
    setInterval(func, 1000 * 60); // 1 minute
}
