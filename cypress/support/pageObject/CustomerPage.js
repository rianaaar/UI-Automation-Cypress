class Customer{
    clickMenuPelanggan(){
        cy.get('.css-1mqa38q').contains('pelanggan').click()
    }
    clickTambah(){
        cy.get('[href="/customers/create"]').click()
    }
    inputName(name){
        cy.get('#nama').type(name)
    }
    inputNomer(nomer){
        cy.get('[id="no.hp"]').type(nomer)
    }
    inputAlamat(alamat){
        cy.get('#alamat').type(alamat)
    }
    inputKet(ket){
        cy.get('#keterangan').type(ket)
    }
}

export default Customer