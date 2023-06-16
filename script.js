const form = document.querySelector('form')
const email = document.querySelector('.email');
const small = document.querySelector('small');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput() {
    const emailValue = email.value.trim()
    const validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (emailValue === '') {
        setErrorMsg(email, 'please provide a valid email address')
    }
    else if (!emailValue.match(validRegex)) {
        setErrorMsg(email, 'please provide a valid email')
    }

    else {
        setSuccessMsg(email, '')
    }
   
}

function setErrorMsg(input, msg) {
    const form = input.parentElement
    const small = form.querySelector('small')
    document.getElementsByName('email')[0].placeholder='example@email.com';    // to change the placeholder
    form.className = 'form error-msg'
    small.innerText = msg
}

function setSuccessMsg(input, msg) {
    const form = input.parentElement
    const small = form.querySelector('small')
    small.innerText = msg
    form.className = 'form success';
} 
