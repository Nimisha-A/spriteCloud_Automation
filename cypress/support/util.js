export function loginFunctionalities(user) {
    cy.get('[data-test="username"]').type(user.username);
    cy.get('[data-test="password"]').type(user.password);
    cy.get('[data-test="login-button"]').click();
}
export function fillCustomerDetails() {
    cy.get('[data-test="firstName"]').type("Test");
    cy.get('[data-test="lastName"]').type("Test");
    cy.get('[data-test="postalCode"]').type("123");
}
