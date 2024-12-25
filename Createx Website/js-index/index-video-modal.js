const playBtn = document.querySelector(".play-btn")
const modalVc = document.querySelector(".modal-vc")
const closeBtn = document.querySelector(".modal-vc-btn")


playBtn.addEventListener("click", function(){
    modalVc.classList.toggle("modal-vc-active")
    document.body.style.overflow = "hidden"
})

closeBtn.addEventListener("click", function(){
    modalVc.classList.toggle("modal-vc-active")
    document.body.style.overflow = "visible"
})