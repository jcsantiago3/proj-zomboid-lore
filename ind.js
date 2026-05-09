function checkPassword(event) {
    event.preventDefault();
    const input = document.getElementById("pass").value;

    switch (input) {
        case "deb1":
            window.location.href = "deb1.html";
            break;
        case "deb2":
            window.location.href = "deb2.html";
            break;
        case "deb3":
            window.location.href = "deb3.html";
            break;
        case "dew1":
            window.location.href = "dew1.html";
            break;
        case "dew2":
            window.location.href = "dew2.html";
            break;
        case "dew3":
            window.location.href = "dew3.html";
            break;
        case "dew4":
            window.location.href = "dew4.html";
            break;
        case "reglog":
            window.location.href = "reglog.html";
            break;
        case "reprof":
            window.location.href = "reprof.html";
            break;
        case "relog1":
            window.location.href = "relog1.html";
            break;
        case "relog2":
            window.location.href = "relog2.html";
            break;
        case "relog3":
            window.location.href = "relog3.html";
            break;
        case "relog4":
            window.location.href = "relog4.html";
            break;
        case "acclog":
            window.location.href = "acclog.html";
            break;
        case "allog1":
            window.location.href = "allog1.html";
            break;
        default: alert("Wrong code. Please try again.");
    }
}

window.addEventListener("pageshow", () => {
    const input = document.getElementById("pass");
    input.value = "";
    input.focus();
});