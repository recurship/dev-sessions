// ### EXAMPLE 1 START####
// Observal setup
var observable = Rx.Observable.create(function (observer) {
    observer.next(1);// Pushing data to subscribers
    observer.next(2);// Pushing data to subscribers
    setTimeout(() => {
        observer.next(3); // Pushing data to subscribers
        observer.complete(); // Notifying end of stream 
    }, 3000);
});
// Observer setup
observable.subscribe(
    value => console.log(value), // Received values
    err => { }, // Error thrown
    () => console.log('this is the end') // Marking completion
);

// Logs
// 1
// 2
// 3
// "this is the end"
// ### EXAMPLE 1 END####

// ### EXAMPLE 2 START####
// ERROR CASE HANDLING
const observable = Rx.Observable.create((observer) => {
    observer.error('something went really wrong...');
});
observable.subscribe(
    value => console.log(value), // will never be called
    err => console.log(err),
    () => console.log('complete') // will never be called
);

// Logs
// "something went really wrong..."
// ### EXAMPLE 2 END####

// ### EXAMPLE 3 START####
// UN SUBSCRIBE EXAMPLE

const observable = Rx.Observable.create(observer => {
    const id = setTimeout(() => observer.next('...'), 5000); // emit value after 5s

    return () => { clearTimeout(id); console.log('cleared!'); }; // runs on unsubscribe
});

const subscription = observable.subscribe(value => console.log(value));

setTimeout(() => subscription.unsubscribe(), 3000); // cancel subscription after 3s

  // Logs:
  // "cleared!" after 3s

  // Never logs "..."
  // ### EXAMPLE 3 END####
      // ### EXAMPLE 4START####
    // UN SUBSCRIBE EXAMPLE

  // ### EXAMPLE 4END####
