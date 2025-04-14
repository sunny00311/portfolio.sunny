function submitForm(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var message = document.getElementById("message").value;

  var whatsappMessage = "Name: " + name + "\\n"
                        + "Email: " + email + "\\n"
                        + "Mobile: " + mobile + "\\n"
                        + "Message: " + message;

  var whatsappURL = "https://wa.me/917678262335?text=" + encodeURIComponent(whatsappMessage);

  window.location.href = whatsappURL;
}


// form logic start
function submitForm(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var message = document.getElementById("message").value;

  var whatsappMessage = "Name: " + name + "\\n"
                        + "Email: " + email + "\\n"
                        + "Mobile: " + mobile + "\\n"
                        + "Message: " + message;

  var whatsappURL = "https://wa.me/917678262335?text=" + encodeURIComponent(whatsappMessage);

  window.location.href = whatsappURL;
}
// form logic end





//copy year logic
const copyer = document.getElementById("copyer");
const year = new Date().getFullYear();
copyer.textContent = year;





  function animateCircularProgress(selector, percent, color) {
    const circle = document.querySelector(selector);
    const value = circle.querySelector('.progress-value');

    let start = 0;
    const end = percent;
    const speed = 20;

    const progress = setInterval(() => {
      start++;
      value.textContent = `${start}%`;
      circle.style.background = `conic-gradient(${color} ${start * 3.6}deg, #ededed ${start * 3.6}deg)`;
      if (start >= end) clearInterval(progress);
    }, speed);
  }

  // Call function for each skill
  animateCircularProgress('.html-css', 90, '#ff5733');
  animateCircularProgress('.javascript', 80, '#f7df1e');
  animateCircularProgress('.php', 75, '#563d7c');  //this for tailwind
  animateCircularProgress('.reactjs',50, '#61dafb'); //for php

bvbbb