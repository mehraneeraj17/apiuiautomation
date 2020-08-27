describe('website', function () {
    it('abe', function () {
        cy.visit("https://core.rupeek.com/signin");
        cy.contains('this page').click()

        cy.url().should('include', '/login')

        cy.get('#mobile-number').type('7022996644').should('have.value', '7022996644')
    })

    // it("second test ", function(){
    //       cy.visit("www.google.com");
    // })

})