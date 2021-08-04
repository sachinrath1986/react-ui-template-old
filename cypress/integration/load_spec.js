describe("load home page", () => {
  it("Visits the home page and close the side bar", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(2000);
    cy.get(".brand--toggle").click();
  });
});
