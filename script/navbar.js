let navAccount = document.querySelector('#nav-account')
let downTimes = document.querySelector('#downTimes')
let downInfo = document.querySelector('.down-info')
const toggleigri = document.getElementById('igri')
const toggleSpan = document.getElementById('font')
let exitTimes = document.querySelector('#faTimes')
const myList = document.getElementById('myList')
const itemList = document.getElementById('myUl')
let navBuy = document.querySelector('#nav-buy')
let newmodal = document.querySelector('.modal')
let header = document.querySelector('header')
let headers = document.querySelector('.header__bg');
let down = document.querySelector('.down')
let bars = document.querySelector('#bars')
let sub = document.querySelector('.sub')

bars.onclick = function () {
    sub.style.display = "block"
    header.style.display = 'none'
    headers.style.display = 'none'
    bars.style.display = 'none'
    down.style.display = 'none'
}
exitTimes.addEventListener('click', () => {
    header.style.display = 'block'
    headers.style.display = 'block'
    bars.style.display = 'block'
    down.style.display = 'flex'
    sub.style.display = "none"
})
down.addEventListener('click', () => {
    downInfo.style.display = 'block'
    header.style.display = 'none'
    headers.style.display = 'none'
    bars.style.display = 'none'
    down.style.display = 'none'

})
downTimes.addEventListener('click', () => {
    downInfo.style.display = 'none'
    header.style.display = 'block'
    headers.style.display = 'block'
    bars.style.display = 'block'
    down.style.display = 'flex'
})
navAccount.addEventListener('click', () => {
    header.style.display = 'block'
    headers.style.display = 'block'
    sub.style.display = 'none'
    bars.style.display = 'block'
    down.style.display = 'flex'
})
navAccount.onclick = function () {
    newmodal.style.display = "block"
}
navBuy.addEventListener('click', () => {
    header.style.display = 'block'
    headers.style.display = 'block'
    sub.style.display = 'none'
    bars.style.display = 'block'
    down.style.display = 'flex'
})
navBuy.onclick = function () {
    newmodal.style.display = "block"
}
window.onresize = function () {
    if (downInfo.style.display === 'block' || sub.style.display === 'block' && window.innerWidth > 1200) {
        downInfo.style.display = 'none'
        sub.style.display = 'none'
        header.style.display = 'flex'
        location.reload();
    }
}
toggleSpan.addEventListener('click', function() {
    if (itemList.classList.contains('hidden')) {
        itemList.classList.remove('hidden');
    } else {
        itemList.classList.add('hidden');
    }
});
toggleigri.addEventListener('click', function() {
    if (myList.classList.contains('hidden')) {
        myList.classList.remove('hidden');
    } else {
        myList.classList.add('hidden');
    }
});