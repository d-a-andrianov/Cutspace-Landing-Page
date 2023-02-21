const form = document.querySelector('.form');
const input = document.querySelector('.form__input');

input.addEventListener('focus', function () {
    form.classList.add('form--active');
    // когда input находится в фокус, добавляем form--active (что-то типо псевдокласса)
})

input.addEventListener('blur', function() {
    form.classList.remove('form--active');
    // когда input находится не в фокусе, убираем form--active (что-то типо псевдокласса)
})