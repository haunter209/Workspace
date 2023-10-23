/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

// Initialization for ES Users
import {
  Collapse,
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Collapse, Ripple });