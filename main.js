const topNavButtons = document.querySelectorAll(".top_nav_buttons");

topNavButtons.forEach(topNavButton => {
    topNavButton.addEventListener("focus",()=>{
        topNavButton.innerHTML = ``
   })
   topNavButton.addEventListener("blur",()=>{
    topNavButton.innerHTML = topNavButton.value
})
});

const plus = document.querySelector(".plus_fed_credits")

plus.addEventListener("click",()=>{
    // let soles = document.querySelector(".fed_credits")

    // soles.innerHTML = parseInt(soles.innerHTML) + 1

    setInterval(() => {
        let soles = document.querySelector(".fed_credits")
        soles.innerHTML = parseInt(soles.innerHTML) + 1
    }, 1);
    
})


