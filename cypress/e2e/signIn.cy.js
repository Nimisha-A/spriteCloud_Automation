import { loginFunctionalities } from "../support/util";

describe('login', () => {
    it('Login using valid credential', () => {
        cy.visit('/')
        cy.fixture("loginCreds.json").then((loginCredentials) => {
            loginCredentials.users.forEach((user) => {
                if(user.username === "standard_user"){
                    loginFunctionalities(user);
                    cy.get(".app_logo").should('have.text','Swag Labs');
                }
            });
        });
    });

    it('Login for locked user', () => {
        cy.visit('/')
        cy.fixture("loginCreds.json").then((loginCredentials) => {
            loginCredentials.users.forEach((user) => {
                if(user.username === "locked_out_user"){
                    loginFunctionalities(user);
                    cy.get(".error-message-container.error").should('have.text','Epic sadface: Sorry, this user has been locked out.')
                }
            });
        });
    });
    it('Login invalid credential', () => {
        cy.visit('/')
        cy.fixture("loginCreds.json").then((loginCredentials) => {
            loginCredentials.userWithWrongCredential.forEach((user) => {
                    loginFunctionalities(user);
                    cy.get(".error-message-container.error").should('have.text','Epic sadface: Username and password do not match any user in this service')
            });
        });
    });

});
