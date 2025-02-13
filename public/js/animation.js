document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.block');

  // Function to check if an element is in the viewport
  const isElementInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.9; // Trigger the animation when element is 90% in the viewport
  };

  // Function to handle visibility and animation on scroll
  const handleScroll = () => {
    blocks.forEach(block => {
      if (isElementInView(block)) {
        block.classList.add('visible');
      } else {
        block.classList.remove('visible');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  handleScroll();
});
