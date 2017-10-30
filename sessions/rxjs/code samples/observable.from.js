//Observable.from custom implemenation

function Observable(subscribe) {
    this.subscribe = subscribe;
}

Observable.from = (dataSet) => {
    return new Observable((observer) => {
        dataSet.forEach((value) => observer.next(value));
        return () => dataSet = [];
    });
};

const input$ = Observable.from([1, 2, 3, 4, 5, 6]);

const unsubscribe = input$.subscribe({
    next: (value) => {
        console.log(value);
    }
});

// automatically unsubscribe after 5s
setTimeout(unsubscribe, 5000);