describe('The Login Page', () => {
    beforeEach(() => {
        cy.visit('/auth/signin', { timeout: 60000 }); 
    });

    it('displays the login form', () => {
        cy.get('form', { timeout: 10000 }).should('exist');
        cy.get('input[name="email"]').should('exist');
        cy.get('input[name="password"]').should('exist');
        cy.get('button[type="submit"]').should('contain.text', 'Login');
    });

    it('allows the user to log in with valid credentials and navigate to bookmarks', () => {
        const validEmail = 'wondmenehdereje@gmail.com';
        const validPassword = '12345678';

        cy.intercept('GET', '**/https://akil-backend.onrender.com/opportunities/search**').as('fetchData');

        cy.get('input[name="email"]').type(validEmail);
        cy.get('input[name="password"]').type(validPassword);

        cy.get('button[type="submit"]').click();

        cy.wait('@fetchData', { timeout: 60000 });

    
        cy.url({ timeout: 60000 }).should('not.include', '/auth/signin');

        cy.get('button').contains('My bookmarks').should('exist').click();

   
        cy.url({ timeout: 10000 }).should('include', '/jobs/bookmarks');

        cy.get('h1').should('contain.text', 'Bookmarked Opportunities'); 
    });

    // it('shows an error message with invalid credentials', () => {
    //     const invalidEmail = 'invaliduser@example.com';
    //     const invalidPassword = 'WrongPassword';

    //     cy.get('input[name="email"]').type(invalidEmail);
    //     cy.get('input[name="password"]').type(invalidPassword);
    //     cy.get('button[type="submit"]').click();

    //     // Check for the error message
    //     cy.get('.text-red-500', { timeout: 10000 })
    //         .should('contain.text', 'Invalid credentials');
    // });

    // it('does not allow login with empty fields', () => {
    //   // Submit the form without filling in any fields
    //   cy.get('button[type="submit"]').click();

    //   // Check for validation messages
    //   cy.get('input[name="email"]:invalid', { timeout: 10000 }).should('exist');
    //   cy.get('input[name="password"]:invalid').should('exist');
    // });
});
