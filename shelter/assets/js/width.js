
export const checkWidth = () => {
  let windowWidth = window.innerWidth;
  if (windowWidth > 1266) return 6;
  if (windowWidth <= 1266 && windowWidth >= 658) return 8;
  if (windowWidth <= 657) return 16;
}