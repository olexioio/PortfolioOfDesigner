// INPUT EMAIL
const portfolioEmail = document.getElementById("portfolio-email");
const careerEmail = document.getElementById("career-email");
const requestEmail = document.getElementById("request-email");

// SUBMIT BUTTON
const portfolioSubmit = document.getElementById("portfolio-submit");

// FORMS
const portfolioForm = document.getElementById("form-portfolio");


// EVENT LISTENER ON INPUT EMAIL
portfolioEmail.addEventListener("input",updateInputPortfolio);
careerEmail.addEventListener("input",updateInputCareer);
requestEmail.addEventListener("input",updateInputRequest);

// VALIDATIONS OF EMAIL
function updateInputPortfolio() {
    if(validateEmail(portfolioEmail.value) && portfolioEmail.value !== 0){
        console.log("true");
        portfolioEmail.classList.remove("_error");
        return true;
    }else{
        console.log("false");
        portfolioEmail.classList.add("_error")
        return false;
    ;}
};
function updateInputCareer() {
    if(validateEmail(careerEmail.value) && careerEmail.value !== 0){
        careerEmail.classList.remove("_error");
        return true;
    }else{
        careerEmail.classList.add("_error")
        return false;
    ;}
};
function updateInputRequest() {
    if(validateEmail(requestEmail.value) && requestEmail.value !== 0){
        requestEmail.classList.remove("_error");
        return true;
    }else{
        requestEmail.classList.add("_error")
        return false;
    ;}
};
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function validateEmail(value) {
    return EMAIL_REGEXP.test(value);
};

// SEND FORM FUNCTIONS
portfolioForm.addEventListener("submit", (e) => {
    if(updateInputPortfolio === false) e.preventDefault();
});