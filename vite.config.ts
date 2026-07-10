import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import panda from "@pandacss/vite";

export default defineConfig({
  plugins: [react(), panda()],
});
