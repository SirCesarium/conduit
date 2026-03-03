import { LoaderInstallationTemplate } from "../LoaderInstallationTemplate";

export const VanillaSetup = () => (
  <LoaderInstallationTemplate
    title="Server Configuration"
    accentColor="#bef264"
    options={[
      {
        id: "official",
        name: "Minecraft Java Edition",
        description: "Vanilla Minecraft server",
      },
      {
        id: "geyser-mc",
        name: "Geyser",
        description: "Crossplay between Minecraft Java & Bedrock",
      },
    ]}
    versions={[
      "1.21.11",
      "1.21.1",
      "1.21",
      "1.20.6",
      "1.20.4",
      "1.20.1",
      "1.19.4",
      "1.19.2",
      "1.18.2",
      "1.17.1",
      "1.16.5",
      "1.15.2",
      "1.14.4",
      "1.13.2",
      "1.12.2",
      "1.11.2",
      "1.10.2",
      "1.8.9",
    ]}
  />
);
