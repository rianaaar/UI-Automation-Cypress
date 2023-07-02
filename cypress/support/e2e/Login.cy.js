import login from '../pageObject/loginPage'
import page from '../pageObject/page'
import data from '../data/testData.json'

describe('Login', () => {
    const Login = new login()
    const Page = new page()
    beforeEach(() => {
      cy.visit('/')
    })
    it('Login', () => {
      Login.inputEmail(data.email)
      Login.inputPassword(data.password)
      Page.clickButton(data.buttonElement)
      Page.Validation('dashboard')
    }),
    it('Login use invalid data', () => {
      Login.inputEmail(data.email)
      Login.inputPassword('xx')
      Page.clickButton(data.buttonElement)
      Page.Validation('Kredensial yang Anda berikan salah')
    })
})