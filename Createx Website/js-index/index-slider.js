let createxItem = document.querySelector('.createx-construction')

let items = document.querySelectorAll('.carousel-item')

let bulletsText = document.querySelectorAll('.carousel-bullet-text')
let bullets = document.querySelectorAll('.carousel-bullet')

let arrowLeft = document.getElementById("arrow-left")
let arrowRight = document.getElementById("arrow-right")

let images = ["slider-top1.jpg", "slider-top2.jpg", "slider-top3.jpg", "slider-top4.jpg"]
let selectSlider = 1


arrowRight.addEventListener('click', () => {
    if(selectSlider < 4){
        items[selectSlider - 1].style.display = "none"
        items[(selectSlider - 1) + 1].style.display = "block"

        bullets[selectSlider - 1].classList.toggle("changed-bullet")
        bullets[(selectSlider - 1) + 1].classList.toggle("changed-bullet")

        bulletsText[selectSlider - 1].classList.toggle("changed-bullet")
        bulletsText[(selectSlider - 1) + 1].classList.toggle("changed-bullet")

        selectSlider++
    }
    else{
        items[selectSlider - 1].style.display = "none"

        bullets[selectSlider - 1].classList.toggle("changed-bullet")
        bulletsText[selectSlider - 1].classList.toggle("changed-bullet")

        selectSlider = 1

        items[selectSlider - 1].style.display = "block"

        bullets[selectSlider - 1].classList.toggle("changed-bullet")
        bulletsText[selectSlider - 1].classList.toggle("changed-bullet")
    }

    createxItem.style.backgroundImage = `url(images/${images[selectSlider - 1]})`


})

arrowLeft.addEventListener('click', () => {
    if(selectSlider > 1){
        items[selectSlider - 1].style.display = "none"
        items[(selectSlider - 1) - 1].style.display = "block"

        bullets[selectSlider - 1].classList.toggle("changed-bullet")
        bullets[(selectSlider - 1) - 1].classList.toggle("changed-bullet")

        bulletsText[selectSlider - 1].classList.toggle("changed-bullet")
        bulletsText[(selectSlider - 1) - 1].classList.toggle("changed-bullet")
        selectSlider--
        
    }
    else{
        items[selectSlider - 1].style.display = "none"

        bullets[selectSlider - 1].classList.toggle("changed-bullet")
        bulletsText[selectSlider - 1].classList.toggle("changed-bullet")

        selectSlider = 4

        items[selectSlider - 1].style.display = "block"

        bullets[selectSlider - 1].classList.toggle("changed-bullet")
        bulletsText[selectSlider - 1].classList.toggle("changed-bullet")
    }

    createxItem.style.backgroundImage = `url(images/${images[selectSlider - 1]})`
})