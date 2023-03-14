const tabs = () => {
    let tabs = document.querySelectorAll('.currencies__tab'),
        tabsContent = document.querySelectorAll('.currencies__content'),
        tabsParent = document.querySelector('.currencies__tabs-inner');
  
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('currencies__tab--active');
        });
    }
  
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('currencies__tab--active');
    }
    
    hideTabContent();
    showTabContent();
  
    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if (target && target.classList.contains('currencies__tab')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;