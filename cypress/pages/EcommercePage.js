class EcommercePage {

  searchProduct() {
    cy.get(".noo-search")
      .click();

    cy.get(".form-control")
      .type("dress{enter}");

    cy.get(".woocommerce-result-count")
      .should("contain", "16");
  }

  selectProduct() {
    cy.get(".post-1441 > .noo-product-inner > h3 > a")
      .click();
    
    cy.get("#pa_color")
      .select(1);

    cy.get("#pa_size")
      .select(2);
  }

  addProduct() {
    cy.get(".icon_plus")
      .click();
    cy.get('[title="Qty"]')
      .should("have.value", 2);
    cy.get(".single_add_to_cart_button")
      .click();
  }
  
  checkCart() {
    cy.get(".cart-name-and-total")
      .click();
    cy.get(".product-subtotal > .woocommerce-Price-amount > bdi")
      .invoke("text")
      .as("productSubtotal");
    cy.get("@productSubtotal").then((subtotal) => {
    cy.get(".order-total > td")
      .invoke("text")
      .as("text")
      .should("contain", subtotal);
    });
  }

  sucessCheckout(){
      cy.get(".wc-proceed-to-checkout > .checkout-button")
        .click();
      cy.get("#billing_first_name")
        .type("Teste");
      cy.get("#billing_last_name")
        .type("Cypress");

      cy.get("#select2-billing_country-container")
        .type("Brazil");
      cy.get("#select2-billing_country-results")
        .each(($el, index, $list) => {
        if ($el.text() === "Brazil") {
          cy.wrap($el).click(); 
        }
      });
      cy.get("#billing_address_1")
        .type("Av. Paulista, 10000");
      cy.get("#billing_postcode")
        .type("01310-930");
      cy.get("#billing_city")
        .type("Sao Paulo");

      cy.get("#select2-billing_state-container")
        .type("São Paulo");
      cy.get("#select2-billing_state-results")
      
        .each(($el, index, $list) => {
        if ($el.text() === "São Paulo") {
          cy.wrap($el).click();
        }
      });

      cy.get("#billing_phone")
        .type("55555000000");
      cy.get("#billing_email")
        .type("teste345@gmail.com");

      cy.get("#terms").check()
        .should("be.checked");
      cy.get("#place_order")
        .click();
      
      cy.url()
        .should("include", "order-received");
    
      cy.get(".woocommerce-thankyou-order-received")
        .should(
        "contain",
        "Thank you. Your order has been received"
      );
  }

  sucessLogin(){
    cy.get("#username").type('teste345');
    cy.get("#password").type('#teste123');
    cy.get("#rememberme").check();
    cy.get(":nth-child(3) > .woocommerce-button").click();
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "teste345"
    );
    cy.get(".custom-logo-link > .custom-logo").click();
  }
}
  
  export default EcommercePage;