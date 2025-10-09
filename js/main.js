
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });
});
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
function setMobile(){
  if(window.innerWidth < 820){
    if (burger) burger.style.display='inline-flex';
    if (menu) menu.style.display='none';
  } else {
    if (burger) burger.style.display='none';
    if (menu) menu.style.display='flex';
  }
}
setMobile();
window.addEventListener('resize', setMobile);
burger?.addEventListener('click', ()=>{
  if (!menu) return;
  menu.style.display = (menu.style.display==='none' || menu.style.display==='') ? 'flex' : 'none';
});
