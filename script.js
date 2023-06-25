
window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
 const promises = Array.from({ length: 5 }, () => {
  const delay = Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${delay} second(s)`);
    }, delay * 1000);
  });
});

// Usage example
const outputElement = document.getElementById("output");

Promise.any(promises)
  .then((result) => {
    outputElement.textContent = result;
  })
  .catch((error) => {
    console.error("All promises rejected:", error);
  });