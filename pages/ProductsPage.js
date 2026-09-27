class ProductsPage {

  constructor(page) {
    this.page = page;

    this.backpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async addBackpackToCart() {
    await this.backpackButton.click();
  }

}

export default ProductsPage;