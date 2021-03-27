const regex = {
    email: new RegExp(
        '^(([^<>()\\[\\]\\\\.,;:\\s@]+(\\.[^<>()\\[\\]\\\\.,;:\\s@]+)*)|(.+))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
    ),
    number: new RegExp('^[0-9]+$'),
    password: new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
};

export class Validators {
    static email(value, message) {
        if (value) {
            const result = regex.email.test(value);
            if (!result) return { error: true, message };
        }
        // return false;
    }

    static required(value, message) {
        if (!value || !value.toString().trim().length) {
            return { error: true, message };
        }
        return false;
    }

    static number(value, message) {
        const length = value ? value.toString().length : 0;

        if (length > 0) {
            const result = regex.number.test(value);
            if (!result) {
                return { error: true, message };
            }
        }

        return false;
    }
    static password(value, message) {
        if (value &&!regex.password.test(value)) return { error: false, message }

    }
    static confirmPassword(password,confirmPassword,message){
        if(password !== confirmPassword) return {error:false,message}
    }
}

export const validateInput = (validators, value) => {
    if (validators && validators.length) {
        for (let i = 0; i < validators.length; i++) {
            let error = validators[i].check? validators[i].check(value, validators[i].message):false;
            if(validators[i].checkPassword) error = validators[i].checkPassword(value,validators[i].password,validators[i].message)
            if (error) {
                return error;
            }
        }
    }
    return false;
};