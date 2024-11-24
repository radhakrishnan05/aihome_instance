// JavaScript to handle tab switching
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Handle tab switching
tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach((btn) => btn.classList.remove('active'));
        tabContents.forEach((content) => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        tabContents[index].classList.add('active');
    });
});

// Handle Firewall Enable/Disable
const firewallButtons = document.querySelectorAll('.firewall-button');
firewallButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === "Enable Firewall") {
            button.textContent = "Disable Firewall";
            button.style.backgroundColor = "#cc0000"; // Darker red to show disabled state
        } else {
            button.textContent = "Enable Firewall";
            button.style.backgroundColor = "#ff0000"; // Light red to show enabled state
        }
    });
});

// Handle Virtual Tunnel Creation
const tunnelForm = document.querySelector('form');
const tunnelButton = document.querySelector('form button');
tunnelButton.addEventListener('click', (e) => {
    e.preventDefault();
    const tunnelName = document.querySelector('#tunnel-name').value;
    const tunnelType = document.querySelector('#tunnel-type').value;

    // Display a message after creating the tunnel
    alert(`Tunnel "${tunnelName}" of type "${tunnelType}" created successfully.`);
    // Clear the form
    tunnelForm.reset();
});

// Handle Encryption Toggle
document.getElementById('encryption-toggle').addEventListener('click', function() {
    let button = this;
    if (button.textContent === 'Enable 128-bit Encryption') {
        button.textContent = 'Disable 128-bit Encryption';
        button.style.backgroundColor = '#cc0000';
    } else {
        button.textContent = 'Enable 128-bit Encryption';
        button.style.backgroundColor = '#ff0000';
    }
});

// Handle Network Security Toggle
document.getElementById('network-security-toggle').addEventListener('click', function() {
    let button = this;
    if (button.textContent === 'Enable Network Security') {
        button.textContent = 'Disable Network Security';
        button.style.backgroundColor = '#cc0000';
    } else {
        button.textContent = 'Enable Network Security';
        button.style.backgroundColor = '#ff0000';
    }
});

// Handle Login Reset
document.getElementById('reset-login').addEventListener('click', function() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (newUsername && newPassword) {
        alert(`Login credentials have been reset.\nUsername: ${newUsername}\nPassword: ${newPassword}`);
    } else {
        alert('Please fill in both fields.');
    }
});

// Handle Scan Button and Countdown
document.getElementById('scan-btn').addEventListener('click', function() {
    const scanResult = document.getElementById('scan-result');
    const scanTimer = document.getElementById('scan-timer');

    // Start the countdown
    let countdown = 10;
    scanTimer.style.visibility = 'visible';
    scanTimer.textContent = `Scanning... ${countdown} seconds remaining`;

    const timerInterval = setInterval(function() {
        countdown--;
        scanTimer.textContent = `Scanning... ${countdown} seconds remaining`;

        if (countdown === 0) {
            clearInterval(timerInterval);
            scanResult.textContent = "No threats found!";
            scanTimer.style.visibility = 'hidden';
        }
    }, 1000);
});

// Set initial values for device usage stats
document.getElementById('cpu-usage').textContent = '40%';
document.getElementById('ram-usage').textContent = '60%';
document.getElementById('disk-usage').textContent = '45%';
document.getElementById('tasks-running').textContent = '8';
document.getElementById('ai-modules-running').textContent = '2';

// Handle AI Module Toggle (ON/OFF)
const aiModuleOn = document.getElementById('ai-module-on');
const aiModuleOff = document.getElementById('ai-module-off');

aiModuleOn.addEventListener('change', () => {
    if (aiModuleOn.checked) {
        console.log('AI Module is ON');
    }
});

aiModuleOff.addEventListener('change', () => {
    if (aiModuleOff.checked) {
        console.log('AI Module is OFF');
    }
});

// Generate Device Usage Graph using Chart.js
const ctx = document.getElementById('device-usage-chart').getContext('2d');
const deviceUsageChart = new Chart(ctx, {
    type: 'bar', // Bar chart type
    data: {
        labels: ['CPU', 'RAM', 'Disk'], // Labels for the x-axis
        datasets: [{
            label: 'Device Usage (%)', // Label for the dataset
            data: [40, 60, 45], // Device usage data for CPU, RAM, Disk
            backgroundColor: ['#ff0000', '#ff6600', '#ffcc00'], // Bar colors for CPU, RAM, and Disk
            borderColor: ['#cc0000', '#ff3300', '#ff9900'], // Border colors for each bar
            borderWidth: 1 // Border width for each bar
        }]
    },
    options: {
        responsive: true, // Make the chart responsive to window resizing
        scales: {
            y: {
                beginAtZero: true, // Start the y-axis from 0
                max: 100 // Set the maximum value of y-axis to 100%
            },
            x: {
                ticks: {
                    font: {
                        size: 14, // Set the font size for x-axis labels
                    }
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14, // Set the font size for legend labels
                    }
                }
            }
        },
        title: {
            display: true, // Display chart title
            text: 'Device Usage Statistics', // Title text
            font: {
                size: 18, // Font size for the title
            }
        }
    }
});