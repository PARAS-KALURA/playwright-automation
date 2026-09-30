# Playwright Automation Framework

A JavaScript-based Playwright automation framework built to test the
[SauceDemo](https://www.saucedemo.com/) web application.

The project follows the **Page Object Model (POM)** design pattern and
covers login, product, cart, and checkout workflows.

---

## 🚀 Tech Stack

- JavaScript
- Playwright
- Node.js
- Page Object Model (POM)
- Git & GitHub

---

## 📁 Project Structure

```text
playwright-automation/
│
├── .github/
│   └── workflows/
│
├── pages/
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── login.spec.js
│   ├── products.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md