let navAccount = document.querySelector('#nav-account')
let downTimes = document.querySelector('#downTimes')
let downInfo = document.querySelector('.down-info')
let exitTimes = document.querySelector('#faTimes')
let navBuy = document.querySelector('#nav-buy')
let newmodal = document.querySelector('.modal')
let header = document.querySelector('header')
let down = document.querySelector('.down')
let bars = document.querySelector('#bars')
let sub = document.querySelector('.sub')
bars.onclick = function () {
    sub.style.display = "block"
    header.style.display = 'none'
    bars.style.display = 'none'
    down.style.display = 'none'
}
exitTimes.addEventListener('click', ()=>{
    header.style.display = 'block'
    bars.style.display = 'block'
    down.style.display = 'flex'
    sub.style.display = "none"
})
down.addEventListener('click',()=>{
    downInfo.style.display = 'block'
    header.style.display = 'none'
    bars.style.display = 'none'
    down.style.display = 'none'

})
downTimes.addEventListener('click' , ()=>{
    downInfo.style.display = 'none'
    header.style.display = 'block'
    bars.style.display = 'block'
    down.style.display = 'flex'
})
navAccount.addEventListener('click',()=>{
    header.style.display = 'block'
    sub.style.display = 'none'
    bars.style.display = 'block'
    down.style.display = 'flex'
})
navAccount.onclick = function () {
    newmodal.style.display = "block"
}
navBuy.addEventListener('click',()=>{
    header.style.display = 'block'
    sub.style.display = 'none'
    bars.style.display = 'block'
    down.style.display = 'flex'
})
navBuy.onclick = function () {
    newmodal.style.display = "block"
}
document.getElementById('igri').addEventListener('click', function () {
    const list = document.getElementById('myList');
    list.classList.toggle('hidden');
});
document.getElementById('font').addEventListener('click', function () {
    const list = document.getElementById('myUl');
    list.classList.toggle('hidden');
});
window.onresize = function(){
    if(downInfo.style.display === 'block' || sub.style.display === 'block' && window.innerWidth > 1200){
        downInfo.style.display = 'none'
        sub.style.display = 'none'
        header.style.display = 'flex'
        location.reload();
    }
}