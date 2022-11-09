const hiddenElement = document.querySelector('.footer');
const btn = document.querySelector('.hero__box-scroll-btn');

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);