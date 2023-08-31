const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// *********************//
//GSAP  ANIMATION FOR DIRST PAGE 
function firstPageAnim() {
    var tl = gsap.timeline();
    //ANIMATING THE NAVBAR
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1.3,
    })
    //ANIAMTING THE MAIN HEADINGS

    tl.to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -0.7,
        stagger: .2
    })

    tl.from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,

    })
}

// JBH MOUSE MOVE HOT TO HM LOG SKEW KAR PAYEE AUR MAXIMUM SKEW AND MINIMUM SKEW DEFINE KR PAYTE , JBH MOPUSE MOVE HO TOCHAPTA KI VALUE ABDHE AUIR JBH MOUSE CHLNA BAND HOJAEEE TO CHAPTA HO HATA LO 

//video1.41
// // js axis me bh chapta krna ho to scaleki vlaue 1 se kum kr do 
function circleChaptaKaro() {
    //define defaukt scale valua on which cursor mota or putla or chapta depends 
    var xscale = 1;
    var yscale = 1;
    //for saving previous value we make a global variable 
    var xprevious = 0;
    var yprevious = 0;

    // video 1hour 50 min
    window.addEventListener("mousemove", function (dets) {

       

        //now we clg it we have large minus numbers on x and y axis but our mnimum scale value is .8  and maximum value is 1.2 means .8 se kum mota ni hoga or 1.2 se zayda mota ni hoga takee ackward ni lage means   .8 -------- 1.2  ke beeeh ya inke jtni value chahyehn wrna nh aeeen to nearest value jo hogi in dono me se uskko rkhdega takee mouse ka shapw khrb na ho  to ye maximum or  minimm or desired walaa scene ye sb gsap utils  ke undr clamp he uske zarye kam kreega isme first wali hamar range hogi or sencond wali ko map krengen ke in dono  ke between hojao.
        xscale = (gsap.utils.clamp(.8, 1.2, dets.clientX - xprevious));
        yscale = (gsap.utils.clamp(.8, 1.2, dets.clientY - yprevious));



        //dets.client x jo he wo value he mouse ki x axis pr jahn hamara mouse initially he ya move kara  , uske bad hm ne isko kaha he hamara mouse move hua  detalis.client jo hita he wo hamara mouse ki location x axix me abh screeen pr hamara mouse kaha he uskji location xprev me save hogae abh hm ne kaha ke jo abhii mouse move hua  he uski location means new location  ko minus kr do jo mouse ki phele location thi jahn mouse initially tha menans dets.clientX me to is se difference ajaeega  phele 1 line ignmore mar 
        // var xdiff = dets.clientX - xprevious;
        xprevious = dets.clientX;
        //simple :  mere mouse ki current position minus previous position 
        // var ydiff = dets.clientY - yprevious;
        yprevious = dets.clientY;

        // abh  x and y scale ki value circle mouse follower ko bhj dnegen 
        circleMouseFollower(xscale, yscale);

    

    })
}


//for mouse buttton 
// WINDMOW PR JBHMOUSE MOVE HO TO FUNCTION TO DETAILS DO MJGE 
function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (details) {
        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale},${yscale})`;


    })
}

circleChaptaKaro();
circleMouseFollower();
firstPageAnim();




//PICTURES WITH THE ELEMENTS :

// 1 : teen element ko phele select kro phr 3ono pr mouse move lagao  jbh mouse move ho to jbbh ye pta kro ke mouse kaha pr he jska mtlb he ke mouse ke x and y position pta kro , abh mouse ke x and y position ke badke nus image ko show kro and us image ko move kro , mov krte waqt rotate , and jaise jaise mouse tez chakle wese wese rotation bh tex hoajee



//aik nodelist milega qery selc all se  as a type of array so then used foreach and apply fucntion on each elem and add mouse listener


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0 ;
    var diffrot = 0 ;

    elem.addEventListener("mouseleave" , function(details){

        gsap.to(elem.querySelector("img"),{
           
            opacity:0,
            ease : Power3,      
            duration:.5 
         
        })
      


    })

    elem.addEventListener("mousemove" , function(details){
        // sb se phele difference nikalen gen jahan hamara mouse he means dets.client y uska haamae elem ke dic=v conatiner ke top se or jo differnce hoaga wo acttual me mouse ki position ohi uswaqt  like agr dets.client y is 20 from our elelm div which is 10 then 20-10 is 10 so our mouse on our elum picture is 10 so is hisba se hm pic shiw krwaen gn
        var diff = details.clientY - elem.getBoundingClientRect().top;
        diffrot = details.clientX -rotate;
        rotate = details.clientX;
        gsap.utils.clamp(-20 , 20 , diff) ;

        
//from this i found client x and y ,location 
    //   console.log(details.clientX , details.clientY)
    //  js elum me mouse move ho us elum ki imgae show kr do hm ne css me photo  hide kri hue th isi liye gsap use kr rehn hen take opacity 1 de saken

        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease : Power4,
            // abh usko bolengen ke meri image ko itna neeche le aeen jtna hm ne difference diya hua he 
            top : diff,
            left: details.clientX,
            rotate :   gsap.utils.clamp(-20 , 20 , diffrot * 2) ,

        })
      


    })
})







































// Function Declaration: The code defines a function named circleMouseFollower(). This function will be responsible for making the circle follow the mouse.

// Event Listener: The window.addEventListener() function sets up a listener for the "mousemove" event. This event is triggered whenever you move your mouse.

// Callback Function: When the "mousemove" event occurs, the code runs a function that takes an argument called details. This argument holds information about the mouse's position at the moment of the event.

// Updating Circle Position: Inside the callback function, the code selects an HTML element with the ID "minicircle" using document.querySelector("#minicircle"). This element represents the small circle that will follow the mouse.

// Changing CSS Style: The code updates the style.transform property of the "minicircle" element. This property is responsible for changing how the element is positioned and transformed. The translate() function is used to move the circle horizontally and vertically based on the mouse's position.

// Mouse Position: details.clientX represents the X-coordinate (horizontal position) of the mouse, and details.clientY represents the Y-coordinate (vertical position) of the mouse. The translate() function uses these coordinates to move the circle accordingly.

// Putting It All Together: The translate() function's values are set using template literals (the backticks ``). This allows the code to inject the X and Y coordinates dynamically into the string.

// Running the Function: Finally, the circleMouseFollower() function is called to start the whole process. This makes the circle start following the mouse as soon as the page loads.

// In summary, this code defines a function that makes a small circle element follow your mouse around on a webpage by updating its position based on the mouse's coordinates whenever you move the mouse.




