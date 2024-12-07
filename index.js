
const  getStarted= document.querySelector(".getStarted") ;
const appointmentForm= document.querySelector(".appointment-form");
getStarted.addEventListener("click",()=>{
    window.location.replace("signIn.html");
})
appointmentForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    window.alert("Congratulations!! Your appointment had been recorder successfully!!!");
})