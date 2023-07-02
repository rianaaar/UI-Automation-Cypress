import login from '../pageObject/loginPage'
import page from '../pageObject/page'
import penjualan from '../pageObject/penjualanPage'
import data from '../data/testData.json'

let getText

describe('Create Penjualan', () => {
    const Login = new login()
    const Page = new page()
    const Sales = new penjualan()

    beforeEach(() => {
      cy.visit('/')
      Login.inputEmail(data.email)
      Login.inputPassword(data.password)
      Page.clickButton(data.buttonElement)
      Page.Validation('dashboard')
    })
    it('Create valid Penjualan', () => {
        Sales.clickMenuPenjualan()
        Page.clickButton(data.buttonElement)
        Sales.pilihPelanggan()
        Sales.Search(data.pelanggan)
        Sales.PilihList(data.pelanggan)
        Page.clickButtonContain(data.buttonProduk)
        Sales.Search(data.produkOne)
        Sales.PilihList(data.produkOne)
        cy.get('div.css-9jay18 > div:nth-child(2) > h2').invoke('text')
        .then((text) => {
          getText = text
        })
        .then(() => {
            cy.get('input[placeholder="...jumlah bayar"]').type(getText)
        })
        Page.clickButtonContain(data.buttonBayar)
        Page.Validation('transaksi sukses')
    }),
    it('Create Penjualan use product without stock', () => {
        Sales.clickMenuPenjualan()
        Page.clickButton(data.buttonElement)
        Sales.pilihPelanggan()
        Sales.Search(data.pelanggan)
        Sales.PilihList(data.pelanggan)
        Page.clickButtonContain(data.buttonProduk)
        Sales.Search(data.produkTwo)
        Sales.PilihList(data.produkTwo)
        cy.get('div.css-9jay18 > div:nth-child(2) > h2').invoke('text')
        .then((text) => {
          getText = text
        })
        .then(() => {
            cy.get('input[placeholder="...jumlah bayar"]').type(getText)
        })
        Page.clickButtonContain(data.buttonBayar)
        Page.Validation('transaksi gagal: stock tidak cukup')
    })
})