  let modal = document.getElementById("myModal")
  let btn = document.getElementById("myBtns")
  let span = document.getElementsByClassName("close")[0]
  let create = document.getElementById('createAccount')
  let recovery = document.getElementById('recovery')
  let headerContent = document.getElementsByClassName('header__logo')
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

  window.onclick = function (event) {
      if (event.target == modal) {
        closeModal()
      }
  }