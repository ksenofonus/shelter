
export const checkWidth = () => {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 1266 && windowWidth > 767) {
    return 8;
  } else if (windowWidth <= 657) {
    return 16;
  }
  return 6;
}