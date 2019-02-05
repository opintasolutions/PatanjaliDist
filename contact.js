// contact form;
  
let contactSubmit = document.querySelector("#contact-submit-button");
contactSubmit.addEventListener("click", () => {
    const emailTo = "ppjha@mitaoe.ac.in"
    const subject = "message"
    const name = document.querySelector("#contact-name").value
    const email = document.querySelector("#contact-email").value
    const number = document.querySelector("#contact-number").value
    const mssg = document.querySelector("#contact-feedback").value

    const body = `Name:\n${name}\n\nContact:\n${number}\n\nEmail:\n${email}\n\nMessage:\n\n${mssg}` 

    window.open(`mailto:${emailTo}?subject=${subject}&body=${encodeURIComponent(body)}`);
})
 
