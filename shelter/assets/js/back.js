const createBack = () => {
  let back = document.createElement('div');
  back.className('back');
  document.body.append(back);
}

export { createBack }