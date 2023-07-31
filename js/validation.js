// FORM get by ID
let portfolioForm = document.getElementById("form-portfolio");
let careerForm = document.getElementById("form-career");
let requestForm = document.getElementById("form-request");
// INPUT get by ID
let portfolioEmail = document.getElementById("portfolio-email");
let careerEmail = document.getElementById("career-email");
let requestEmail = document.getElementById("request-email");
// EVENT LISTENER by SUBMIT
portfolioForm.addEventListener("submit", function submitPortfolioForm(e) {
    e.preventDefault();
    if(portfolioEmail.value === "") {
        portfolioEmail.classList.add("_error");
    }else if(!validateEmail(portfolioEmail)){
        portfolioEmail.classList.add("_error");
    }else portfolioEmail.classList.remove("_error");
});
careerForm.addEventListener("submit", function submitCareerForm(e) {
    e.preventDefault();
    if(careerEmail.value === "") {
        careerEmail.classList.add("_error");
    }else if(!validateEmail(careerEmail)){
        careerEmail.classList.add("_error");
    }else careerEmail.classList.remove("_error");
});
requestForm.addEventListener("submit", function submitRequestForm(e) {
    e.preventDefault();
    if(requestEmail.value === "") {
        requestEmail.classList.add("_error");
    }else if(!validateEmail(requestEmail)){
        requestEmail.classList.add("_error");
    }else requestEmail.classList.remove("_error");
});

// VALIDATION FUNCTION
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]+)$/iu;
function validateEmail(email) {
    return EMAIL_REGEXP.test(email.value);
};