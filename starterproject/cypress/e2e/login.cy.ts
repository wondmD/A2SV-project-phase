describe('The Login Page', () => {
    beforeEach(() => {
        cy.visit('/auth/signin', { timeout: 60000 }); // Increase timeout for page load
    });

    it('displays the login form', () => {
        cy.get('form', { timeout: 10000 }).should('exist');
        cy.get('input[name="email"]').should('exist');
        cy.get('input[name="password"]').should('exist');
        cy.get('button[type="submit"]').should('contain.text', 'Login');
    });

    it('allows the user to log in with valid credentials', () => {
        const validEmail = 'wondmenehdereje@gmail.com';
        const validPassword = '12345678';

        cy.intercept('GET', '**/https://akil-backend.onrender.com/opportunities/search**').as('fetchData'); // Replace with the actual endpoint
        //   
        cy.get('input[name="email"]').type(validEmail);
        cy.get('input[name="password"]').type(validPassword);

        cy.get('button[type="submit"]').click();

        cy.wait('@fetchData', { timeout: 100000 });

        cy.url({ timeout: 100000 }).should('not.include', '/auth/signin');

        // Confirm that the logout button is now visible, indicating a successful login
        // cy.get('header').should('contain.text', 'Logout');
    });

    // it('shows an error message with invalid credentials', () => {
    //     const invalidEmail = 'woreje@gmail.com';
    //     const invalidPassword = '12345678ww';

    //     // Fill in the email and password fields with invalid credentials
    //     cy.get('input[name="email"]').type(invalidEmail);
    //     cy.get('input[name="password"]').type(invalidPassword);

    //     // Submit the form
    //     cy.get('button[type="submit"]').click();

    //     // Check for an error message
    //     cy.get('.error-message', { timeout: 10000 }).should('contain.text', '');
    // // });

    // it('does not allow login with empty fields', () => {
    //   // Submit the form without filling in any fields
    //   cy.get('button[type="submit"]').click();

    //   // Check for validation messages
    //   cy.get('input[name="email"]:invalid', { timeout: 10000 }).should('exist');
    //   cy.get('input[name="password"]:invalid').should('exist');
    // });
});
