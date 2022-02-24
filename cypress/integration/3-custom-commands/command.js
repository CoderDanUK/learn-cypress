/// <reference types="cypress" />

describe("Custom Commands Suite", () => {
  beforeEach(function () {
    cy.fixture("example").then((bob) => {
      this.user = bob
    })
  })

  it("Custom Command Test", function() {
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    cy.get(":nth-child(2) > .nav-link").click()
    cy.selectProduct("Blackberry")
  })
})