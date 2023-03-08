const darkSwitchIcon = document.querySelector("#dark-switch-icon");
        const darkSwitch = document.querySelector("#dark-switch")
        const darkText = document.querySelector("#dark-text")
        const darkChangeText = document.querySelector("#dark-text-change")
        const html = document.documentElement;
        let isDarkMode = false;

        // Switch theme function
        const toggleTheme = () => {
            isDarkMode = !isDarkMode;
            switchTheme()
        }

        const toDark = () => {
            darkSwitchIcon.classList.add('translate-x-full', 'rotate-[360deg]','bg-slate-900')
            darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-100"></i>`
            // darkChangeText.innerText = 'Dark'
            darkSwitch.classList.remove('bg-slate-800')
            darkSwitch.classList.add('bg-slate-100')
            localStorage.setItem('data-theme', 'dark')
            html.classList.add('dark')
            darkText.classList.add('-translate-x-7')
            darkText.innerText = 'ON'
        }

        const toLight = () => {
            darkSwitchIcon.classList.remove('translate-x-full', 'bg-slate-900')
            // darkChangeText.innerText = 'Light'
            darkSwitch.classList.remove('bg-slate-100')
            darkSwitch.classList.add('bg-slate-800')
            localStorage.removeItem('data-theme')
            html.classList.remove('dark')
            darkText.classList.remove('-translate-x-7')
            darkText.innerText = 'FF'
            darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`
            setTimeout(() => {
                darkSwitchIcon.classList.remove('rotate-[360deg]')
            }, 200)
        }

        const switchTheme = () => {
            isDarkMode ? toDark() : toLight()
            // OR
            // if (isDarkMode) {
            //     toDark()
            // } else {
            //     toLight()
            // }
        }


        // If you do reload the webpage,
        // doesn't change you choose theme.
        // This `dataTheme` function save permentaly choose theme.

        const dataTheme = localStorage.getItem('data-theme')

        dataTheme === 'dark' ? toDark() : toLight();
        // or
        // if(dataTheme === 'dark') {
        //     toDark()
        // } else {
        //     toLight()
        // }

// feature section

let btnOne = document.getElementById('btnOne');
let btnTwo = document.getElementById('btnTwo');
let btnThree = document.getElementById('btnThree');
let btnFour = document.getElementById('btnFour');

let imageOne = document.getElementById('imageOne');
let imageTwo = document.getElementById('imageTwo');
let imageThree = document.getElementById('imageThree');
let imageFour = document.getElementById('imageFour');

btnOne.addEventListener('click', ()=> {
    btnOne.classList.add('bg-white/10');
    btnTwo.classList.remove('bg-white/10');
    btnThree.classList.remove('bg-white/10');
    btnFour.classList.remove('bg-white/10');
    imageOne.classList.remove('hidden');
    imageTwo.classList.add('hidden');
    imageThree.classList.add('hidden');
    imageFour.classList.add('hidden');
})
btnTwo.addEventListener('click', ()=>{
    btnOne.classList.remove('bg-white/10');
    btnTwo.classList.add('bg-white/10');
    btnThree.classList.remove('bg-white/10');
    btnFour.classList.remove('bg-white/10');
    imageOne.classList.add('hidden');
    imageTwo.classList.remove('hidden');
    imageThree.classList.add('hidden');
    imageFour.classList.add('hidden');
})
btnThree.addEventListener('click', ()=>{
    btnOne.classList.remove('bg-white/10');
    btnTwo.classList.remove('bg-white/10');
    btnThree.classList.add('bg-white/10');
    btnFour.classList.remove('bg-white/10');
    imageOne.classList.add('hidden');
    imageTwo.classList.add('hidden');
    imageThree.classList.remove('hidden');
    imageFour.classList.add('hidden');
})
btnFour.addEventListener('click', ()=>{
    btnOne.classList.remove('bg-white/10');
    btnTwo.classList.remove('bg-white/10');
    btnThree.classList.remove('bg-white/10');
    btnFour.classList.add('bg-white/10');
    imageOne.classList.add('hidden');
    imageTwo.classList.add('hidden');
    imageThree.classList.add('hidden');
    imageFour.classList.remove('hidden');
})

// second feature section

let cardOne = document.querySelector('.card-one');
let cardTwo = document.querySelector('.card-two');
let cardThree = document.querySelector('.card-three');

let reportText = document.getElementById('report-text');
let inventoryText = document.getElementById('inventory-text');
let contactText = document.getElementById('contact-text');

let reportIcon = document.getElementById('report-icon');
let inventoryIcon = document.getElementById('inventory-icon');
let contactIcon = document.getElementById('contact-icon');

let reportImg = document.getElementById('reportImg');
let inventoryImg = document.getElementById('inventoryImg');
let contactImg = document.getElementById('contactImg');

cardOne.addEventListener('click', ()=>{
    // icon
    reportIcon.classList.add('bg-blue-500');
    reportIcon.classList.remove('bg-slate-400');
    inventoryIcon.classList.remove('bg-blue-500');
    contactIcon.classList.remove('bg-blue-500');
    inventoryIcon.classList.add('bg-slate-400');
    contactIcon.classList.add('bg-slate-400');
    // text
    reportText.classList.add('text-blue-500');
    reportText.classList.remove('text-slate-500');
    inventoryText.classList.add('text-slate-500');
    inventoryText.classList.remove('text-blue-500');
    contactText.classList.remove('text-blue-500');
    contactText.classList.add('text-slate-500');
    // img
    reportImg.classList.remove('hidden');
    inventoryImg.classList.add('hidden');
    contactImg.classList.add('hidden');
})
cardTwo.addEventListener('click', ()=>{
    // icon
    reportIcon.classList.remove('bg-blue-500');
    reportIcon.classList.add('bg-slate-400');
    inventoryIcon.classList.add('bg-blue-500');
    contactIcon.classList.remove('bg-blue-500');
    inventoryIcon.classList.remove('bg-slate-400');
    contactIcon.classList.add('bg-slate-400');
    // text
    reportText.classList.remove('text-blue-500');
    reportText.classList.add('text-slate-500');
    inventoryText.classList.remove('text-slate-500');
    inventoryText.classList.add('text-blue-500');
    contactText.classList.remove('text-blue-500');
    contactText.classList.add('text-slate-500');
    // img
    inventoryImg.classList.remove('hidden');
    reportImg.classList.add('hidden');
    contactImg.classList.add('hidden');
})
cardThree.addEventListener('click', ()=>{
    // icon
    reportIcon.classList.remove('bg-blue-500');
    reportIcon.classList.add('bg-slate-400');
    inventoryIcon.classList.remove('bg-blue-500');
    contactIcon.classList.add('bg-blue-500');
    inventoryIcon.classList.add('bg-slate-400');
    contactIcon.classList.remove('bg-slate-400');
    // text
    reportText.classList.remove('text-blue-500');
    reportText.classList.add('text-slate-500');
    inventoryText.classList.add('text-slate-500');
    inventoryText.classList.remove('text-blue-500');
    contactText.classList.add('text-blue-500');
    contactText.classList.remove('text-slate-500');
    // img
    contactImg.classList.remove('hidden');
    reportImg.classList.add('hidden');
    inventoryImg.classList.add('hidden');
})

 // Mobile Menu

const mobileMenu = document.querySelector('.mobile-menu');
const mobileSlide = document.querySelector('#mobile-slide');
const mobileSlideClose = document.querySelector('#mobile-slide-close');

mobileMenu.addEventListener('click', () => {
    mobileSlide.style.left = '0px';
})
mobileSlideClose.addEventListener('click', () => {
    mobileSlide.style.left = '-100%';
})

// mobile-slide-closed

let mobileSlideClosed = document.querySelectorAll('.mobile-slide-closed');
for (let i=0; i< mobileSlideClosed.length; i++) {
    console.log (mobileSlideClosed[i]);
    mobileSlideClosed[i].addEventListener('click', () => {
        mobileSlide.style.left = '-100%';
    })
}

// waypoint
const navControl = document.querySelector('.nav-control');
var waypoint = new Waypoint({
    element: document.getElementById('features'),
    handler: function(direction) {
        if(direction === 'down') {
            navControl.classList.add('fixed', 'w-full', 'shadow-xl', 'top-0', 'bg-slate-100', 'animate__slideInDown')
        } else {
            navControl.classList.remove('fixed', 'w-full', 'shadow-xl', 'top-0', 'bg-slate-100', 'animate__slideInDown')
        }
    },
        offset: '30%'
})

// scrollreveal

ScrollReveal().reveal('.headline', {
    delay: 200,
    origin: 'bottom',
    distance: '30px',
    interval: 300,
    scale: 0.5,
    reset: true,
});