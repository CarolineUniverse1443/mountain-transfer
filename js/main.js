const body = document.body;
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.header__burger');
let isOpen = false;

const menuToggle = function()
{
    if (window.innerWidth >= 768) return;
    isOpen = !isOpen;

    if(isOpen)
    {
        body.style.overflow = 'hidden';
        header.style.overflow = 'unset';
        burgerMenu.classList.add('active');
    }
    else
    {
        body.style.overflow = 'unset';
        burgerMenu.classList.remove('active');
        setTimeout(() =>
        {
            header.style.overflow = 'hidden';
        }, 500);
    }
};