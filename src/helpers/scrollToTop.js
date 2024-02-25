export const scrollToTop = () => {
  const scrollTop = window.scrollY;
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, scrollTop - scrollTop / 8);
  }
};
