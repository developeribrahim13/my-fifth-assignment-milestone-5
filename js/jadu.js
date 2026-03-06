function signInKorchere() {
    const username = document.getElementById('usrnm').value;
    const password = document.getElementById('pswrd').value;
    if (username !== 'admin') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Username!",
        });
        document.getElementById('usrnm').value = "";
        document.getElementById('pswrd').value = "";
        return;
    }
    if (password !== 'admin123') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid password!",
        });
        document.getElementById('usrnm').value = "";
        document.getElementById('pswrd').value = "";
        return;
    }
    Swal.fire({
        title: "Login Successful!",
        icon: "success",
        draggable: true
    });
    window.location.replace("./homepage.html");
}