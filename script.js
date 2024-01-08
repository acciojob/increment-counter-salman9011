
    let button = document.getElementById("incrementBtn");
    

button.addEventListener("click", function () {
	let count = parseInt(counter.innerText);
	let counter = document.getElementById("counter");
      // Display the un-incremented value in an alert
      alert(" un-incremented value "+ count);

      // Increment the counter value and update the display
      counter.innerText = ++count;
    });