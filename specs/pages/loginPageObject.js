//const testData = require("./specs/testData.json");

class Login{
    get email() {return $("#email");}
    get password() {return $("input[type = password]");}
    get signIn() {return $("button.btn");}

    login (email = "dale.test@gmail.com", password = "Pa55sword!"){        
        this.email.setValue(email);
        this.password.setValue(password);

        this.signIn.click();

    }

    isLogedIn(){
        browser.pause(1000);
    }    
}

module.exports = Login;