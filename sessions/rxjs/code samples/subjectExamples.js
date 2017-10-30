// Example 1

var subject = new Rx.Subject();

subject.subscribe({
    next: (v) => console.log('observerA: ' + v),
    complete: () => console.log('completed observerA')
});
subject.subscribe({
    next: (v) => console.log('observerB: ' + v),
    complete: () => console.log('completed observerB')
});

subject.next(1);
subject.next(2);
subject.complete();
// Output
observerA: 1
observerB: 1
observerA: 2
observerB: 2
completed observerA
completed observerB

// Example 1 ends

// Example 2
// Behaviour Subject
var subject = new Rx.BehaviorSubject(0); // 0 is the initial value

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);

subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

subject.next(3);

// Output

observerA: 0
observerA: 1
observerA: 2
observerB: 2
observerA: 3
observerB: 3

// Example 2 ends

// Example 3
// Replay subject
var subject = new Rx.ReplaySubject(3); // buffer 3 values for new subscribers

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

subject.next(5);

// Output

observerA: 1
observerA: 2
observerA: 3
observerA: 4
observerB: 2
observerB: 3
observerB: 4
observerA: 5
observerB: 5

// Example 3 ends
// Example 4
// Async Subject
var subject = new Rx.AsyncSubject();

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

subject.next(5);
subject.complete();

// Output
observerA: 5
observerB: 5

// Example 4 ends
