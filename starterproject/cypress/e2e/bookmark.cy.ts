describe('Bookmarking functionality', () => {
    it('allows the user to log in, bookmark, and unbookmark a job', () => {
        const validEmail = 'wondmenehdereje@gmail.com';
        const validPassword = '12345678';

        cy.intercept('GET', '**/https://akil-backend.onrender.com/opportunities/search**').as('fetchData');
        cy.intercept('POST', '**/https://akil-backend.onrender.com/bookmarks/**').as('bookmarkJob');
        cy.intercept('DELETE', '**/https://akil-backend.onrender.com/bookmarks/**').as('unbookmarkJob');

        // Log in
        cy.visit('/auth/signin');
        cy.get('input[name="email"]').type(validEmail);
        cy.get('input[name="password"]').type(validPassword);
        cy.get('button[type="submit"]').click();

        cy.wait('@fetchData', { timeout: 60000 });
        cy.url({ timeout: 60000 }).should('not.include', '/auth/signin');



        cy.get('.job-item') 
        .first()
        .within(() => {
          cy.get('button').click();
  
          cy.get('img').should('have.attr', 'src', '/images/bookf.png'); 
  
          cy.get('button').click();
  
          cy.get('img').should('have.attr', 'src', '/images/booke.png'); 
        });
    });
});
