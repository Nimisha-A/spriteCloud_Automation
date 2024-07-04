import { loginFunctionalities } from "../support/util";

describe('Cart ', () => {
    it('Remove from cart', () => {
        cy.visit('/')
        cy.fixture("loginCreds.json").then((loginCredentials) => {
            var user =loginCredentials.users[0];
            loginFunctionalities(user);
            cy.get('[data-test="title"]').should('have.text','Products');
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); //Adding 1st item to cart
            cy.get('[data-test="shopping-cart-badge"]').should('have.text','1').click();
            cy.get('[data-test="inventory-item-name"]').should('have.text',"Sauce Labs Backpack");
            cy.get('[data-test="remove-sauce-labs-backpack"]').click();
            cy.get('[data-test="inventory-item-name"]').should('not.equal',"Sauce Labs Backpack");
        });
    });

});