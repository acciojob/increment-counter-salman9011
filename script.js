let counter = document.getElementById("counter");
    let button = document.getElementById("incrementBtn");
    let count = parseInt(counter.innerText);

button.addEventListener("click", function () {
      // Display the un-incremented value in an alert
      alert(" un-incremented value "+ count);

      // Increment the counter value and update the display
      counter.innerText = ++count;
    });