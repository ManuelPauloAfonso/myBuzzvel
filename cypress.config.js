import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    specPattern: "src/cypress/components/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
  },
});
