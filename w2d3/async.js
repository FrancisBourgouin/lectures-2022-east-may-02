// Asynchronous (flowing through events) Choose your own adventure
// Synchronous (top to bottom, ordered) Novel

// Need async ?
// Fight against render blocking elements

console.log("Hello!"); // First one

// setTimeout <- sync
setTimeout(() => {
  // Callback <- async
  console.log("Timer finished 2"); // emits an event that is done after 2s
}, 2000);

setTimeout(() => {
  // Callback <- async
  console.log("Timer finished 0"); // emits an event that is done after 2s
}, 0);

console.log("How are you?");

// Console log
// Set a timer (2s)
// Set a timer (0s)
// Console.log
// We do thre result of the timer that finished (0s)
// We do the result of the time that finished (2s)
