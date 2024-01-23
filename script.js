const passwordEl = document.getElementById("password-el")
const buttonEl = document.getElementById("button-el")
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
'abcdefghijklmnopqrstuvwxyz0123456789@#$'
let password = ""
buttonEl.addEventListener('click',function(){
    passwordEl.textContent = " "
    for(let i = 1; i <= 10; i++){
        let random_str = Math.floor(Math.random() * str.length + 1)
        passwordEl.textContent += str.charAt(random_str)
}
})
