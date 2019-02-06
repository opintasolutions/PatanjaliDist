// contact form;
  
let contactSubmit = document.querySelector("#contact-submit-button");
contactSubmit.addEventListener("click", () => {
 
const name = document.querySelector("#contact-name").value
const email = document.querySelector("#contact-email").value
const number = document.querySelector("#contact-number").value
const mssg = document.querySelector("#contact-feedback").value
const textBody = `Name:\n${name}\n\nContact:\n${number}\n\nEmail:\n${email}\n\nMessage:\n\n${mssg}`

const username = "15e42a15a135ef171a8444ac1f53112a"
const password = "d5991b1b31ffdb109ef7ef4021f3cdc4"

const emailBody = {
    "Messages":[
      {
        "From": {
          "Email": "mail@opintasolutions.com",
          "Name": "Patanjali Distributor"
        },
        "To": [
          {
            "Email": "pranavbhaskar17@gmail.com",
            "Name": "admin"
          }
        ],
        "Subject": "Message from Contact Us",
        "TextPart": encodeURIComponent(textBody),
        "HTMLPart": `<h3>${name}</h3><br /><h4>${email}</h4><h4>${number}</h4><br /><hr /><br /><p>${mssg}</p>`
      }
    ]
}

fetch("https://api.mailjet.com/v3.1/send", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic '+ btoa(username + ':' + password)
  },
  body: JSON.stringify(emailBody)
})
  .then((res) => {console.log(res); alert('email sent')})
  .catch((err) => console.log(err))

})


