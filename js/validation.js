// FORM get by ID
let portfolioForm = document.getElementById("form-portfolio");
let careerForm = document.getElementById("form-career");
let requestForm = document.getElementById("form-request");

let portfolioFormMobile = document.getElementById("form-portfolio-mobile");
let careerFormMobile = document.getElementById("form-career-mobile");
let requestFormMobile = document.getElementById("form-request-mobile");
// VALID TEXT
let portfolidoValidMessage = document.querySelector("portfolio-valid");
let careerValidMessage = document.querySelector("career-valid");
let requestValidMessage = document.querySelector("request-valid");
// INPUT get by ID
let portfolioEmail = document.getElementById("portfolio-email");
let careerEmail = document.getElementById("career-email");
let requestEmail = document.getElementById("request-email");

let portfolioEmailMobile = document.getElementById("portfolio-email-mobile");
let careerEmailMobile = document.getElementById("career-email-mobile");
let requestEmailMobile = document.getElementById("request-email-mobile");
// EVENT LISTENER by SUBMIT

// PORTFOLIO FORM DESKTOP and MOBILE
portfolioForm.addEventListener("submit", function submitPortfolioForm(e) {
    e.preventDefault();
    let date = new Date();
    const dateOutValid = date.getSeconds()+4;
    if(portfolioEmail.value === "") {
        portfolioEmail.classList.add("_error");
        portfolioEmail.previousElementSibling.classList.add("active");
        setTimeout(portfolioValid,2000);
    }else if(!validateEmail(portfolioEmail)){
        portfolioEmail.classList.add("_error");
        portfolioEmail.previousElementSibling.classList.add("active");
        setTimeout(portfolioValid,2000);
    }else {
        portfolioEmail.classList.remove("_error");
        portfolioEmail.previousElementSibling.classList.remove("active");
        // test
        let formData = new FormData(portfolioForm);
        let response = fetch("sendemail.php", {
            method: "POST",
            body: formData
        });
        if(response.ok){
            let result = response.json();
            alert(result.message);
            portfolioEmail.value = "";
            form.reset();
        }
        else{alert("Error!");}
        // test
    };
    
    function portfolioValid(){
        portfolioEmail.classList.remove("_error");
        portfolioEmail.previousElementSibling.classList.remove("active");
    };
});
portfolioFormMobile.addEventListener("submit", function submitPortfolioForm(e) {
    e.preventDefault();
    // let date = new Date();
    // const dateOutValid = date.getSeconds()+4;
    if(portfolioEmailMobile.value === "") {
        portfolioEmailMobile.classList.add("_error");
        portfolioEmailMobile.previousElementSibling.classList.add("active");
        setTimeout(portfolioValid,2000);
    }else if(!validateEmail(portfolioEmailMobile)){
        portfolioEmailMobile.classList.add("_error");   
        portfolioEmailMobile.previousElementSibling.classList.add("active");
        setTimeout(portfolioValid,2000);
    }else {portfolioEmailMobile.classList.remove("_error");portfolioEmailMobile.previousElementSibling.classList.remove("active");};
    
    function portfolioValid(){
        portfolioEmailMobile.classList.remove("_error");
        portfolioEmailMobile.previousElementSibling.classList.remove("active");
    };
});
// CAREER FORM DESKTOP and MOBILE
careerForm.addEventListener("submit", function submitCareerForm(e) {
    e.preventDefault();
    if(careerEmail.value === "") {
        careerEmail.classList.add("_error");
        careerEmail.previousElementSibling.classList.add("active");
        setTimeout(creerValid,2000);
    }else if(!validateEmail(careerEmail)){
        careerEmail.classList.add("_error");
        careerEmail.previousElementSibling.classList.add("active");
        setTimeout(creerValid,2000);
    }else {careerEmail.classList.remove("_error");careerEmail.previousElementSibling.classList.remove("active");};
    
    function creerValid(){
        careerEmail.classList.remove("_error");
        careerEmail.previousElementSibling.classList.remove("active");
    }
});
careerFormMobile.addEventListener("submit", function submitCareerForm(e) {
    e.preventDefault();
    if(careerEmailMobile.value === "") {
        careerEmailMobile.classList.add("_error");
        careerEmailMobile.previousElementSibling.classList.add("active");
        setTimeout(creerValid,2000);
    }else if(!validateEmail(careerEmailMobile)){
        careerEmailMobile.classList.add("_error");
        careerEmailMobile.previousElementSibling.classList.add("active");
        setTimeout(creerValid,2000);
    }else {careerEmailMobile.classList.remove("_error");careerEmailMobile.previousElementSibling.classList.remove("active");};
    
    function creerValid(){
        careerEmailMobile.classList.remove("_error");
        careerEmailMobile.previousElementSibling.classList.remove("active");
    }
});
// REQUEST FORM DESKTOP and MOBILE
requestForm.addEventListener("submit", function submitRequestForm(e) {
    e.preventDefault();
    if(requestEmail.value === "") {
        requestEmail.classList.add("_error");
        requestEmail.previousElementSibling.classList.add("active");
        setTimeout(requestValid,2000);
    }else if(!validateEmail(requestEmail)){
        requestEmail.classList.add("_error");
        requestEmail.previousElementSibling.classList.add("active");
        setTimeout(requestValid,2000);
    }else {requestEmail.classList.remove("_error");requestEmail.previousElementSibling.classList.remove("active");}
    
    function requestValid(){
        requestEmail.classList.remove("_error");
        requestEmail.previousElementSibling.classList.remove("active");
    }
});
requestFormMobile.addEventListener("submit", function submitRequestForm(e) {
    e.preventDefault();
    if(requestEmailMobile.value === "") {
        requestEmailMobile.classList.add("_error");
        requestEmailMobile.previousElementSibling.classList.add("active");
        setTimeout(requestValid,2000);
    }else if(!validateEmail(requestEmailMobile)){
        requestEmailMobile.classList.add("_error");
        requestEmailMobile.previousElementSibling.classList.add("active");
        setTimeout(requestValid,2000);
    }else {requestEmailMobile.classList.remove("_error");requestEmailMobile.previousElementSibling.classList.remove("active");}
    
    function requestValid(){
        requestEmailMobile.classList.remove("_error");
        requestEmailMobile.previousElementSibling.classList.remove("active");
    }
});

// VALIDATION FUNCTION
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]+)$/iu;
function validateEmail(email) {
    return EMAIL_REGEXP.test(email.value);
};
