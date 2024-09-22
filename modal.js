let headerContent = document.getElementsByClassName('header__logo')
let recoveryButton = document.getElementById('recovery');
let headerLogo = document.getElementById('headerLogo');
let create = document.getElementById('createAccount')
let span = document.getElementsByClassName("close")[0]
let recovery = document.getElementById('recovery')
let spans = document.getElementById('closebtns')
let spanss = document.getElementById('closebtn')
let modal = document.getElementById("myModal")
let btn = document.getElementById("myBtns")


  btn.onclick = function () {
      modal.style.display = "block"
  }

  span.onclick = function () {
      modal.style.display = "none"
  }
  
  function closeModal() {
      modal.style.display = "none"
  }

  recovery.onclick = function (){
    modal.style.display = "none"
  }
  create.onclick = function (){
    modal.style.display = "none"
  }


  create.addEventListener('click', ()=>{
    headerLogo.style.display = 'none';
  })
  spanss.addEventListener('click', ()=>{
    headerLogo.style.display = 'block'
  })
  recoveryButton.addEventListener('click', () => {
    headerLogo.style.display = 'none';
  });
  spans.addEventListener('click', ()=>{
    headerLogo.style.display = 'block'
  })