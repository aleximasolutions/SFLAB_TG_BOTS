let navBtn = document.querySelector('#nan__btn');

navBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let body = document.querySelector('body');
    navBtn.classList.toggle('active');
    let hasClass = navBtn.classList.contains('active');
    hasClass ? body.classList.add('_no__scroll') : body.classList.remove('_no__scroll');
});

let nav = document.querySelector('.nav');
addEventListener('scroll', scrollControl);
scrollControl();

function scrollControl() {
    let height = nav.clientHeight;
    scrollY > height ? nav.classList.add('_scroll') : nav.classList.remove('_scroll');
}