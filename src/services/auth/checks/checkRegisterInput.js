import checkPass from './checkPass';
import checkEmail from './checkEmail';

const checkInput = () => {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password');
    const repeatPass = document.getElementById('repeatPass');
    const email = document.getElementById('e-mail');
    const firstCheck = login !== "" && password.value !== "" && repeatPass.value !== "" && email.value !== "";
    const secondCheck = checkPass(password, repeatPass);
    const thirdCheck = checkEmail(email);
    return firstCheck && secondCheck && thirdCheck;
};

export default checkInput;