/// <reference types="cypress" />

import HomePage from '../../pages/HomePage'

describe("Page Object Design", () => {
  beforeEach(function () {
    cy.fixture("example").then((data) => {
      this.data = data
    })
  })

  it("Page Object Test", function() {
    const homePage = new HomePage();
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should("have.value", this.data.name)
    homePage.getEntrepreneaur().should("be.disabled")
  })
})