import { Notify } from "quasar";

export const showSnackBar = (success, message) => {
  Notify.create({
    message: `<span style="color: ${
      success === true ? "green; " : "red; "
    }font-weight: 500">${message}</span>`,
    color: "white",
    textColor: "white",
    icon: success === true ? "done" : "error",
    iconColor: success === true ? "green" : "red",
    type: success === true ? "positive" : "negative",
    html: true,
    position: "bottom",
  });
};
