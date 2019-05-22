const checkInput = () => {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    return login !== "" && password !== "";
};

export default checkInput;