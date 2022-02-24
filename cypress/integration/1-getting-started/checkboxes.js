/// <reference types="cypress" />

describe("My second test suite", () => {
  it("my second testcase", () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get("#checkBoxOption1").check()
        .should("be.checked")
        .and("have.value", "option1")

      cy.get("[type='checkbox']").each(($el, i, $list) => {
        cy.wrap($el)
          .check()
          .should("be.checked")
          .and("have.value", `option${(i + 1)}`)
          .uncheck()
      })

      cy.get("[type='checkbox']")
        .check(["option1", "option2"])
  })
})