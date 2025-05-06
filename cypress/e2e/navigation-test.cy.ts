describe("Artist Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should navigate to artist detail page when clicking on an artist", () => {
    cy.get('[data-testid="artist-card"]').first().click();

    cy.url().should("include", "/artist/");
    cy.get('[data-testid="artist-detail-name"]').should("exist");
  });
});
