



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