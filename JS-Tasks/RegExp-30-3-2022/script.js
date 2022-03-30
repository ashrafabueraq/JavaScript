let email = document.getElementById('email')
let phone = document.getElementById('phone')
let span = document.getElementsByTagName('span')

email.onkeydown = function() {
    const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{2,8}$/;   // Regular Expression  
    const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{2,3}\.[a-zA-Z]{1,3}$/;
    if(regex.test(email.value) || regexo.test(email.value)){
        span[0].innerHTML = 'email is valid'
        span[0].style.color = "lime"

    }
    else {
        span[0].innerHTML = 'email is Incorrect'
        span[0].style.color = "red"

    }


}

phone.onkeydown = function (){

    const regexn = /^[0-9]{9}$/;
    if(regexn.test(phone.value)){
        span[1].innerHTML = 'your number is valid'
        span[1].style.color = "lime"

    }
    else {
        span[1].innerHTML = 'your number is Incorrect'
        span[1].style.color = "red"

    }
}