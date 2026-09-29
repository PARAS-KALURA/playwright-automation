class CheckoutPage {

  constructor(page) {
    this.page = page;
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.postalCode = page.getByPlaceholder('Zip/Postal Code');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async fillCheckoutDetails(firstName, lastName, postalCode) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
  }

  async continueCheckout() {
    await this.continueButton.click();
  }

}

export default CheckoutPage;