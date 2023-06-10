const wrapper = document.querySelector('.wrapper');

const changeWidth = () => {
  wrapper.style.width = `${document.body.clientWidth}px`;
}


window.addEventListener("resize", changeWidth);
window.addEventListener("load", changeWidth);


