import { create } from "@storybook/theming";
import { addons } from "@storybook/addons";

const theme = create({
  brandTitle: "Justin's UI",
});

addons.setConfig({
  theme,
});
