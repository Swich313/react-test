const tabs = document.getElementById("tabs");
const tabs1 = document.getElementById("tabs1");
const content = document.querySelectorAll(".content");
const content1 = document.querySelectorAll(".content1");
// const changeClass = el => {
//     for(i=0; i<tabs.children.length;i++){
// tabs.children[i].classList.remove("active");
//     }
//     el.classList.add("active");
// }
const allTab = document.querySelectorAll(".tab-btn");

console.log(allTab);
function changeClass (element){
    for(let i=0; i<allTab.length;i++){
       allTab[i].classList.remove("active");
    }
    element.classList.add("active");
}
const changeSubClass = element =>{
    for(let i=0; i<tabs1.children.length;i++){
       tabs1.children[i].classList.remove("active");
    }
    element.classList.add("active");
}
tabs.addEventListener("click", (a) =>{
   const currentTab = a.target.dataset.btn;
   changeClass(a.target)
     for(let i=0; i < content.length;i++){
       content[i].classList.remove("active");
       if(content[i].dataset.content === currentTab){
           content[i].classList.add("active");
       }
   }
})
tabs1.addEventListener("click", (b) =>{
    const currentTab = b.target.dataset.subbtn;
    changeSubClass(b.target)
     for(let i=0; i < content1.length;i++){
        content1[i].classList.remove("active");
        if(content1[i].dataset.subcontent === currentTab){
            content1[i].classList.add("active");
        }
    }
 })
 