class CartPage {
    constructor(page) {
        this.page = page;
        this.cartButton = page.locator('[data-test="shopping-cart-link"]');
        this.backpack = page.getByText('Sauce Labs Backpack');
    }

    async openCart() {
        await this.cartButton.click();
    }

    async removeBackpack() {
     await this.page.getByRole('button', {name:'Remove'}).click();
    }
}

export default CartPage;