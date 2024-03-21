import {faker} from '@faker-js/faker'

const firstName = 'Fernando'
const editFirstName = 'Fernanda'


describe('E2E - Employee', () => {
  beforeEach(()=> {
    cy.visit('/')
  })


  it('Validation elements in Home', () => {
    cy.get('.funcionario-box > button').should('contain','New Employee')
    cy.get('.mat-mdc-text-field-wrapper')
      .should('contain','Search')
      .click()
    cy.get('#mat-input-0').should('have.attr','placeholder', 'What are you looking for?')

  })
  it('Create new Employee', () => {
    cy.get('.funcionario-box > button').click()
    cy.get('h1').should('contain','Create Employee')
    cy.get('form').find('button[type="submit"]').should('have.attr','disabled')
    cy.get('.mat-unthemed > .mdc-button__label').should('contain','Back to home')


    cy.get('#firstname').type(firstName)
    cy.get('#lastname').type(faker.name.lastName())
    cy.get('#department').click()
    cy.get('mat-option').contains('HR').click();
    cy.get('#workshift').click()
    cy.get('mat-option').contains('Morning').click();
    cy.get('form').find('button[type="submit"]').click()
    cy.ValidateDataInTheGrid(firstName)

  })
  it('Edit Employee',() => {
     //edit
     cy.get('table').contains(firstName).closest('tr').find('#actions > .mat-primary').click();
     cy.get('h1').should('contain','Edit Employee')
     cy.get('form').find('button[type="submit"]').should('contain','Edit')
     cy.get('.mat-unthemed > .mdc-button__label').should('contain','Back to home')
     cy.get('#firstname input').clear().type(editFirstName)
     cy.get('#department').click()
     cy.get('mat-option').contains('Financial').click()
     cy.get('form').find('button[type="submit"]').click()
     cy.ValidateDataInTheGrid(editFirstName)

  })
  it('Details Employee',() => {
    cy.get('table').contains(editFirstName).closest('tr').find('#actions > .mat-accent').click();
    cy.get('h1').should('contain','Details Employee')
    cy.get('.mat-warn > .mdc-button__label').should('contain','Inactivate employee')
    cy.get('.mat-unthemed > .mdc-button__label').should('contain','Back to home')

    cy.get('#firstname  input').should('be.disabled')
    cy.get('#lastname input').should('be.disabled')
    cy.get('#department input').should('be.disabled')
    cy.get('#workshift input').should('be.disabled')
    cy.get('.mat-unthemed > .mdc-button__label').click()
    cy.ValidateDataInTheGrid(editFirstName)

  })
   it('Search Employee',() => {
    cy.get('.funcionario-box > button').should('contain','New Employee')
    cy.get('.mat-mdc-text-field-wrapper')
      .should('contain','Search')
      .click()
    cy.get('#mat-input-0').should('have.attr','placeholder', 'What are you looking for?').type(editFirstName)
    cy.ValidateDataInTheGrid(editFirstName)

    cy.get('.mat-mdc-text-field-wrapper').clear().type('abcccc')
    cy.ValidateDataNotInTheGrid('abcccc')

  })
  it('Delete Employee',() => {
    cy.get('table').contains(editFirstName).closest('tr').find('#actions > .mat-warn').click();

    cy.get('.mat-mdc-dialog-surface').should('be.visible')
    cy.get('#employeename').contains(editFirstName)
    cy.get('#back').should('contain', 'Back to home')
    cy.get('#delete').should('contain', 'Confirm').click()
    cy.ValidateDataNotInTheGrid(editFirstName)

  })
})

