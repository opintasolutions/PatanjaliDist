// contact form;
  
  let contactSubmit = document.querySelector("#contact-submit-button");
  contactSubmit.addEventListener("click", () => {
   
  const name = document.querySelector("#contact-name").value
  const email = document.querySelector("#contact-email").value
  const number = document.querySelector("#contact-number").value
  const mssg = document.querySelector("#contact-feedback").value
  const textBody = `Name:\n${name}\n\nContact:\n${number}\n\nEmail:\n${email}\n\nMessage:\n\n${mssg}`

  const body = `<h2>Message</h2><b>Name: ${name}</b><br /><b>Contact: ${number}</b><br /><b>Email: ${email}</b><br /><p>${mssg}</p>`

  const bodyEncoded = new URLSearchParams()
  bodyEncoded.append('from_email', 'mail@opintasolutions.com')
  bodyEncoded.append('to_email', 'pranavbhaskar17@gmail.com')
  bodyEncoded.append('subject', 'message')
  bodyEncoded.append('content', body)

  fetch('https://wt-4896982400a54bf82243b9417c45f1ea-0.sandbox.auth0-extend.com/sendgrid_Patanjali', {
    method: 'POST',
    body: bodyEncoded,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded' 
    } 
  })
    .then(res => {console.log(res); res.statusText === "OK" ? alert('mail was sent succesfully') : null})
    .catch(err => console.log(err))
 
})
