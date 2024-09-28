let bars = document.querySelector('#bars')
let sub = document.querySelector('.sub')
let down = document.querySelector('.down')
let header = document.querySelector('header')
let exitTimes = document.querySelector('#faTimes')
let downInfo = document.querySelector('.down-info')
let downTimes = document.querySelector('#downTimes')
bars.onclick = function () {
    sub.style.display = "block"
    header.style.display = 'none'
    bars.style.display = 'none'
    down.style.display = 'none'
}
exitTimes.addEventListener('click', ()=>{
    header.style.display = 'block'
    bars.style.display = 'block'
    down.style.display = 'block'
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
    down.style.display = 'block'
})

document.getElementById('igri').addEventListener('click', function () {
    const list = document.getElementById('myList');
    list.classList.toggle('hidden');
});


document.getElementById('font').addEventListener('click', function () {
    const list = document.getElementById('myUl');
    list.classList.toggle('hidden');
});
