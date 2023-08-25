function logEvent() {
    let p = event.target;
    if (p.name == "firstname") {
    message("First Name Changed to " + p.value);
    } else {
    message("Last Name Changed to " + p.value);
    }
    }
const sendInfo=()=>{
    console.log(event.target.parentElement);
    let p = event.target.parentElement;
    message(`Welcome ${p.firstname.value} ${p.lastname.value}`)

}
const message=(m)=>{
    document.querySelector('#welcome').innerHTML=m;
}
