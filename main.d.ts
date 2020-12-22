interface CancelablePromise extends Promise<void> {
    cancel(): void;
}

interface ThenableRAF {
    (callback: FrameRequestCallback): CancelablePromise;
    then(callback: FrameRequestCallback): CancelablePromise;
}

declare const thenableRAF: ThenableRAF;
export default thenableRAF;
