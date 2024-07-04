import { loginFunctionalities,fillCustomerDetails } from "../support/util";

describe('Order', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture("loginCreds.json").then((loginCredentials) => {
            var user =loginCredentials.users[0];
            loginFunctionalities(user);
            cy.get('[data-test="title"]').should('have.text','Products');
            //Adding 1st product
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); 
            cy.get('[data-test="shopping-cart-badge"]').should('have.text','1').click();
            cy.get('[data-test="title"]').should('have.text','Your Cart');
            cy.get('[data-test="inventory-item-price"]').should('contain',"29.99");
            cy.get('[data-test="checkout"]').click();
            cy.get('[data-test="title"]').should('have.text','Checkout: Your Information');
            fillCustomerDetails();
        });
    })
    it('Successful checkout of an order', () => {
            cy.get('[data-test="continue"]').click();
            cy.get('[data-test="title"]').should('have.text','Checkout: Overview');
            cy.get('[data-test="subtotal-label"]').should('contain',"29.99");
            cy.get('[data-test="finish"]').click();
            cy.get('[data-test="complete-header"]').should('have.text','Thank you for your order!');//Successful order completion

    });

    it('Order cancellation', () => {
            cy.get('[data-test="continue"]').click();
            cy.get('[data-test="title"]').should('have.text','Checkout: Overview');
            cy.get('[data-test="cancel"]').click();
            cy.get('[data-test="title"]').should('have.text','Products');
    });

});
