 /// <reference types="cypress" />

describe("My third test suite", () => {
  beforeEach(function () {
    cy.fixture("example").then((bob) => {
      this.user = bob
    })
  })

  it("my third testcase", function() {
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    cy.get("input[name='name']:nth-child(2)").type(this.user.name)
    cy.get("select").select(this.user.gender)
  })
})