function toggleMenu() {
    const toggleMenu = document.querySelector(".menutoggle"); 
    const navbar = document.querySelector("menu"); 
    menutoggle.classList.toggle("active"); 
    menu.classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");
    const header = document.querySelector("header");

    menuIcon.addEventListener("click", function() {
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "flex";
            menu.style.animation = "slideIn 0.5s forwards";  
        } else {
            menu.style.animation = "slideOut 0.5s forwards";  
            setTimeout(function() {
                menu.style.display = "flex";
            }, 500);  
        }
    });
    window.addEventListener("scroll", function()  {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(123, 239, 123, 0.57)";
            header.style.transition = "background-color 0.5s ease";
        } else {
            header.style.backgroundColor = "transparent";
        }
    });
 
    });
function submitForm(event) {
    event.preventDefault();   
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (nom && email && message) {
         
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.style.display = 'block';   
        confirmationMessage.innerHTML = "<p>Merci " + nom + "! Votre message a été envoyé avec succès.</p>";
        
        document.getElementById('contactForm').reset();
    } else {
        alert("Veuillez remplir tous les champs du formulaire.");
    }
}

function resetForm() {
    document.getElementById('nom').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('confirmationMessage').style.display = 'none';
}
  
document.getElementById("accept-cookies").addEventListener("click", function() {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookies-accepted", "true");
});







                        
 
 

