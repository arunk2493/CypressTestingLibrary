import afterEach = Mocha.afterEach;

describe('Network Interception',()=>{
    beforeEach(()=>{
        cy.intercept('GET', 'http://localhost:3000/api/customers/page/0/10',{fixture:'page1.json'});
        cy.intercept('GET', 'http://localhost:3000/api/customers/1',{fixture:'mock-order-customer1.json'});
        cy.visit('http://localhost:3000/customers');
    })
    it('Sample Intercept 1- Mock the customer page from 10 to 8',()=>{

        //Asserting a sample customer from the mock, the mock is present in the fixtures folder by default
        cy.findByTestId('customerGrid').findByText('Ted James').should('exist');
        cy.findByTestId('customerGrid').findByText('Phoenix, Arizona').should('exist');
        //cy.findByTestId('customerGrid').findAllByText('View Orders').should('exist').first().click();
        cy.findByTestId('customerGrid').findAllByText('View Orders').should('exist').then(elem => {
            elem[0].click();
        });
        cy.findByTestId('customerOrderDetails').findByText('Orders for Ted James').should('exist');
        cy.findByTestId('customerOrderDetails').findByText('Basketball').should('exist');
        cy.findByTestId('customerOrderDetails').findAllByText('$7.99').first().should('exist');
        cy.findByTestId('customerOrderDetails').findAllByText('$7.99').first().should('exist');
        //Redirect to home page
        cy.findByText('View all Customers').should('exist').click();
        //verify the successful redirection
        cy.findByTestId('customerGrid').findByText('Ted James').should('exist');
        cy.findByTestId('customerGrid').findByText('Phoenix, Arizona').should('exist');
    })
    afterEach(()=>{
        cy.screenshot();
    })
})
