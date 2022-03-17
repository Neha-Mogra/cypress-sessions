import session04PO from "./session04PO";

export function clickSignInButton() {
    cy.get(session04PO.signInButton).click();
}

export function clickSignInSubmitButton() {
    cy.get(session04PO.signInSubmitButtonClick).click();
}

export function clickSaveButton() {
    cy.get(session04PO.saveButton).contains('Save').click();
}

export function clickProfileButton() {
    cy.get(session04PO.profileButton).click();
}