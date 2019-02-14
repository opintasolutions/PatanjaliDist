// application form

let applySubmit = document.querySelector("#apply-submit-button");
applySubmit.addEventListener("click", () => {
    const emailTo = "ppjha@mitaoe.ac.in"
    const subject = "apply"
    const fname = document.querySelector("#apply-fname").value
    const sname = document.querySelector("#apply-sname").value
    const address = document.querySelector("#apply-address").value 
    const pincode = document.querySelector("#apply-pincode").value
    const applyFor = document.querySelector("#apply-for").value
    const distributorLevel = document.querySelector("#distributor-level").value
    const expectedInvestment = document.querySelector("#expected-investment").value 
    const comments = document.querySelector("#apply-comments").value
    const email = document.querySelector("#apply-email").value
    const number = document.querySelector("#apply-number").value

    const text_body = `First-Name:\n${fname}\n\nSecond-Name:\n${sname}\n\nContact:\n${number}\n\nEmail:\n${email}\n\nAddress:\n${address}\n\nPincode:\n${pincode}\n\nApply For:\n${applyFor}\n\nDistributor Level\n${distributorLevel}\n\nExpected Investment\n${expectedInvestment}\n\nComments:\n\n${comments}` 

  const body = `
  <!DOCTYPE html>
  <html>
  <head>
  <style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #ddd;
  }
  </style>
  </head>
  <body>
  <h2>Application Request</h2>
    <table>
    <tr>
    <td><b>First Name:</b> </td>
    <td>${fname}</td>
    </tr><tr>
    <td><b>Last Name:</b> </td>
    <td>${sname}</td>
    </tr><tr>
    <td><b>Number:</b> </td>
    <td>${number}</td>
    </tr><tr>
    <td><b>Email:</b> </td>
    <td>${email}</td>
    </tr><tr>
    <td><b>Address:</b> </td>
    <td>${address}</td>
    </tr><tr>
    <td><b>Pincode:</b> </td>
    <td>${pincode}</td>
    </tr><tr>
    <td><b>Apply For:</b> </td>
    <td>${applyFor}</td>
    </tr><tr>
    <td><b>Distributor Level:</b> </td>
    <td>${distributorLevel}</td>
    </tr><tr>
    <td><b>Expected Investment:</b> </td>
    <td>${expectedInvestment}</td>
    </tr></table>  
    <p><b>Comments:</b><br /> ${comments}</p>
    </body></html>`

    const bodyEncoded = new URLSearchParams()
      bodyEncoded.append('from_email', 'mail@opintasolutions.com')
      bodyEncoded.append('to_email', 'info@patanjalifranchise.store')
      bodyEncoded.append('subject', 'message')
      bodyEncoded.append('content', body)
 
  // email to patanjali dist
    fetch('https://wt-4896982400a54bf82243b9417c45f1ea-0.sandbox.auth0-extend.com/sendgrid_Patanjali', {
      method: 'POST',
      body: bodyEncoded,
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded' 
    } 
  })
    .then(res => {console.log(res); res.statusText === "OK" ? alert('mail was sent succesfully') : null})
    .catch(err => console.log(err))


  const rsvpBody = new URLSearchParams()
    rsvpBody.append('from_email', 'mail@opintasolutions.com')
    rsvpBody.append('to_email', email)
    rsvpBody.append('subject', 'thank you for feedback')
    rsvpBody.append('content', `<h2>Hello ${fname} ${sname}</h2><br /><h3>Thank you for contacting Patanjali Distributors, your feedbacks are appreciated.</h3>`)

  // email to person applying
   fetch('https://wt-4896982400a54bf82243b9417c45f1ea-0.sandbox.auth0-extend.com/sendgrid_Patanjali', {
      method: 'POST',
      body: rsvpBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded' 
      } 
  })
    .then(res => {console.log(res); res.statusText === "OK" ? console.log('rsvp sent') : null})
    .catch(err => console.log(err))
  

  // sms to patanjali dist
  let patanjali_dist_contact = 9674820528

  let url = `https://api.msg91.com/api/sendhttp.php?country=91&sender=OPINTA&route=4&mobiles=${patanjali_dist_contact}&authkey=254145AmFnhfpgfGK5c27a269&message=${encodeURIComponent(text_body)}`
    fetch(url, {
      mode: 'no-cors' 
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(`ERROR OCCURED ${err}`))
  
  // sms to person applying 
  let url_rsvp = `https://api.msg91.com/api/sendhttp.php?country=91&sender=OPINTA&route=4&mobiles=${number}&authkey=254145AmFnhfpgfGK5c27a269&message=${"thank you for applying for patanjali distributorship, we will reach out to you soon."}`
    fetch(url_rsvp, {
      mode: 'no-cors' 
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(`ERROR OCCURED ${err}`))
})


