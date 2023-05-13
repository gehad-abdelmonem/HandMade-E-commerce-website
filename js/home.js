//slider
var arr = ["./img/first.jpg","./img/cat7.jpg","./img/four.jpg","./img/siven.jpg","./img/five.jpg","./img/eight.jpg","./img/third.jpg"];
var index = 0;
function showNext()
{
var element = document.getElementById("img");
index=index+1;
if(index<arr.length)
{
    element.setAttribute("src",arr[index]);
    console.log(element.getAttribute("src"));


}
else
{
    index = 0;
    element.setAttribute("src",arr[index]);
    console.log(element.getAttribute("src"));

}

}
function showPrev()
{
    var elementt = document.getElementById("img");
    index=index-1;
   
    if(index>=0)
    {
        elementt.setAttribute("src",arr[index]);
        console.log(elementt.getAttribute("src"));
    }
    if(index<0)
    {
        index = arr.length-1;
        elementt.setAttribute("src",arr[index]);
        console.log(elementt.getAttribute("src"));
    }
}

///onload
window.onload = function()
{
       setInterval(function (){
        var imgg = document.getElementById("img");
        imgg.setAttribute("src",arr[index]);
        index++;
        if(index===7)
        {
            index=0;
        }

     },1000)  

}



//button categorys
/////to show hand kerchief
var engagmentPartOne = document.getElementsByClassName("Engagement_Tray_part1")[0];
var engagmentPartTwo = document.getElementsByClassName("Engagement_Tray_part2")[0];
var printfinger = document.getElementsByClassName("Fingerprint_tableau")[0];
var handKerchiefPartOne = document.getElementsByClassName("hand_kerchief_cat1")[0];
var handKerchiefPartTwo = document.getElementsByClassName("hand_kerchief_cat2")[0];
var handKerchiefPartThree =document.getElementsByClassName("hand_kerchief_cat3")[0];
function showHandKerchief()
{
    
    handKerchiefPartOne.style.display = "flex";
    handKerchiefPartTwo.style.display = "flex";
    handKerchiefPartThree.style.display = "flex";
    engagmentPartOne.style.display="none";
    engagmentPartTwo.style.display="none";
    printfinger.style.display="none";
}

/////to show Engagement Tray
function showEngagementTray()
{
    engagmentPartOne.style.display = "flex";
    engagmentPartTwo.style.display = "flex";
    printfinger.style.display = "none";
    handKerchiefPartOne.style.display = "none";
    handKerchiefPartTwo.style.display = "none";
    handKerchiefPartThree.style.display = "none";
}

/////to show Fingerprint
function showFingerprint()
{
    printfinger.style.display = "flex";
    handKerchiefPartOne.style.display = "none";
    handKerchiefPartTwo.style.display = "none";
    handKerchiefPartThree.style.display = "none";
    engagmentPartOne.style.display="none";
    engagmentPartTwo.style.display="none";
}

var counter = 0;
/////card number
 var cardButtonn = document.getElementsByClassName("card_button");
 var ncard = document.getElementById("ncard");
 for(var i=0;i<cardButtonn.length;i++)
{

 cardButtonn [i].onclick = function()
 {
    counter++;
    ncard.innerHTML=counter;
 }   
}
var cardIcon = document.getElementById("card_icon");
cardIcon.onclick = function()
{
    var ncard = document.getElementById("ncard");
    ncard.style.visibility= "visible"; 
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
