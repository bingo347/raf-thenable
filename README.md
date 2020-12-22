# raf-thenable

requestAnimationFrame wrapper to PromiseLike interface

## Example

```javascript
import rafThenable from 'raf-thenable';

// basic usage
const p = rafThenable(now => {
  // draw canvas or do same animation
  // it executed directly in the animation frame (before rendering)
  console.log(now); // now is time like performance.now()
});

setTimeout(() => {
    // it's cancel animation frame and rejects promise in p
    p.cancel();

    // if you don't want to reject p, pass true to cancel
    p.cancel(true);
}, 0);

// p is normal Promise from your global scope (window object)
// you can await it or call any promise instance method
const now = await p;
p.then(now => { /* ... */ }).then(/* ... */);
p.catch(() => { /* Oops, canceled without true parameter */ });
p.finally(() => { /* ... */ });

// rafThenable implements PromiseLike interface (then method)
// you can await it or return from then callback
// but it will be executed in microtask (after animation frame and after rendering)
const now = await rafThenable;
otherPromise.then(() => {
    /* ... */
    return rafThenable;
}).then(now => { /* ... */ });
```
