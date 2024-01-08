
    let button = document.getElementById("incrementBtn");
button.addEventListener("click", function () {
	let counter = document.getElementById("counter");
	let count = parseInt(counter.innerText);
	
      // Display the un-incremented value in an alert
      alert(count);

      // Increment the counter value and update the display
      counter.innerText = ++count;
    });