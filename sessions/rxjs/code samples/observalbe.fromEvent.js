// Observable.fromEvent custom implementation

const node = document.querySelector('input');
const p = document.querySelector('p');

function Observable(subscribe) {
    this.subscribe = subscribe;
}

Observable.fromEvent = (element, name) => {
    return new Observable((observer) => {
        const callback = (event) => observer.next(event);
        element.addEventListener(name, callback, false);
        return () => element.removeEventListener(name, callback, false);
    });
};

const input$ = Observable.fromEvent(node, 'input');

const unsubscribe = input$.subscribe({
    next: (event) => {
        p.innerHTML = event.target.value;
    }
});

// automatically unsub after 5s
setTimeout(unsubscribe, 5000);