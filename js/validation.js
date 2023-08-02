// FORM get by ID
let portfolioForm = document.getElementById("form-portfolio");
let careerForm = document.getElementById("form-career");
let requestForm = document.getElementById("form-request");
// VALID TEXT
let portfolidoValidMessage = document.querySelector("portfolio-valid");
let careerValidMessage = document.querySelector("career-valid");
let requestValidMessage = document.querySelector("request-valid");
// INPUT get by ID
let portfolioEmail = document.getElementById("portfolio-email");
let careerEmail = document.getElementById("career-email");
let requestEmail = document.getElementById("request-email");
// EVENT LISTENER by SUBMIT
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
    }else {portfolioEmail.classList.remove("_error");portfolioEmail.previousElementSibling.classList.remove("active");};
    
    function portfolioValid(){
        portfolioEmail.classList.remove("_error");
        portfolioEmail.previousElementSibling.classList.remove("active");
    };
});
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

// VALIDATION FUNCTION
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]+)$/iu;
function validateEmail(email) {
    return EMAIL_REGEXP.test(email.value);
};

let date = new Date();
// console.log(date);
// console.log(date.getSeconds());
// console.log(date.getSeconds()+10);
let dateStatic = date.getSeconds()+2;
console.log(date.getSeconds())
console.log(dateStatic)
if(date.getSeconds()===dateStatic){console.log("dsgdfgfdg")}
