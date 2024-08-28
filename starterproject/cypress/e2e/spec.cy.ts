describe('The Landing Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfully loads the landing page', () => {
    cy.contains('Find your opportunities here at akill');
  });

  it('displays the correct header image', () => {
    cy.get('header img')
      .should('have.attr', 'src')
      .and('include', '/images/akil.png');
  });

  it('shows the correct header text', () => {
    cy.get('h1').should('contain.text', 'Find your opportunities here at akill');
  });

  it('displays the correct subheading text', () => {
    cy.get('p')
      .should('contain.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.');
  });

  it('displays the "Go to opportunities" button', () => {
    cy.get('a[href="/jobs"]').should('contain.text', 'Go to opportunities');
  });

  it('navigates to the jobs page when "Go to opportunities" button is clicked', () => {
    cy.get('a[href="/jobs"]').click();
    cy.url().should('include', '/jobs');
  });

  it('displays the Login button if the user is not logged in', () => {
    cy.get('a[href="/auth/signin"]').should('contain.text', 'Login');
  });

  // it('displays the Logout button if the user is logged in', () => {
  //   // Mocking session data to simulate a logged-in user
  //   cy.window().then((win) => {
  //     win.localStorage.setItem('next-auth.session-token', 'fake-session-token');
  //     cy.reload();
  //   });

  //   cy.get('button').should('contain.text', 'Logout');
  // });

  // it('logs out the user when Logout button is clicked', () => {
  //   // Ensure the user is logged in
  //   cy.window().then((win) => {
  //     win.localStorage.setItem('next-auth.session-token', 'fake-session-token');
  //     cy.reload();
  //   });

  //   cy.get('button').contains('Logout').click();
  //   cy.get('a[href="/auth/signin"]').should('contain.text', 'Login');
  // });

  it('checks the hover effects on the "Go to opportunities" button', () => {
    cy.get('a[href="/jobs"]').trigger('mouseover');
    cy.get('a[href="/jobs"]').should('have.class', 'focus:ring-2');
  });

  it('checks the hover effects on the Login button', () => {
    cy.get('a[href="/auth/signin"]').trigger('mouseover');
    cy.get('a[href="/auth/signin"]').should('have.class', 'focus:ring-2');
  });

  // it('verifies that the page does not show any accessibility violations', () => {
  //   cy.injectAxe(); // Injects the axe-core library into the page
  //   cy.checkA11y(); // Checks for accessibility violations
  // });
});
