/**
 * A simple function to delay the execution of a promise for a specified amount of time.
 *
 * @param ms The number of milliseconds to delay the execution.
 * @returns A promise that resolves after the specified delay.
 */
function delay(ms: number = 1000) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default delay;
