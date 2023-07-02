class login{
    inputEmail(email){
        cy.get('[id="email"]').type(email)
    }
    inputPassword(password){
        cy.get('[id="password"]').type(password)
    }
}

export default login