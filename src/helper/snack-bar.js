import { Notify } from "quasar";

export const showSnackBar = (status, message) => {
  Notify.create({
    message: `<span style="color: ${
      status === true ? "green; " : "red; "
    }font-weight: 500">${message}</span>`,
    color: "white",
    textColor: "white",
    icon: status === true ? "done" : "error",
    iconColor: status === true ? "green" : "red",
    type: status === true ? "positive" : "negative",
    html: true,
    position: "bottom",
  });
};
