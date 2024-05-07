function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    document.body.classList.remove('menu-open'); // odebrání třídy 'menu-open'
}
  
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    document.body.classList.add('menu-open'); // přidání třídy 'menu-open'
}

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        showSidebar();
    } else {
        hideSidebar();
    }
}



var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
