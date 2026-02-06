class everyonePage {
    selectorlist(){
        const selectors = {
            EveryoneSelected: "[aria-selected='true']"
        }

        return selectors
    }

    checkEveryonePage() {
        cy.get(this.selectorlist().EveryoneSelected).should('be.visible')
    }


}

export default everyonePage;