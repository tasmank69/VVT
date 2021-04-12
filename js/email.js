  function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var title = document.getElementById('title').value;
    var message = document.getElementById('message').value;
    const mailSender = "vintagetreasure25@gmail.com"
    Email.send({
    Host: "smtp.gmail.com",
    Username : mailSender,
    Password : "villagevintagetreasure",
    To : email,
    From : mailSender,
    Subject : "Client Copy of: '" + title + ", From: " + name + "'",
    Body : message + "\n\n COPY",
    })

    Email.send({
    Host: "smtp.gmail.com",
    Username : mailSender,
    Password : "villagevintagetreasure",
    To : "tasman.keenan@kamohigh.school.nz",
    From : mailSender,
    Subject : title + ", From: " + name,
    Body : message,
    })
    alert("Done")
  }