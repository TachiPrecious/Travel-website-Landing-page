let bar = document.querySelector('#hbtn');

bar.style.color = 'green';

console.log(bar.id)

bar.onclick = () => {
    console.log('working')
}

bar.addEventListener('click', () =>{
    let mobileNav = document.querySelector('.mobile-nav')
    console.log(mobileNav);
})

function toggleNavBar(){ 
    console.log('working');
}