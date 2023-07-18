import EcommercePage from "../pages/EcommercePage";

describe("Product details", () => {
    beforeEach(() => {
      cy.visit("https://shop.demoqa.com");
    });
  
    it("search the products", () => {
      const ecommercePage = new EcommercePage();
        ecommercePage.searchProduct()
    });
  
    it("select the products to cart", () => {
      const ecommercePage = new EcommercePage();
        ecommercePage.searchProduct()
        ecommercePage.selectProduct()
    });
  
    it("add the products to cart", () => {
      const ecommercePage = new EcommercePage();
        ecommercePage.searchProduct()
        ecommercePage.selectProduct()
        ecommercePage.addProduct()
    });

    it("check the cart and purchases", () => {
      const ecommercePage = new EcommercePage();
        ecommercePage.searchProduct()
        ecommercePage.selectProduct()
        ecommercePage.addProduct()
        ecommercePage.checkCart()
        ecommercePage.sucessCheckout()
    });
  });

describe("User account", () => {
    beforeEach(() => {
      cy.visit("https://shop.demoqa.com/my-account");
    });
    
    it("access account", () => {
      const ecommercePage = new EcommercePage();
      ecommercePage.sucessLogin()
    });
  });

