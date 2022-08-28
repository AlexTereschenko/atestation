let menuToggle=document.querySelector('.menuToggle');
let folder=document.querySelector('.folderContainer');

menuToggle.onclick = function() {
	folder.classList.toggle('active')
}

let folderBtns = document.querySelectorAll('.folderBtn')

folderBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
		folder.classList.remove('active')
    })
  });