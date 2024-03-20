describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
  })


  it('Create new Employee', () => {
    cy.visit('/')
    cy.get('.funcionario-box > button').click()

  })
})
