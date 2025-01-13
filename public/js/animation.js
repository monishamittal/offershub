document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.block');

  // Function to check if an element is in the viewport
  const isElementInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.9; // Trigger the animation when element is 60% in the viewport
  };

  // Check visibility on scroll
  const handleScroll = () => {
    blocks.forEach(block => {
      if (isElementInView(block)) {
        block.classList.add('visible');
      } else {
        block.classList.remove('visible');
      }
    });
  };

  // Listen to the scroll event
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger the check on initial load
});