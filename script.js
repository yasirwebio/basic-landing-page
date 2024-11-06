const openmenu = document.getElementById('menu-open'); 
const closemenu = document.getElementById('menu-close'); 
const nav_links  = document.getElementById('nav-links')
const toggle_wrapper = document.getElementById('toggle_buttons');

toggle_wrapper.addEventListener('click', ()=>{
    const isexpanded = toggle_wrapper.getAttribute('aria-expanded');
    if(isexpanded === "false"){
    nav_links.style.transform = 'translateX(0)';
    toggle_wrapper.setAttribute('aria-expanded', 'true');
    openmenu.style.display = "none";
    closemenu.style.display = "block";
    
}
    else {
    toggle_wrapper.setAttribute('aria-expanded', 'false');
    nav_links.style.transform = 'translateX(100%)';
    openmenu.style.display = "block";
    closemenu.style.display = "none";
    }
})


