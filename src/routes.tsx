import { createStackRouter } from "stack-nav";

export type Routes = {
  welcome: undefined;
  quick_setup: undefined;
  vanilla_setup: undefined;
  mods_setup: undefined;
};

export const useNav = createStackRouter<Routes>("welcome");
