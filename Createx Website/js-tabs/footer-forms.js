const formDis = document.querySelector('.discuss-form')

const phonePatternDis =  /^(\+7|8)(\s*)?(\d{3})(\s*|\-)?(\d{3})(\s*|\-)?(\d{2})(\s*|\-)?(\d{2})$/;
const fullNamePatternDis = /^[a-zA-Zа-яА-Я]{2,}\s[a-zA-Zа-яА-Я]{2,}$/;
const emailPatternDis = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const nameInputDis = document.getElementById('footer-name');
const phoneInputDis = document.getElementById('footer-phone');

const emailInputDis = document.getElementById('footer-email');
const agreeCheckboxDis = document.getElementById('checkbox-disc');

const sendButtonDis = document.getElementById('discuss-btn');
  
///
function updateRegisterButtonStateDis() {
    sendButtonDis.disabled = !validateUserDataDis();
    if(validateUserDataDis()){
        document.getElementById('discuss-btn').style.opacity = "1"
        document.querySelector('.discuss-form').style.height = "666px"
        document.querySelector('.discuss-form').style.alignItems = "center"
        document.querySelector('.discuss-form').style.paddingTop = "0px"
    }
    else{
        document.getElementById('discuss-btn').style.opacity = "0.7"
        document.querySelector('.discuss-form').style.height = "766px"
        document.querySelector('.discuss-form').style.alignItems = "start"
        document.querySelector('.discuss-form').style.paddingTop = "30px"
    }   
}

function updateNameDis(){
    if (!fullNamePatternDis.test(nameInputDis.value)) {
        pasteRequireDis(nameInputDis)
    }
    else{
        deleteRequireDis(nameInputDis)
    }

}

function updatePhoneDis(){
    
    if (!phonePatternDis.test(phoneInputDis.value)) {
        pasteRequireDis(phoneInputDis)
    }
    else{
        deleteRequireDis(phoneInputDis)
    }
}

function updateEmailDis(){
    
    if (!emailPatternDis.test(emailInputDis.value)) {
        pasteRequireDis(emailInputDis)
    }
    else{
        deleteRequireDis(emailInputDis)
    }
}


nameInputDis.addEventListener('input', updateRegisterButtonStateDis);
phoneInputDis.addEventListener('input', updateRegisterButtonStateDis);
emailInputDis.addEventListener('input', updateRegisterButtonStateDis);
agreeCheckboxDis.addEventListener('change', updateRegisterButtonStateDis);

nameInputDis.addEventListener('input', updateNameDis);
phoneInputDis.addEventListener('input', updatePhoneDis);
emailInputDis.addEventListener('input', updateEmailDis);


function pasteRequireDis(field){
    const parent = field.parentElement
    if(parent.querySelectorAll(".ob-fieldDis").length == 0){
        const require = document.createElement("span");
        require.textContent = "Wrong";
        require.classList.add("ob-fieldDis")

        parent.appendChild(require)
    }
    
}

function deleteRequireDis(field){
    const parent = field.parentElement
    parent.querySelectorAll(".ob-fieldDis").forEach((element) => {
        parent.removeChild(element);
    })
}


function validateUserDataDis() {
    let isValid = true;

    if (!fullNamePatternDis.test(nameInputDis.value)) {
        isValid = false;
    }

    if (!phonePatternDis.test(phoneInputDis.value)) {
        isValid = false;
    }

    if (!emailPatternDis.test(emailInputDis.value)) {
        isValid = false;
    }

    if (!agreeCheckboxDis.checked) {
        isValid = false;
    }

    console.log(isValid)
    return isValid;
}