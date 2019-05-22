const checkEmail = (email) => {
    let label = document.getElementById("labelEmail");
    let check = /.+@\w+\.\w+/;
    if (!email.value.match(check)) {
        if (email === document.activeElement) {
            label.style.color = "red";
            email.style.borderColor = "red";
        }
        return false;
    } else {
        label.removeAttribute("style");
        email.removeAttribute("style");
        return true;
    }
};

export default checkEmail;