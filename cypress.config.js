import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
module.exports = {
  e2e: {
    supportFile: false, 
  },
};
