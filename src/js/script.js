const navegButton = document.querySelector('.navegador__button');
const navegMenu = document.querySelector('.navegador__container');
const tableButttons = document.querySelectorAll('.features__tab');

const clickQuestions = document.querySelectorAll('.articulos__questiones');

navegButton.addEventListener('click', ()=>{
    
    const navLogo = document.querySelector('.nav__logo');

    navegMenu.classList.toggle('nav__container--active');

    if(navegMenu.classList.contains('nav__container--active')){

        navLogo.setAttribute('src', 'img/logo-bookmark-white.svg');
        navegButton.setAttribute('src', 'img/icon-close.svg');

    }else{

        navLogo.setAttribute('src', 'img/logo-bookmark.svg');
        navegButton.setAttribute('src', 'img/icon-hamburger.svg');

    }

});

const removeActiveElements = (selector)=>{
    const elementsActive = document.querySelectorAll(`.${selector}`);

    if(elementsActive.length){

        elementsActive.forEach(elementActive =>{
            elementActive.classList.remove(selector);
        });

    }
}

tableButttons.forEach(tableButton =>{
    tableButton.addEventListener('click', (e)=>{
        e.preventDefault();

        if(!tableButton.classList.contains('features__tab--active')){
            
            const articleNumber = tableButton.getAttribute('data-article');

            const articleShow = document.querySelector(`.features__article:nth-of-type(${articleNumber})`);

            console.log(articleNumber);

            removeActiveElements('features__article--active');
            removeActiveElements('features__tab--active');


            articleShow.classList.add('features__article--active');
            tableButton.classList.add('features__tab--active');

        }
    })
});

clickQuestions.forEach(clickQuestion =>{
    clickQuestion.addEventListener('click', ()=>{

        const arrow = clickQuestion.children[0];
        arrow.classList.toggle('article__arrow--rotate');

        const anwserContainer = clickQuestion.nextElementSibling;
        
        anwserContainer.classList.toggle('article__content--show');

    });
});

window.addEventListener('resize', ()=>{
    const isMenuActive = document.querySelector('.nav__container--active');

    if(isMenuActive){
        const navLogo = document.querySelector('.nav__logo');

        navegMenu.classList.remove('nav__container--active');
        navLogo.setAttribute('src', './img/logo.png');
        navegButton.setAttribute('src', '././img/icon-hamburger.svg');
        
    }
});