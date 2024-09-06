const back = document.createElement('div');
back.className = 'back';
const createBack = () => {
  document.body.append(back);
  document.body.classList.add('body_no-scroll');
}

const removeBack = () => {
  back.remove();
  document.body.classList.remove('body_no-scroll');
}

export { createBack, back, removeBack }