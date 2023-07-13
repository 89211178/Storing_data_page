function Singup_Validation(values) {
    let error = {};
    const mail_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/

    if (values.mail === "") {
        error.mail = "Mail should not be empty"
    }
    else if (!mail_pattern.test(values.mail)) {
        error.mail = "Mail is invalid"
    }
    else {
        error.mail = ""
    }

    if (values.name === "") {
        error.name = "Username should not be empty"
    }
    else {
        error.name = ""
    }

    if (values.password === "") {
        error.password = "Password should not be empty"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Password is invalid (should be long at least 6 charaters and have at least one small, big character and number)"
    }
    else {
        error.password = ""
    }

    return error;
}

export default Singup_Validation;