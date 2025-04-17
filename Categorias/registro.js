document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("❌ Las contraseñas no coinciden.");
        return;
    }

    // Guardar datos localStorage  
    let users = JSON.parse(localStorage.getItem("users")) || [];


    if (users.some(user => user.email === email)) {
        alert("⚠ Este correo ya está registrado.");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "login.html"; 
});
