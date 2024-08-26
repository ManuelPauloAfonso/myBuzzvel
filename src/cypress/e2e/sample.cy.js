describe("My First Test", () => {
  it('clicks the link "type"', () => {
    cy.visit("https://my-buzzvel.vercel.app/");
    cy.contains("type").click();
  });
});
