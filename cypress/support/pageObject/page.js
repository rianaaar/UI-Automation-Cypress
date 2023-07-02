class page{
    clickButton(button){
        cy.get(button).click()
    }
    clickButtonContain(key){
        cy.get('.chakra-button').contains(key).click()
    }
    Validation(validWord){
        cy.contains(validWord).should('contain',validWord)
    }
}

export default page