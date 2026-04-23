function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const alertBox = document.getElementById("alert");


    if (user === "rasyid" && pass === "1") {

        alertBox.style.display = "block";
        alertBox.className = "alert success";
        alertBox.textContent = "Login berhasil!";


        setTimeout(() => {
            window.location.href = "index.html";
        }, 300);
    } else if (user === "rasyid" && pass === "12") {
        alertBox.style.display = "block";
        alertBox.className = "alert success";
        alertBox.textContent = "Login berhasil!";

      
        setTimeout(() => {
            window.location.href = "cv.html";
        }, 300);
    }  else if (user === "rasyid" && pass === "123") {
        alertBox.style.display = "block";
        alertBox.className = "alert success";
        alertBox.textContent = "Login berhasil!"; 

           setTimeout(() => {
            window.location.href = "galeri.html";
        }, 300);
    }  else if (user === "rasyid" && pass === "1234") {
        alertBox.style.display = "block";
        alertBox.className = "alert success";
        alertBox.textContent = "Login berhasil!";

      
        setTimeout(() => {
            window.location.href = "about.html";
        }, 300);
    }
    else {
        alertBox.style.display = "block";
        alertBox.className = "alert error";
        alertBox.textContent = "Masukkin yang bener!";
    }
}
function toggleDarkMode() {
    const body = document.body;
    const btn = document.querySelector('.toggle-btn');
    body.classList.toggle('dark');


    if (body.classList.contains('dark')) {
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }

}

