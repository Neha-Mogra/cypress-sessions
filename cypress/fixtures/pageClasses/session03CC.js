import session03PO from "./session03PO";

export function selectDirectFlights() {
    cy.get(session03PO.stopsRadioButton).click({ force: true });
}

export function selectShowAllButton(){
    cy.get(session03PO.showAllButton).contains('Show all').click();
      
}

export function selectAirlineCheckbox() {
    cy.get(session03PO.saudiaCheckbox).click({ force: true });
}

export function selectFlightButton() {
    cy.get(session03PO.selectFlightButton).first().click({ force: true });
}