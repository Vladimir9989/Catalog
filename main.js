let tabsBtn = document.querySelectorAll('.list-group-item');
let tabsItem = document.querySelectorAll('.products');
let tabsItemProducts = document.querySelectorAll('.row__products');
let tabsBtnProducts = document.querySelectorAll('.btn__products');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) { btn.classList.remove('btn-active') });
        e.currentTarget.classList.add('btn-active');

        tabsItem.forEach(function (element) { element.classList.remove('active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('active');
        if (element.textContent === 'Книги') {
            tabsItemProducts[0].classList.add('row--active')
        } else if (element.textContent === 'Журналы') {
            tabsItemProducts[4].classList.add('row--active')
        } else if (element.textContent === 'Брошюры') {
            tabsItemProducts[8].classList.add('row--active')
        } else if (element.textContent === 'Листовки') {
            tabsItemProducts[12].classList.add('row--active')
        } else if (element.textContent === 'Сувенирная продукция') {
            tabsItemProducts[16].classList.add('row--active')
        }

    });
});

tabsBtnProducts.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtnProducts.forEach(function (btn) { btn.classList.remove('btn__row--active') });
        e.currentTarget.classList.add('btn__row--active');

        tabsItemProducts.forEach(function (element) { element.classList.remove('row--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('row--active');

    });
});

