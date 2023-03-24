const header = () => {
    const headerBtn = document.querySelector('.header__mob-btn'),
          headerContent = document.querySelector('.interactive__items');

    headerBtn.addEventListener('click', () => {
        headerContent.classList.toggle('interactive__items--active');
    });
};

export default header;  