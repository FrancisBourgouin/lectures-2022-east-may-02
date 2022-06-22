/// <reference types="cypress" />

describe("Weather MVP features", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should not show the weather component on first load", () => {
    cy.get("header").should("exist");
    cy.get("section.Weather").should("not.exist");
  });
  it("should show the weather component when a valid city is submitted", () => {
    cy.get("input").type("Montréal");
    cy.get("form button").click();
    cy.get("section.Weather").should("exist");
  });
  it("should not show the weather component when an invalid city is submitted", () => {
    cy.get("input").type("Wiggle Wiggle Yeah");
    cy.get("form button").click();
    cy.get("section.Weather").should("not.exist");
  });
  it("should show the weather when clicking on a button", () => {
    cy.get("input").type("Ottawa{enter}");
    cy.get("input").type("London{enter}");

    cy.get("ul li").should("have.length", 2);

    cy.get("ul li.Ottawa").click();

    cy.get("section.Weather h1").should("have.text", "Weather for Ottawa");
  });
  it("should show only one button if a city is entered twice", () => {
    cy.get("input").type("Montréal{enter}");
    cy.get("input").type("Montréal{enter}");

    cy.get("ul li").should("have.length", 1);
  });
});
