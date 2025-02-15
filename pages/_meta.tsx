import DemoLink from "@components/demo-link";

const newTag = <span className="sidebar-title new">New</span>;

export default {
  "demo-apk": {
    type: "separator",
    title: <DemoLink />,
  },
  "getting-started-section": {
    title: "Getting Started",
    type: "separator",
  },

  index: "Introduction",
  setup: "Setup and configuration",
  composables: "Composables",
  "kmp-support": "Kotlin Multiplatform",
  cli: "CLI",
  changelog: {
    title: "Changelog",
    href: "https://github.com/nomanr/lumo-ui/releases",
    newWindow: true,
  },

  "components-section": {
    title: "Components",
    type: "separator",
  },

  accordion: "Accordion",
  "alert-dialog": "Alert Dialog",
  badge: "Badge",
  button: "Button",
  card: "Card",
  checkbox: "Checkbox",
  chip: "Chip",
  divider: "Divider",
  icon: "Icon",
  "icon-button": "Icon Button",
  "modal-bottomsheet": "Modal Bottom Sheet",
  "navigation-bar": "Navigation Bar",
  "otp-textfield": "OTP Text Field",
  "progress-indicators": "Progress Indicators",
  "radio-button": "Radio Button",
  scaffold: "Scaffold",
  slider: "Slider",
  snackbar: "Snackbar",
  surface: "Surface",
  switch: "Switch",
  text: "Text",
  textfield: "Text Field",
  tooltip: "Tooltip",
  topbar: "Top Bar",
};
