let bars = document.querySelector('#bars')
let sub = document.querySelector('.sub')
let down = document.querySelector('.down')
bars.onclick = function () {
    sub.style.display = "block"
    down.classList.remove('.fa-chevron-circle-down')
    down.classList.add('.fa-times')
} 


document.getElementById('igri').addEventListener('click', function () {
    const list = document.getElementById('myList');
    list.classList.toggle('hidden');
});


document.getElementById('font').addEventListener('click', function () {
    const list = document.getElementById('myUl');
    list.classList.toggle('hidden');
});
