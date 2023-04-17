let tabsBtn = document.querySelectorAll('.list-group-item');
let tabsItem = document.querySelectorAll('.products');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) { btn.classList.remove('btn-active') });
        e.currentTarget.classList.add('btn-active');

        tabsItem.forEach(function (element) { element.classList.remove('active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('active');

    });
});