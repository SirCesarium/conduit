import { LoaderInstallationTemplate } from "../LoaderInstallationTemplate";

export const ModsSetup = () => (
  <LoaderInstallationTemplate
    title="Server Configuration"
    accentColor="#ef4444"
    options={[
      {
        id: "neoforge",
        name: "NeoForge",
        description:
          "The new standard. Best for modern modpacks from 1.21+.",
      },
      {
        id: "fabric",
        name: "Fabric",
        description: "Lightweight engine. Ideal for lightweight servers.",
      },
      {
        id: "forge",
        name: "Forge",
        description:
          "Legacy engine. Only recommended for older versions and classic modpacks.",
      },
    ]}
    versions={[
      "1.21.11",
      "1.21.1",
      "1.21",
      "1.20.6",
      "1.20.4",
      "1.20.2",
    ]}
  />
);
