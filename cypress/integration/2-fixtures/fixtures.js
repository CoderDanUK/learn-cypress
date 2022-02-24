 /// <reference types="cypress" />

describe("My third test suite", () => {
  before(() => {
  })

  it("my third testcase", () => {
    cy.fixture("example").then((data) => {
      cy.visit("https://rahulshettyacademy.com/angularpractice/")
      cy.get("input[name='name']:nth-child(2)").type(data.name)
      cy.get("select").select(data.gender)
    })
  })
})