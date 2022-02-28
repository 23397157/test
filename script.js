const search = document.querySelector('.fas');
const searchDiv = document.querySelector('.search-txt');
const cancle = document.querySelector('.cancel');
const searchinput = document.querySelector('.search');
const cancelBtn = document.querySelector('.btn-cancel');
search.addEventListener('click', function () {
    searchDiv.classList.add('search-click');
    searchDiv.classList.remove('search-txt');
    cancle.classList.remove('cancel');
    searchinput.classList.remove('search');
});
cancelBtn.addEventListener('click', function () {
    searchDiv.classList.remove('search-click');
    searchDiv.classList.add('search-txt');
    cancle.classList.add('cancel');
    searchinput.classList.add('search');
});
