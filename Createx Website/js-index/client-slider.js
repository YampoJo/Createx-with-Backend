let csiItemsHeader = document.querySelectorAll('.client-slider-info')
let csiItemsFooter = document.querySelectorAll('.client-name-position')

let csiArrowLeft = document.getElementById("csi-arrow-left")
let csiArrowRight = document.getElementById("csi-arrow-right")

let csiSelectSlider = 1


csiArrowRight.addEventListener('click', () => {
    if(csiSelectSlider < 2){
        csiItemsHeader[csiSelectSlider - 1].style.display = "none"
        csiItemsHeader[(csiSelectSlider - 1) + 1].style.display = "flex"

        csiItemsFooter[csiSelectSlider - 1].style.display = "none"
        csiItemsFooter[(csiSelectSlider - 1) + 1].style.display = "flex"

        csiSelectSlider++
    }
    else{
        csiItemsHeader[csiSelectSlider - 1].style.display = "none"
        csiItemsFooter[csiSelectSlider - 1].style.display = "none"
        csiSelectSlider = 1

        csiItemsHeader[csiSelectSlider - 1].style.display = "flex"
        csiItemsFooter[csiSelectSlider - 1].style.display = "flex"
    }
})

csiArrowLeft.addEventListener('click', () => {
    if(csiSelectSlider > 1){
        csiItemsHeader[csiSelectSlider - 1].style.display = "none"
        csiItemsHeader[(csiSelectSlider - 1) - 1].style.display = "flex"

        csiItemsFooter[csiSelectSlider - 1].style.display = "none"
        csiItemsFooter[(csiSelectSlider - 1) - 1].style.display = "flex"

        csiSelectSlider--
    }
    else{
        csiItemsHeader[csiSelectSlider - 1].style.display = "none"
        csiItemsFooter[csiSelectSlider - 1].style.display = "none"
        csiSelectSlider = 2

        csiItemsHeader[csiSelectSlider - 1].style.display = "flex"
        csiItemsFooter[csiSelectSlider - 1].style.display = "flex"
    }
})

