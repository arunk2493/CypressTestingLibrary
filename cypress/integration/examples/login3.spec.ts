import {configure} from "@testing-library/cypress";

describe('Git hub Login Testing Library',()=>{
    it('Login to GitHub Testing Library', ()=>{
        cy.visit('https://github.com/login');
        cy.findByLabelText('Username or email address').should('exist');
        cy.findByDisplayValue('Sign in').should('exist');
        /*cy.get('#login_field').type("arunk2493");
        cy.get('#password').type("password");
        cy.get('input[value="Sign in"]').click();
        const a = cy.get('.flash >div').contains('Incorrect username or password.')
        console.log(a);*/
    })
})
