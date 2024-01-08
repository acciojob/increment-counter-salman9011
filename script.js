let counter = document.getElementById("counter");
    let incrementBtn = document.getElementById("incrementBtn");
    let count = 0;

    incrementBtn.addEventListener("click", function () {
      // Display the un-incremented value in an alert
      alert(count);

      // Increment the counter value and update the display
      counter.innerText = count++;
    });