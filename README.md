# Code Challenge Completion

## Overview

This repository contains a Cypress test suite that demonstrates the steps requested in the email challenge. The test navigates to the Samaritan’s Purse website, adds a specific item (Baby Chicks) to the gift cart, includes an Email Memorial Card, proceeds to checkout, and enters payment details. The goal is to showcase the ability to build and execute an end-to-end automated test.

## Requirements & Steps Covered

The test performs the following actions as requested:

1. **Visit Website**  
   Navigates to [www.samaritanspurse.org](https://www.samaritanspurse.org).

2. **Access Gift Catalog**  
   Clicks the link to open the Gift Catalog page.

3. **Add Baby Chicks Gift**  
   Selects the "Baby Chicks" gift and adds it to the cart with a custom amount of `$3.16`.

4. **Add an Email Memorial Card**  
   Chooses the “Email a Memorial Card” option, filling in:
   - Deceased Name: Jane Doe
   - Sender Name: John Doe
   - Recipient’s Email: kaeland1@gmail.com

5. **Proceed to Checkout**  
   Clicks the “Checkout” button to go to the checkout page.

6. **Enter User Information**  
   Inputs arbitrary first name, last name, address, city, state, zip, and email. Any test data is acceptable.

7. **Select Payment Method (Credit Card)**  
   Chooses the "Credit" payment option.

8. **Enter Test Card Details**  
   Uses the provided test card information:
   - Card Number: `4111 1111 1111 1111`
   - Expiration: `12/30`
   - CVV: `123`

9. **Confirm Transaction**  
   Clicks the “Confirm Transaction” button to submit the payment.

## How to Run

1. **Install Dependencies**
   ```bash
   npm install
   ```
   
   From the Cypress UI, select the test file (checkout.cy.js) and run it

2. **Open Cypress Test Runner**
    ``` bash
    npx cypress open
    ```

    Or, run headlessly
    ``` bash
    npx cypress run
    ```

3. **View Results**
In the Cypress Test Runner, watch the steps as they execute. If running headlessly, review the command line output or generated reports.

 
