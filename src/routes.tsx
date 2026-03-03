import { createStackRouter } from "stack-nav";

export type Routes = {
  welcome: undefined;
};

export const useNav = createStackRouter<Routes>("welcome");
