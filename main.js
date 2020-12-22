const thenableRAF = cb => {
    let rafID, pReject;
    const p = new Promise((resolve, reject) => {
        pReject = reject;
        rafID = requestAnimationFrame(time => {
            cb && cb(time);
            resolve(time);
        });
    });
    p.cancel = doNotReject => {
        cancelAnimationFrame(rafID);
        doNotReject || pReject(new Error('Animation frame canceled'));
    };
    return p;
};

thenableRAF.then = (resolve, reject) => thenableRAF().then(resolve, reject);

exports.default = thenableRAF;
Object.defineProperty(exports, '__esModule', { value: true });