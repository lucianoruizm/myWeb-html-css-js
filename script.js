// Look for elements
const menu = document.querySelector('.drop-down-menu')
const hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
// Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    menu.classList.toggle('show')
});












// const data = [{
//     img : "https://www.xaviro.com/assets/2c07c8f61822f4d3a53b.svg",
//     desc : "HTML"
// },
// {
//     img : "https://www.xaviro.com/assets/2c07c8f61822f4d3a53b.svg",
//     desc :  "CSS"
// },
// {
//     img : "https://www.xaviro.com/assets/2c07c8f61822f4d3a53b.svg",
//     desc : "JavaScript"
// }
// ]

// let projects = document.querySelector('#projects');
// projects.style.background = 'red';

// function dynamic(src, desc) {
//     let div = document.createElement("div"); // Create a div
//     let img = document.createElement("img");
//     img.src = src;
//     let p = document.createElement("p");
//     p.innerHTML = desc;
//     div.appendChild(img);
//     div.appendChild(p);
//     projects.appendChild(div);
// }

// data.forEach(({img, desc}) => dynamic(img, desc));