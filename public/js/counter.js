// Select the counter elements
let count1 = document.getElementById("count1");
let count2 = document.getElementById("count2");
let count3 = document.getElementById("count3");

// Initialize the counter values
let value1 = 1;
let value2 = 1;  // Percentage counter starts at 1%
let value3 = 1;

// Define the maximum values for each counter
const max1 = 200;
const max2 = 97;  // 97% target for counter2
const max3 = 15000000000;  // 15 billion for counter3

// Total duration in milliseconds (1 second = 1000 milliseconds)
const totalDuration = 200;  // 1000ms (1 second)

// Calculate the increments per millisecond for each counter
const increment1 = (max1 - 1) / totalDuration;  // Increment per millisecond for counter1
const increment2 = (max2 - 1) / totalDuration;  // Increment per millisecond for counter2 (percentage)
const increment3 = (max3 - 1) / totalDuration;  // Increment per millisecond for counter3

// Function to format numbers with commas
function formatNumber(number) {
  return number.toLocaleString();  // Adds commas to large numbers
}

// Function to abbreviate numbers to "K", "M", "B" format
function abbreviateNumber(number) {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(0) + 'B';  // Billion (no decimals)
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(0) + 'M';  // Million (no decimals)
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(0) + 'K';  // Thousand (no decimals)
  }
  return formatNumber(number);  // If less than 1,000, just return the number with commas
}

// Function to increment the counters
function incrementCounters() {
  // Increment counter1 until it reaches max1 (200)
  if (value1 < max1) {
    value1 += increment1;
    if (value1 > max1) value1 = max1; // Cap at max1 if it exceeds
  }

  // Increment counter2 until it reaches max2 (97%)
  if (value2 < max2) {
    value2 += increment2;
    if (value2 > max2) value2 = max2; // Cap at max2 if it exceeds
  }

  // Increment counter3 until it reaches max3 (15B)
  if (value3 < max3) {
    value3 += increment3;
    if (value3 > max3) value3 = max3; // Cap at max3 if it exceeds
  }

  // Update the HTML to show the current count in abbreviated format
  count1.textContent = abbreviateNumber(Math.round(value1)) + "s";  // Display for counter1 (whole numbers + "s")
  count2.textContent = Math.round(value2) + "%";  // Display percentage for counter2 (whole number)
  count3.textContent = abbreviateNumber(Math.round(value3)) + "+";  // Display for counter3 (abbreviated + "+" at the end)

  // Stop the interval once all counters have reached their max values
  if (value1 === max1 && value2 === max2 && value3 === max3) {
    clearInterval(intervalId);  // Stop the interval when all counters have reached their max values
  }
}

// Call incrementCounters every 1 millisecond (1ms) for smooth progression
const intervalId = setInterval(incrementCounters, 1);  // Update every 1ms
