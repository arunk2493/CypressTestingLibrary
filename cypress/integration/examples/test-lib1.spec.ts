describe('Angular App Testing Library',()=>{
    it('Verify the Menu options in UI', ()=>{
        cy.visit('http://localhost:3000/customers');
        cy.findByAltText('logo').should('exist')
        cy.findByText('Card View').should('exist');
        cy.findByText('List View').should('exist');
        cy.findByText('Map View').should('exist');
        cy.findByText('New Customer').should('exist');
        //to get an attribute of an element, add the element in get and provide the attribute name in the invoke method(2nd arguement)
        cy.get('.navbar-brand').invoke('attr','href').should('contain','/customers');
        cy.findByText('Filter:').should('exist');
        //Add data-testId for a div and verify the names
        cy.findByTestId('customerGrid').findByText('Ted James').should('exist');
        cy.findByTestId('customerGrid').findByText('Phoenix, Arizona').should('exist');
        cy.findByTestId('customerGrid').findAllByText('View Orders').should('exist');
       /* cy.get('.clearfix:nth-child(1) > div:nth-child(2) > a').click();
        cy.findByTestId('customerOrderDetails').findByText('Orders for Ted James').should('exist');
        cy.findByTestId('customerOrderDetails').findByText('Basketball').should('exist');
        cy.findByTestId('customerOrderDetails').findByText('$7.99').should('exist');
        cy.findByTestId('customerOrderDetails').findByText('Shoes').should('exist');
        cy.findByTestId('customerOrderDetails').findByText('$199.99').should('exist');
        cy.findByTestId('customerOrderDetails').findByText('$207.98').should('exist');
        cy.findByText('View all Customers').should('exist');*/

    })
})
