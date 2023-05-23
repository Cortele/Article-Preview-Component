const shareIcon = document.querySelector('.share__icon');
const clickedShare = document.querySelector('.clicked__share')
const clickedContainer = document.querySelector('.clicked__container')



function removeShare() {
    clickedContainer.classList.toggle('visible')
}

function addShare() {
    clickedContainer.classList.add('visible')
}

shareIcon.addEventListener('click', removeShare)
clickedShare.addEventListener('click', addShare)
