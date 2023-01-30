document.querySelectorAll('.revealText').forEach(button => { 
button.addEventListener('click', () => { 
button.classList.toggle('revealTextActive'); 
    })
})

const mainMenu = document.querySelector('.mainMenu'); 
const openMenu = document.querySelector('.openMenu'); 
const menuItems = document.querySelectorAll('.mainMenu li a');

let menuOpen = false;

openMenu.addEventListener('click', e => { 
  e.stopImmediatePropagation(); 
  toggle();
}); 

menuItems.forEach(item => { 
    item.addEventListener('click', close)
}); 

function toggle () { 
  if (mainMenu.classList.contains('show')) {
    close();
    menuOpen = false;
  } else {
    show();
    menuOpen = true;
  }
}

function show(){
    mainMenu.classList.add('show'); 
}

function close(){  
  mainMenu.classList.remove('show'); 
}
