describe("My First Test", () => {
  it('clicks the link "type"', () => {
    cy.visit("https://my-buzzvel.vercel.app/m");
    cy.contains("type").click();
  });
});
