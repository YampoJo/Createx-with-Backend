let plcItems = document.querySelectorAll('.projects-list-cards')

let plcArrowLeft = document.getElementById("plc-arrow-left")
let plcArrowRight = document.getElementById("plc-arrow-right")

let plcSelectSlider = 1


plcArrowRight.addEventListener('click', () => {
    if(plcSelectSlider < 3){
        plcItems[plcSelectSlider - 1].style.display = "none"
        plcItems[(plcSelectSlider - 1) + 1].style.display = "flex"

        plcSelectSlider++
    }
    else{
        plcItems[plcSelectSlider - 1].style.display = "none"
        plcSelectSlider = 1

        plcItems[plcSelectSlider - 1].style.display = "flex"
    }
})

plcArrowLeft.addEventListener('click', () => {
    if(plcSelectSlider > 1){
        plcItems[plcSelectSlider - 1].style.display = "none"
        plcItems[(plcSelectSlider - 1) - 1].style.display = "flex"

        plcSelectSlider--
    }
    else{
        plcItems[plcSelectSlider - 1].style.display = "none"
        plcSelectSlider = 3

        plcItems[plcSelectSlider - 1].style.display = "flex"
    }
})

