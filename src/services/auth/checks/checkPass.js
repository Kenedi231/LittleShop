const checkPass = (pass1, pass2) => {
    const label = document.getElementById('labelRepeatPass');
    if (pass1.value !== pass2.value) {
        if (pass2 === document.activeElement) {
            pass2.style.borderColor = 'red';
            label.style.color = 'red';
        }
        return false;
    } else {
        label.removeAttribute("style");
        pass2.removeAttribute("style");
        return true;
    }
};

export default checkPass;