interface CancelableRAFPromise extends Promise<number> {
    /**
     * cancelAnimationFrame and optional reject this promise
     *
     * @param doNotReject set this to true for cancel without promise rejection
     */
    cancel(doNotReject?: boolean): void;
}

interface ThenableRAF extends PromiseLike<number> {
    /**
     * requestAnimationFrame wrapper/polyfill
     *
     * @param callback it will be executed directly in the animation frame (before rendering)
     * @returns Promise with cancel method, it resolved in nearest microtask after animation frame (and after rendering)
     */
    (callback?: FrameRequestCallback): CancelableRAFPromise;
}

declare const thenableRAF: ThenableRAF;
export default thenableRAF;
