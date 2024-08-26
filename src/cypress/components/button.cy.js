import * as React from "react";
import { Button } from "../../src/components/ui/Button";

describe("Button Component", () => {
  it("deve renderizar o botão com o texto correto", () => {
    cy.mount(<Button>Click Me</Button>);
    cy.get("button").should("have.text", "Click Me");
  });
});
