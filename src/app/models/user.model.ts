export default class User {
    email: string;
    password: string;
    
    constructor() {

    }
}
export class UserSignup {
    name: string;
    password: string;
    employmentStatus: string;
    phone: string;
    email: string;

    constructor(name, password, employmentStatus, phone, email) {
        this.name = name;
        this.password = password;
        this.employmentStatus = employmentStatus;
        this.phone = phone;
        this.email = email;
    }
    
}
