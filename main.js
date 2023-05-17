const tabsBtn = document.querySelectorAll('.list-group-item');
const tabsItem = document.querySelectorAll('.products');
const tabsItemProducts = document.querySelectorAll('.row__products');
const tabsBtnProducts = document.querySelectorAll('.btn__products');
const product = document.querySelectorAll('.product');
const productImg = document.querySelectorAll('.product-img');
const productText = document.querySelectorAll('.product__text');
// const productTitle = document.querySelectorAll('.product-title');
const productDesc = document.querySelectorAll('.product-desc');
const modal = document.querySelector('.modal');
const modalItem = document.querySelector('.modal__item');
const modalItemImg = document.querySelector('.modal__item-img');
const modalItemDescr = document.querySelector('.modal__item-descr');
const close = document.querySelector('.close');


tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) { btn.classList.remove('btn-active') });
        e.currentTarget.classList.add('btn-active');

        tabsItemProducts.forEach(item => {item.classList.remove('row--active')})

        tabsItem.forEach(function (element) { element.classList.remove('active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('active');
        if (element.textContent === 'Издательская полиграфия') {
            document.querySelector('.one-tab').classList.add('row--active')
        } else if (element.textContent === 'Корпоративная полиграфия') {
            document.querySelector('.two-tab').classList.add('row--active')
        } else if (element.textContent === 'Рекламная полиграфия') {
            document.querySelector('.three-tab').classList.add('row--active')
        } else if (element.textContent === 'Упаковка') {
            document.querySelector('.four-tab').classList.add('row--active')
        } else if (element.textContent === 'Сувенирная продукция') {
            document.querySelector('.five-tab').classList.add('row--active')
        } else if (element.textContent === 'Флексопечать (этикетки для продукции)') {
            document.querySelector('.six-tab').classList.add('row--active')
        }

    });
});

tabsBtnProducts.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;
        
        tabsBtnProducts.forEach(function (btn) {
            btn.classList.remove('btn__row--active')
        });
        e.currentTarget.classList.add('btn__row--active');

        tabsItemProducts.forEach(function (element) { element.classList.remove('row--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('row--active');

    });
});

product.forEach((item) => {
    item.addEventListener('click', function () {
        item.classList.add('product--active')
        modal.classList.add('modal--active')
        item.children[1].children[1].classList.add('product-desc--active')
        // productImg.classList.add('product-img--active')
        // productText.classList.add('product__text--active')
        console.log(item.children[0].innerHTML);
        modalItemImg.innerHTML = item.children[0].innerHTML
        modalItemDescr.innerHTML = item.children[1].innerHTML
    })
});

close.addEventListener('click', ()=> {
    modal.classList.remove('modal--active')
    productDesc.forEach(el => {
        el.classList.remove('product-desc--active')
    })
})

modal.addEventListener('click',(e)=> {
    if (e.target === modal) {
        modal.classList.remove('modal--active')
        productDesc.forEach(el => {
            el.classList.remove('product-desc--active')
        })
    }
})


