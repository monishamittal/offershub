document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.block');
  const highlights = document.querySelectorAll('.highlight');

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

    // Check visibility of highlighted words and apply background color change with a slight delay
    highlights.forEach(highlight => {
      if (isElementInView(highlight)) {
        setTimeout(() => {
          highlight.classList.add('visible'); // Add the "visible" class after a delay to trigger the right-to-left effect
        }, 500); // 500ms delay before starting the animation
      } else {
        highlight.classList.remove('visible');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  handleScroll();
});
