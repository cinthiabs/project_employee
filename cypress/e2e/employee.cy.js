import {faker} from '@faker-js/faker'

describe('E2E - Employee', () => {

  beforeEach(()=> {
    cy.visit('/')
  })

  it('Validation elements in home', () => {
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


    cy.get('#firstname').type('Fernando')
    cy.get('#lastname').type(faker.name.lastName())
    cy.get('#department').click()
    cy.get('mat-option').contains('HR').click();
    cy.get('#workshift').click()
    cy.get('mat-option').contains('Morning').click();
    cy.get('form').find('button[type="submit"]').click()

    cy.get('table').contains('Fernando').closest('tr').find('#actions > .mat-primary')

  })
  it('Edit Employee',() => {
     //edit
     cy.get('table').contains('Fernando').closest('tr').find('#actions > .mat-primary').click({force: true});
     cy.get('h1').should('contain','Edit Employee')
     cy.get('form').find('button[type="submit"]').should('contain','Edit')
     cy.get('.mat-unthemed > .mdc-button__label').should('contain','Back to home')
     cy.get('#firstname input').clear({ force: true }).type('Fernanda')
     cy.get('#department').click()
     cy.get('mat-option').contains('Financial').click()
     cy.get('form').find('button[type="submit"]').click()

     cy.get('table').contains('Fernanda').closest('tr').find('#actions > .mat-primary')

  })
  it.only('Details Employee',() => {
    cy.get('table').contains('Fernanda').closest('tr').find('#actions > .mat-accent').click({force: true});
    cy.get('h1').should('contain','Details Employee')
    cy.get('.mat-warn > .mdc-button__label').should('contain','Inactivate employee')
    cy.get('.mat-unthemed > .mdc-button__label').should('contain','Back to home')

    cy.get('#firstname  input').should('be.disabled')
    cy.get('#lastname input').should('be.disabled')
    cy.get('#department input').should('be.disabled')
    cy.get('#workshift input').should('be.disabled')
    //detalis
  //  cy.get('table').contains('Ida').closest('tr').find('#actions > .mat-accent').click({force: true});
    //delete
  //  cy.get('table').contains('Ida').closest('tr').find('#actions > .mat-warn').click({force: true});
 })
})
