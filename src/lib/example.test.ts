import { afterEach, beforeEach, describe, expect, it, test, vi } from 'vitest';
import {
    executeAfterTwoHours,
    executeEveryMinute,
    getLatest,
    messages,
    purchase,
    sum,
    toUpperCase,
} from './example.ts';

// Mock globals
const IntersectionObserverMock = vi.fn(() => {
    return {
        disconnect: vi.fn(),
        observe: vi.fn(),
        takeRecords: vi.fn(),
        unobserve: vi.fn(),
    };
});

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

// now you can access it as `IntersectionObserver` or `window.IntersectionObserver`

// Test cases

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

it('toUpperCase', () => {
    const result = toUpperCase('foobar');
    expect(result).toMatchSnapshot();
});

describe('purchasing flow', () => {
    beforeEach(() => {
        // tell vitest we use mocked time
        vi.useFakeTimers();
    });

    afterEach(() => {
        // restoring date after each test run
        vi.useRealTimers();
    });

    it('allows purchases during business hours', () => {
        // set hour within business hours
        const date = new Date(2000, 1, 1, 13);
        vi.setSystemTime(date);

        expect(purchase()).toEqual({ message: 'Success' });
    });

    it('does not allow purchases outside of business hours', () => {
        // set hour outside of business hours
        const date = new Date(2000, 1, 1, 18);
        vi.setSystemTime(date);

        expect(purchase()).toEqual({ message: 'Error' });
    });
});

// Spying on functions

describe('reading messages', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should get the latest message with a spy', () => {
        const spy = vi.spyOn(messages, 'getLatest');
        expect(spy.getMockName()).toEqual('getLatest');

        expect(messages.getLatest()).toEqual(messages.items.at(-1));

        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should get with a mock', () => {
        const mock = vi.fn().mockImplementation(getLatest);

        expect(mock()).toEqual(messages.items.at(-1));
        expect(mock).toHaveBeenCalledTimes(1);
    });
});

// Timers
// eslint-disable-next-line no-console
const mock = vi.fn(() => console.log('executed'));

describe('delayed execution', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });
    afterEach(() => {
        vi.restoreAllMocks();
    });
    it('should execute the function', () => {
        executeAfterTwoHours(mock);
        vi.runAllTimers();
        expect(mock).toHaveBeenCalledTimes(1);
    });
    it('should not execute the function', () => {
        executeAfterTwoHours(mock);
        // advancing by 2ms won't trigger the func
        vi.advanceTimersByTime(2);
        expect(mock).not.toHaveBeenCalled();
    });
    it('should execute every minute', () => {
        executeEveryMinute(mock);
        vi.advanceTimersToNextTimer();
        expect(mock).toHaveBeenCalledTimes(1);
        vi.advanceTimersToNextTimer();
        expect(mock).toHaveBeenCalledTimes(2);
    });
});
