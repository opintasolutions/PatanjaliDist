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

    const body = `First-Name:\n${fname}\n\nSecond-Name:\n${sname}\n\nContact:\n${number}\n\nEmail:\n${email}\n\nAddress:\n${address}\n\nPincode:\n${pincode}\n\nApply For:\n${applyFor}\n\nDistributor Level\n${distributorLevel}\n\nExpected Investment\n${expectedInvestment}\n\nComments:\n\n${comments}` 

    window.open(`mailto:${emailTo}?subject=${subject}&body=${encodeURIComponent(body)}`);
})


