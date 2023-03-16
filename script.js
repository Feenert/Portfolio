const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

function addEventListenerToNodeList() {
    const mobile_menu_link = document.querySelectorAll('.mobile-nav-links');
    for (let i = 0, len = mobile_menu_link.length; i < len; i++) {
        mobile_menu_link[i].addEventListener('click', function () {
            mobile_menu.classList.toggle("is-active");

        });
    }
}

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})
