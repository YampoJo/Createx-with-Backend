const form = document.querySelector('.wtkm-form')

const phonePattern =  /^(\+7|8)(\s*)?(\d{3})(\s*|\-)?(\d{3})(\s*|\-)?(\d{2})(\s*|\-)?(\d{2})$/;
const fullNamePattern = /^[a-zA-Zа-яА-Я]{2,}\s[a-zA-Zа-яА-Я]{2,}$/;

const nameInput = document.getElementById('wtkm-name');
const phoneInput = document.getElementById('wtkm-phone');

const sendButton = document.getElementById('wtkm-send-btn');
  

function updateRegisterButtonState() {
    sendButton.disabled = !validateUserData();
    if(validateUserData() && document.querySelectorAll("#wtkm-send-btn").length == 1){
        document.getElementById('wtkm-send-btn').style.opacity = "1"
    }
    else{
        document.getElementById('wtkm-send-btn').style.opacity = "0.7"
    }
}

function updateName(){
    if (!fullNamePattern.test(nameInput.value)) {
        pasteRequire(nameInput)
    }
    else{
        deleteRequire(nameInput)
    }

}

function updatePhone(){
    
    if (!phonePattern.test(phoneInput.value)) {
        pasteRequire(phoneInput)
    }
    else{
        deleteRequire(phoneInput)
    }
}


nameInput.addEventListener('input', updateRegisterButtonState);
phoneInput.addEventListener('input', updateRegisterButtonState);

nameInput.addEventListener('input', updateName);
phoneInput.addEventListener('input', updatePhone);



function pasteRequire(field){
    const parent = field.parentElement
    if(parent.querySelectorAll(".ob-field").length == 0){
        const require = document.createElement("span");
        require.textContent = "Wrong";
        require.classList.add("ob-field")

        parent.appendChild(require)
    }
    
}

function deleteRequire(field){
    const parent = field.parentElement
    parent.querySelectorAll(".ob-field").forEach((element) => {
        parent.removeChild(element);
    })
}


function validateUserData() {
    let isValid = true;

    if (!fullNamePattern.test(nameInput.value)) {
        isValid = false;
    }

    if (!phonePattern.test(phoneInput.value)) {
        isValid = false;
    }

    console.log(isValid)
    return isValid;
}