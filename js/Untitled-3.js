let sidebar = document.querySelector(".sidebar");
let button = document.querySelector(".button");
let search = document.querySelector(".search");
button.onclick = function(){
    sidebar.classList.toggle("active");
}
search.onclick = function(){
    sidebar.classList.toggle("active");
}
let marker = document.querySelector('#marker');
let list = document.querySelector('ul li');
function moveIndicator(e)
{
    marker.style.top = e.offsettop + 'px';
}
list.forEach(link =>{
    link.addEventListener('mousemove',(e) => {
        moveIndicator(e.target);
    })
})