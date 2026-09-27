
class LoginPage {

  constructor(page)  {
     this.page = page;

     this.username = page.getByPlaceholder('Username'); //remembers Username box
     this.password = page.getByPlaceholder('Password'); //remembers password box
     this.loginButton = page.getByRole('button', { name:'Login' }); // remembers Login Btn
  }

    async login(username,password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

}

export default LoginPage;