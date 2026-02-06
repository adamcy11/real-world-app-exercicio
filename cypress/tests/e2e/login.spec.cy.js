import userData from "../../fixtures/userData.json";
import LoginPage from '../pages/loginPage';
import EveryonePage from '../pages/everyonePage';


const loginPage = new LoginPage()
const everyonePage = new EveryonePage()

describe('Login com sucesso', () => {

  beforeEach(() => {
    loginPage.acessLoginPage()  
  })


  it('Deve fazer login com um usuário válido', () => {

    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    everyonePage.checkEveryonePage()
  });
  
});