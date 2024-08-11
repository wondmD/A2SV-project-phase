describe('template spec', () => {
  it('passes', () => {
    cy.visit('/auth/signin')

    cy.request('POST', '/auth/signin/', {email : 'wondmeneh.dereje@a2sv.org', password : '7817wonaD'}
      
    )
    

    
    
  })
})

