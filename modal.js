    // Get the modal
    var modal = document.getElementById("myModal")

    // Get the button that opens the modal
    var btn = document.getElementById("myBtns")

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0]

    
    // When the user clicks the button, open the modal 
    btn.onclick = function () {
      modal.style.display = "block"
    }


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none"
    }
    var modal = document.getElementById("myModal")

    function closeModal() {
      modal.style.display = "none"
    }


    // Close modal when clicking outside of it
    window.onclick = function (event) {
      if (event.target == modal) {
        closeModal()
      }
    }