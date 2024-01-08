let counter = document.getElementById("counter");
    let incrementBtn = document.getElementById("incrementBtn");
    let count = parseInt(counter.innerText);

    incrementBtn.addEventListener("click", function () {
      // Display the un-incremented value in an alert
      alert(count);

      // Increment the counter value and update the display
      counter.innerText = count+1;
    });