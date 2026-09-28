class CheckoutPage{
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.getByRole('button', {name:'Checkout'});
    }
}