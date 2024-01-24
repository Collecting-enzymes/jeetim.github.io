function updateTimer() {
    const now = new Date();
    const targetDate = new Date("2024-01-29T21:59:59"); // Set your target date and time

    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function updateDate() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    document.getElementById("date").innerHTML = `Today is ${formattedDate}`;
}

function update() {
    updateTimer();
    updateDate();
}

// Update every second
setInterval(update, 1000);

// Initial update
update();
