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

document.addEventListener('DOMContentLoaded', function () {
  // Testimonial data - array of objects
  const testimonials = [
    {
      text: "“Offershub is presently the market's top software platform. It is unbeatable due to the variety of features included and the pricing structure. It is a more reliable and effective tool thanks to the customised features provided by the team.”",
      author: "Amit Gandhi, FOUNDER & CEO",
      imageUrl: "/img/testimonial1.png",
      logoId: 1,
    },
    {
      text: "“Team Offershub delivered a comprehensive solution to all our queries and concerns related to tracking. Their skilled and responsive tech team ensured swift and efficient resolution of any issues. Highly recommended for their excellent service!”",
      author: "Pramod Kumar, FOUNDER",
      imageUrl: "/img/testimonial4.png",
      logoId: 2,
    },
    {
      text: "“Being from different industry, there was some issues to cope up with the platform in beginning but due to continuous support from Offershub team we are able to adapt this thing in our organization. They have also developed custom features for us and the panel work very smooth and fantastic.”",
      author: "Yashwardhan, Burab FOUNDER & CEO",
      imageUrl: "/img/testimonial2.png",
      logoId: 3,
    },
    {
      text: "“Offershub affiliate tracking platform has exceeded my expectations with their accurate tracking and user-friendly UI. Their continuous support has been exceptional, and I couldn't be happier with their service. I highly recommend Offershub to anyone looking for a reliable affiliate tracking solution.”",
      author: "Jalaj Gupta FOUNDER & CEO",
      imageUrl: "/img/testimonial3.jpeg",
      logoId: 4,
    },
    {
      text: "“Offershub has proven to be a game-changer for us in affiliate tracking. The platform's precise tracking capabilities and intuitive user interface have streamlined our operations significantly. What stands out most is their outstanding customer support, consistently addressing our needs promptly and efficiently. For anyone seeking a dependable affiliate tracking solution, Offershub is a choice I would strongly endorse.”",
      author: "Stuti Bharti, BUSINESS DEVELOPMENT MANAGER",
      imageUrl: "/img/testimonial5.jpeg",
      logoId: 5,
    },
  ];

  let currentIndex = 0; // Start with the first testimonial
  let intervalId;

  // Function to update the testimonial content
  function updateTestimonial(index) {
    const testimonial = testimonials[index];
    
    // Update testimonial text, author, and image
    document.getElementById('testimonial-text').textContent = testimonial.text;
    document.getElementById('testimonial-author').textContent = testimonial.author;
    document.getElementById('testimonial-image').src = testimonial.imageUrl;

    // Highlight the active logo
    const logos = document.querySelectorAll('.logos img');
    logos.forEach((logo) => {
      // Remove highlight from all logos
      logo.classList.remove('highlight');
      
      // Add highlight to the corresponding logo
      if (logo.getAttribute('data-testimonial-id') == testimonial.logoId) {
        logo.classList.add('highlight');
      }
    });
  }

  // Handle logo clicks
  const logos = document.querySelectorAll('.logos img');
  logos.forEach((logo) => {
    logo.addEventListener('click', () => {
      const logoId = parseInt(logo.getAttribute('data-testimonial-id')) - 1; // Get the testimonial index from the logo
      currentIndex = logoId;
      updateTestimonial(currentIndex);
    });
  });

  // Handle arrow button clicks
  document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial(currentIndex);
  });

  document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateTestimonial(currentIndex);
  });

  // Function to start auto-rotation
  function startAutoRotation() {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
      updateTestimonial(currentIndex);
    }, 2000); // Rotate every 100ms
  }

  // Function to stop auto-rotation
  function stopAutoRotation() {
    clearInterval(intervalId);
  }

  // Start the auto-rotation on initial load
  startAutoRotation();

  // Initial load
  updateTestimonial(currentIndex);

  // Optional: Stop auto-rotation if the user interacts with the testimonials
  document.querySelector('.testimonial-container').addEventListener('mouseenter', stopAutoRotation);
  document.querySelector('.testimonial-container').addEventListener('mouseleave', startAutoRotation);
});
