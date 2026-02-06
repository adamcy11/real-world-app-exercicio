import { RememberMe } from "@mui/icons-material"
import { create } from "lodash"

class loginPage {
    selectorList() {
        const selectors = {
            usernameField: "[id='username']",
            passwordField: "[id='password']",
            loginButton: "[data-test='signin-submit']",
            wrongCredentialAlert: "[data-test='signin-error']",
            emptyUsernamedAlert: "[data-test='signup']",
            RememberMeCheckbox: "[data-test='signin-remember-me']"
        }

        return selectors
    }

    acessLoginPage() {
        cy.visit('/signin')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorList().wrongCredentialAlert)
    }

    checkEmptyField(){
        cy.get(this.selectorList().emptyUsernamedAlert)
    }

}

export default loginPage;