const slides= document.querySelectorAll(".slide");
// let index = 0;
// function activeSlide (a){
//     for (const slide of slides){
//         slide.classList.remove("active");
//     }
//     slides[a].classList.add("active");
// }

// slides.forEach((item, indexSlide) =>{
//     item.addEventListener("click", ()=>{
//         index = indexSlide;
//         activeSlide(index);
//     });
// });
for (const slide of slides){
    slide.addEventListener('click', ()=>{
        clearActive()
        slide.classList.add('active')
    })
}
function clearActive(){
    slides.forEach((slide)=>{
slide.classList.remove('active')
    })
}
