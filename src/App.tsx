import { RouterView } from "stack-nav";
import { Routes, useNav } from "./routes";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { AppBar } from "./components/AppBar";

import { LandingScreen } from "./screens/LandingScreen";
import { QuickSetupScreen } from "./screens/setup/QuickSetupScreen";
import { VanillaSetup } from "./screens/setup/vanilla/VanillaSetup";
import { ModsSetup } from "./screens/setup/mods/ModsSetup";

export const App = () => {
  const { currentScreen } = useNav();

  return (
    <main className="h-screen flex flex-col bg-(--bg-main) text-white overflow-hidden pt-10">
      <AppBar />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex-1 w-full overflow-hidden"
        >
          <RouterView<Routes>
            currentScreen={currentScreen}
            screens={{
              welcome: () => <LandingScreen />,
              quick_setup: () => <QuickSetupScreen />,
              vanilla_setup: () => <VanillaSetup />,
              mods_setup: () => <ModsSetup />,
            }}
          />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};
