describe('Git hub Login',()=>{
    it('Login to GitHub', ()=>{
        cy.visit('https://github.com/login');
        cy.get('#login_field').type("arunk2493");
        cy.get('#password').type("password");
        cy.get('input[value="Sign in"]').click();

    })
})
