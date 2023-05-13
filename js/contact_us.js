//form
var form = document.getElementById("form");
form.onsubmit= function(e)
{
    var nameValid = false;
    var emailValid = false;
    var phoneValid = false;
    var addressValid = false;
    var commentValid = false;
////name validation
var name = document.getElementById("text");
var p1 = document.getElementById("p1");
var nameRex =/^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/;


var result1 = nameRex.test(name.value);
if(result1===false)
{
    p1.style.display= "block";
    name.style.borderColor = "red";
}
else
{
    p1.style.display = "none";
    name.style.borderColor = "green";
    nameValid = true;
}


///email validation
var email = document.getElementById("Email");
var p1 = document.getElementById("p2");
var emailRex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var result2 = emailRex.test(email.value);
if(result2===false)
{
    p2.style.display = "block";
    email.style.borderColor = "red";

}
else
{
    p2.style.display = "none";
    emailValid =true;
    email.style.borderColor = "green";

}


///validation phone number
var phone = document.getElementById("phone").value;
var p3 = document.getElementById("p3");
var phonRex = /^(010|011|012)\d{8}$/;
var result3 = phonRex.test(phone);
if(result3===false)
{
    
    p3.style.display = "block";
    document.getElementById("phone").style.borderColor = "red";
}
else
{
    p3.style.display = "none";
    document.getElementById("phone").style.borderColor = "green";
    document.getElementById("phone").style.borderWidth = "1px";
    phoneValid = true;
}
///validation address
var address = document.getElementById("textarea1");
var p4 = document.getElementById("p4");
if(address.value==="")
{
  p4.style.display = "block";
  address.style.borderColor = "red";
}
else
{
    p4.style.display = "none";
    address.style.borderColor = "green";
    addressValid = true;

}

/////massage validation

var massage = document.getElementById("textarea2");
var p5 = document.getElementById("p5");
if(massage.value==="")
{
    p5.style.display="block";
    massage.style.borderColor = "red";
}
else
{
    p5.style.display="none";
    massage.style.borderColor = "green";
    commentValid= true;
    window.open("./thanku.html","_blank");
}
    if(nameValid=false||emailValid===false||phoneValid===false||addressValid==false||commentValid===false)
    {
        e.preventDefault();
    }
}

//footer
///instagram page
function goToInstagram()
{
    window.open("https://www.instagram.com/gehadhandmade_gallary/");
}
///facebook page
function goToFacebook()
{
    window.open("https://www.facebook.com/Gehad-Handmade_Gallary-104540302206896/?ref=pages_you_manage");
}

////back to top
var goToTop = document.getElementById("gototop");
window.onscroll = function()
{
    'use strict';
   if(window.pageYOffset>=400)
   {
    goToTop.style.display="block";
   }
   else
   {
    goToTop.style.display="none";

   }
}
goToTop.onclick = function()
{
    window.scrollTo(0,0);
}
