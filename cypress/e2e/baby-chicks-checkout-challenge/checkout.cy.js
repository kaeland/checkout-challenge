describe("Verify checkout process for Baby Chicks", () => {
  it("visits Samaritans Purse website", () => {
    // Visit Samaritan's Purse website
    cy.visit("https://www.samaritanspurse.org/our-ministry/gift-catalog/").then(
      () => {
        cy.url().should("include", "www.samaritanspurse.org");
      }
    );

    // Verify search icon is visible on page
    cy.get("#searchIcon").should("be.visible");

    // Click search icon
    cy.get("#searchIcon").click();

    // Verify search box is visible on page
    cy.get("#searchBox").should("be.visible");
    // Enter Baby Chicks into search box
    cy.get("#searchBox").type("Baby Chicks{enter}");

    // Verify Baby Chicks list item is visilbe on page
    cy.get(".itemTitle").should("be.visible").and("contain", "Baby Chicks");
    // Click Baby Chicks list item
    cy.contains(".itemTitle", "Baby Chicks").click();

    // Verify visibility of Baby Chicks caption
    cy.get("#caption-left").contains("Baby Chicks");
    // Verify Input visibility within right caption
    cy.get("#caption-right input").should("be.visible");
    // Add Baby Chicks gift with $3.16 amount
    cy.get("#caption-right input").type("3.16");
    cy.get("#caption-right button.deskAdd").click();

    // Verify card pop-up menu is visible on page
    cy.get("#cart-addon-popup-cars").should("exist");
    // Add an Email Memorial Card
    cy.get("#cart-addon-popup-cars").within(() => {
      // Verify presence of card selection menu
      cy.get(".action-wrapper select").should("exist");
      // Select Email Memorial Card option from menu
      cy.get(".action-wrapper select")
        .select("Email a Memorial Card")
        .should("have.value", "emailMemorialCard");
    });

    // Verify prescence of memorial card form menu
    cy.get(".formPageHeader h2").contains("Email a Memorial Card");

    // Fill out memorial card form
    cy.get('input[name="deceasedName"]').type("Jane Doe");

    cy.get('input[name="fromDisplayName"]').type("John Doe");

    cy.get('input[name="toDisplayName"]').type("Kaeland Chatman");

    cy.get('input[name="toEmailAddress"]').type("kaeland1@gmail.com");
  });
});
