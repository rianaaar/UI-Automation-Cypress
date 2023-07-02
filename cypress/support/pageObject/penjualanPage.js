class Penjualan{
    clickMenuPenjualan(){
        cy.get('[href="/sales"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click()
    }
    pilihPelanggan(){
        cy.get('#pelanggan').click()
    }
    Search(key){
        cy.get('[placeholder="cari"]').type(key)
    }
    PilihList(key){
        cy.get('td[class="css-u3dlpe"]').contains(key).click()
    }
}

export default Penjualan