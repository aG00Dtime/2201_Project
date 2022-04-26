const submit_btn = document.querySelector('.submit')
const form = document.querySelector('form')

submit_btn.addEventListener("click", () => {

    const fname = (form.elements["fname"].value).trim();
    const lname = (form.elements["lname"].value).trim();
    const email = (form.elements["email"].value).trim();
    const msg = (form.elements["message"].value.trim());
    const phone = (form.elements["phone"].value).trim();


    if (!fname.length > 0 || !lname.length > 0 || !email.length > 0 || !msg.length > 0 || !email.length > 0) {
        alert("Please ensure the form is filled out correctly");
        return
    }

    Email.send({
        Host: "smpt server",
        Username: "username",
        Password: "pw",
        To: "email here",
        From: email,
        Subject: "Inquiry By Visitor - " + fname + ' ' + lname + "<br>" + phone,
        Body: msg + "<br>" + phone + "<br>" + fname + ' ' + lname,
    }).then(
        msg => alert("Message Sent!"))
})