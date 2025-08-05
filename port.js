const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
} 

function toggleText() {
    const moreText = document.getElementById("moreText");
    const btn = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read More";
    }
}

function toggleScroll() {
    var scrollBtn = document.getElementById("scrollBtn");
    
    if (window.scrollY === 0) {
        // Scroll to the bottom of the page
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        scrollBtn.innerHTML = "<i class='bx bx-up-arrow-alt'></i>"; // Change to up arrow
    } else {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: "smooth" });
        scrollBtn.innerHTML = "<i class='bx bx-down-arrow-alt'></i>"; // Change back to down arrow
    }
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevents the form from reloading the page

   const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    number: document.querySelector("#number").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

    emailjs
    .send("service_vrm2anw", "template_xoby4ub", templateParams)
    .then(() => {
      alert("Email sent successfully!");
    })
    .catch((error) => {
      console.log("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    });
  });