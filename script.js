const menuButton = document.getElementById('menuButton');
const menuList = document.getElementById('menuList');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('active');
});
