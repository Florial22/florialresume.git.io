const cover = document.querySelectorAll("#cov")


cover.
forEach((element) =>{
    element.
    addEventListener("mouseover", ()=>{
        element.
        querySelector(".info-sup").
        classList.add("info-vue")
        
    })

} )

cover.forEach((element)=>{
    element.addEventListener("mouseout", ()=>{
        element.querySelector(".info-sup").
        classList.remove("info-vue")
    })
})

const darkLight = document.querySelector(".header-nav i")


document.querySelector(".header-nav div").
addEventListener("click",()=>{
    document.body.classList.toggle("light-theme")

    darkLight.classList.toggle("fa-sun")
    darkLight.classList.toggle("fa-moon")
})


// humberger menu
const opCloseBtn = document.querySelector(".humberger i")

const humbeHum = document.querySelector(".humberger")

humbeHum.addEventListener("click",()=>{
    document.querySelector(".header-nav ul").
    classList.toggle("active")
    opCloseBtn.classList.toggle("fa-xmark")
    opCloseBtn.classList.toggle("fa-bars")
})


// menu li

const list_menu = document.querySelectorAll(".header-nav ul li a")
const section = document.querySelectorAll("section")

list_menu.forEach((li)=>{
    li.addEventListener("click", ()=>{
        list_menu.forEach((newLi)=>{
            newLi.classList.remove("activeLink")
            li.classList.add("activeLink")
        })
    })
})


function activeMenu(){
    let len = section.length;

    while(--len && window.scrollY + 170 < section[len].offsetTop){}
    list_menu.forEach(ltx => ltx.classList.remove("activeLink"))
    list_menu[len].classList.add("activeLink")
}

activeMenu()


window.addEventListener("scroll", activeMenu)


