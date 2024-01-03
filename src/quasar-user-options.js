import "quasar/dist/quasar.css";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import { Notify } from "quasar";
// To be used on app.use(Quasar, { ... })
export default {
  config: {
    brand: {
      "app-bg": "#F9F9FC",
      "app-logo-text": "#323346",
      "text-heading": "#484964",
      "text-color": "#40415A",
      "app-secondary": "#F2F2F7",
      "text-active": "#5D5FEC",
      hover: "#EBEBF6",
      "btn-bg": "#F1F1F6",
      "btn-text": "#5D5FEC",
      "text-disable": "#9C9DAF",
      "icon-color": "#5D5FEC",
      "faded-text": " #ABACBE",
      "table-border": "#e8ebf4",
      white: "#FFF",
      "dropdown-border": "#9BA2FF",
    },
  },
  plugins: { Notify },
};
