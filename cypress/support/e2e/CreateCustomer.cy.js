import login from '../pageObject/loginPage'
import page from '../pageObject/page'
import penjualan from '../pageObject/penjualanPage'
import pelanggan from '../pageObject/CustomerPage'
import data from '../data/testData.json'

let getText

describe('Create Customer', () => {
    const Login = new login()
    const Page = new page()
    const Sales = new penjualan()
    const Customer = new pelanggan()

    beforeEach(() => {
        cy.visit('/')
        Login.inputEmail(data.email)
        Login.inputPassword(data.password)
        Page.clickButton(data.buttonElement)
        Page.Validation('dashboard')
    })
    it('Create New Customer', () => {
        Customer.clickMenuPelanggan()
        Customer.clickTambah()
        Customer.inputName(data.namaPelanggan)
        Customer.inputNomer(data.nomerPelanggan)
        Customer.inputAlamat(data.alamatPelanggan)
        Customer.inputKet(data.keteranganPelanggan)
        Page.clickButtonContain(data.buttonSimpan)
        Page.Validation('success')
    }),
    it('Create new customer with empty name', () => {
        Customer.clickMenuPelanggan()
        Customer.clickTambah()
        Customer.inputNomer(data.nomerPelanggan)
        Customer.inputAlamat(data.alamatPelanggan)
        Customer.inputKet(data.keteranganPelanggan)
        Page.clickButtonContain(data.buttonSimpan)
        Page.Validation('"name" is not allowed to be empty')
    })
})