//Decalaring Variables
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const password = document.querySelector('.password')
const submit = document.querySelector('.submit')

//add an event listener
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    
   // styling message element.
   let nameMessage = document.querySelector('.message');
    nameMessage.style.fontSize = '15px'
    nameMessage.style.padding = '10px'
    nameMessage.style.fontFamily = 'Segoe UI'
    nameMessage.style.marginTop = '15px'
    nameMessage.style.marginBottom = '10px'
    nameMessage.style.color = 'white'

// styling email message
    let eMessage = document.querySelector('.emessage');
    eMessage.style.fontSize = '15px'
    eMessage.style.padding = '10px'
    eMessage.style.fontFamily = 'Segoe UI'
    eMessage.style.marginTop = '15px'
    eMessage.style.marginBottom = '10px'
    eMessage.style.color = 'white'

// styling password message
   let passMessage = document.querySelector('.passmessage');
   passMessage.style.fontSize = '15px'
   passMessage.style.padding = '10px'
   passMessage.style.fontFamily = 'Segoe UI'
   passMessage.style.marginTop = '15px'
   passMessage.style.marginBottom = '10px'
   passMessage.style.color = 'white'
    
  // Password conditionals

    if(name.value === '' || name.value.length < 3 || !isNaN(name.value)){
        nameMessage.style.backgroundColor = 'red'
        nameMessage.innerHTML='please input name fields or name too short';
    } else{
        nameMessage.style.backgroundColor = 'green'
        nameMessage.innerHTML = 'name successful'
    }


    //E-mail conditonals


   if(email.value === '' || email.value.indexOf('@') == -1){
    eMessage.style.backgroundColor = 'red'
    eMessage.innerHTML= "please input e-mail fields or '@' is missing";
    } else{
     eMessage.style.backgroundColor = 'green'
     eMessage.innerHTML = 'e-mail successful'
    }

//Password conditionals
    
    if(password.value === '' || password.value.length < 
     3){
    passMessage.style.backgroundColor = 'red'
    passMessage.innerHTML='please input password fields or password too short';
} else{
    passMessage.style.backgroundColor = 'green'
    passMessage.innerHTML = 'password successful'
}

})
