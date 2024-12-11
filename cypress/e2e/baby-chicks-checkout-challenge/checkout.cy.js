describe("Test the Gift Catalog process at Samaritan's Purse", () => {
  it("Completes a checkout process for Baby Chicks", () => {
    // Visit Samaritan's Purse website
    cy.visit("https://www.samaritanspurse.org").then(() => {
      cy.url().should("include", "www.samaritanspurse.org");
    });

    // Click button to visit catalog
    cy.get("a").contains("Shop the Catalog").click();

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
    cy.contains(".itemTitle", "Baby Chicks").parent().click();

    // Verify visibility of Baby Chicks caption
    cy.get("#caption-left").contains("Baby Chicks");
    // Verify Input visibility within right caption
    cy.get("#caption-right").should("be.visible");
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

    // Fill out memorial card form and confirm card details
    cy.get('input[name="deceasedName"]').type("Jane Doe");

    cy.get('input[name="fromDisplayName"]').type("John Doe");

    cy.get('input[name="toDisplayName"]').type("Kaeland Chatman");

    cy.get('input[name="toEmailAddress"]').type("kaeland1@gmail.com");

    cy.get('button[data-process="emailMemorialCard"]').click();

    // Click Checkout button
    cy.get("div#chkNow").should("be.visible");
    cy.get("div#chkNow").click();

    // Check popup menu visibility and continue to checkout page
    cy.get("div#pum_popup_title_189324")
      .should("be.visible")
      .contains("Would you like to add");
    cy.get("button#bcl_yes").click();

    // Check that there are exactly two donation items in the cart
    cy.get('[data-cy="donation-items-container"] [data-cy="donation-item"]')
      .should("have.length", 2)
      .as("cartItems");

    // Validate the first item
    cy.get("@cartItems")
      .eq(0)
      .within(() => {
        // Check item description
        cy.get('[data-cy="item-description"]')
          .should("contain", "CHICKENS & POULTRY PRODUCTS")
          .and("contain", "013656");

        // Check the amount for this item
        cy.get('[data-cy="editable-amount-input"]').should(
          "have.value",
          "3.16"
        );

        // Check presence of memorial card
        cy.get('[data-cy="card-display"]').should("be.visible");
      });

    // Validate the second item
    cy.get("@cartItems")
      .eq(1)
      .within(() => {
        // Check item description
        cy.get('[data-cy="item-description"]')
          .should("contain", "BIBLES & CHRISTIAN LITERATURE")
          .and("contain", "012025POP");

        // Check the amount for this item
        cy.get('[data-cy="editable-amount-input"]').should("have.value", "10");
      });

    // Ensure the billing section is visible
    cy.get("#billing").should("be.visible");

    // Ensure radio button is checked
    cy.get("#mat-radio-3-input").should("be.checked");

    // Title (Select)
    cy.get('[data-cy="select-title"]').click();
    // Adjust this option text to what the dropdown actually contains (e.g., "Mr.", "Mrs.", etc.)
    cy.contains("mat-option", "Mr.").click();

    // First Name
    cy.get('[data-cy="input-first-name"]').type("John");

    // Middle Name (Optional)
    cy.get('[data-cy="input-middle-name"]').type("M");

    // Last Name
    cy.get('[data-cy="input-last-name"]').type("Doe");

    // Suffix (Select)
    cy.get('[data-cy="select-suffix"]').click();
    cy.contains("mat-option", "Jr.").click();

    // Address Line 1
    cy.get("#mat-input-9").type("123 Main St");

    // Address Line 2
    cy.get('[data-cy="input-addressLine2"]').type("Apt 4B");

    // City
    cy.get('[data-cy="input-city"]').type("Testville");

    // State (Select)
    cy.get('[data-cy="select-state"]').click();
    // Select a state, for example: "Georgia"
    cy.contains("mat-option", "Georgia").click();

    // Zip
    cy.get('[data-cy="input-postalCode"]').type("12345");

    // Phone
    cy.get('[data-cy="input-phone"]').type("555-123-4567");

    // Email
    cy.get('[data-cy="input-email"]').type("john.doe@example.com");

    // Confirm Email
    cy.get('[data-cy="input-email-confirm"]').type("john.doe@example.com");

    // Ensure fields have expected values
    cy.get('[data-cy="input-first-name"]').should("have.value", "John");
    cy.get('[data-cy="input-last-name"]').should("have.value", "Doe");
    cy.get('[data-cy="input-email"]').should(
      "have.value",
      "john.doe@example.com"
    );

    // Verify visibility of Credit card option and click it
    cy.get('label[for="mat-radio-5-input"]')
      .contains("Credit / Debit Card")
      .click();

    // I'm using the `cypress-iframe` plugin here:
    // Wait for the iframe to load
    cy.frameLoaded("#payment_iframe");

    // Switch to the iframe context
    cy.iframe("#payment_iframe").within(() => {
      // Input Card number
      cy.get("input#card_number").type("4111 1111 1111 1111");
      // Input Expiry_date
      cy.get("input#card_expiration").type("1230");
      // Input CVV
      cy.get("input#card_verification").type("123");
    });

    // Verify Subtotal of $13.16
    cy.get('[data-cy="total-amount"]').contains("$13.16");

    // Click Confirm Transactions
    cy.get('[data-cy="desktop-confirm-button"]').click();

    // Return to main page
    cy.get("button.ng-star-inserted").contains("Return to Main Page").click();
  });
});
