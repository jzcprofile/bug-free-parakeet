
console.log('Hello World!');


const name = "Jeziah Cortez"; 
let hasDownloadedResume = false; // Tracking variable


function showGreeting(userName) {
    // BONUS: Time-based Greeting
    const hour = new Date().getHours();
    let timeGreeting;

    if (hour < 12) timeGreeting = "Good Morning";
    else if (hour < 18) timeGreeting = "Good Afternoon";
    else timeGreeting = "Good Evening";

    return `${timeGreeting}, my name is ${userName}! Welcome to my portfolio!`;
}

function daysUntilDeadline(targetDate) {
    const today = new Date();
    const deadline = new Date(targetDate);
    
    // Difference in milliseconds
    const timeDiff = deadline - today;
    
    // Math: ms / (1000ms * 60s * 60m * 24h)
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
    return dayDiff;
}

window.onload = () => {
    // Dynamically update greeting (Step 4)
    const greetingElement = document.getElementById('greeting-display');
    if (greetingElement) {
        greetingElement.textContent = showGreeting(name);
    }

    // Calculate and display remaining days (Step 5)
    const projectDeadline = "2026-05-01";
    const remainingDays = daysUntilDeadline(projectDeadline);
    
    console.log(`Days until project deadline: ${remainingDays}`);
    
    const deadlineDisplay = document.getElementById('days-remaining');
    if (deadlineDisplay) {
        deadlineDisplay.textContent = `(Remaining: ${remainingDays} days)`;
    }
};

const downloadBtn = document.getElementById('download-btn');

if (downloadBtn) {
    downloadBtn.addEventListener('click', (event) => {
        // Step 3: Check if already downloaded to show only once
        if (!hasDownloadedResume) {
            // BONUS: 2-second delay
            setTimeout(() => {
                alert("Your resume is downloaded successfully!");
                hasDownloadedResume = true; // Update boolean
            }, 2000);
        }
    });
}
