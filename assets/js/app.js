
const burgerNav = document.querySelector('.nav-burger');
const navList = document.querySelector('.nav-list')

burgerNav.addEventListener('click' , function(e) {
  navList.classList.toggle('active');
  burgerNav.classList.toggle('active');
})