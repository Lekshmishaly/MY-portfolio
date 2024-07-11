var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

//-----------------menu-----------------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu()
{
    sidemenu.style.right = "0";
}

function closemenu()
{
    sidemenu.style.right = "-200px";
}

// -------------Contact Form------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbzRSn2eC39qO_c3Ro9CMLFlhnD7QEWgANqbCm6jBOUQG2u3fltLIyIaS7CABt2rWgAV/exec';
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML= "Message Sent Succesfully"
      setTimeout(function(){
        msg.innerHTML = "";
      },1000)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
var nameError=document.getElementById("name-error")
var emailError=document.getElementById("email-error")

function validateName(){
  var name = document.getElementById("contact-name").value
  if(name.length == 0){
    nameError.innerHtml = 'Name is required'
    return false
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHtml = 'Write full name'
    return false
  }
  nameError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #10b240;"></i>'
  return true;


}
function validateEmail(){
  var email = document.getElementById("contact-email").value
  if(email.length==0){
    emailError.innerHTML='Email is required'
    return false
  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML='Email Invalid'
    return false
  }
  
  emailError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #10b240;"></i>'
  return true;

  
}