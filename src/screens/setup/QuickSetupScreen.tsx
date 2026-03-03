import { CenteredLayout } from "../../layouts/CenteredLayout";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { useNav } from "../../routes";
import { ArrowLeft } from "lucide-react";
import { FeatureCard } from "../../components/FeatureCard";

export const QuickSetupScreen = () => {
  const { goBack, navigate } = useNav("quick_setup");

  return (
    <CenteredLayout className="max-w-6xl">
      <header className="mb-20 flex flex-col items-center gap-4 text-center w-full">
        <div className="fixed top-14 left-4">
          <Button variant="ghost" onClick={goBack}>
            <ArrowLeft />
            BACK
          </Button>
        </div>

        <h1 className="text-3xl font-black uppercase tracking-[0.2em]">
          QUICK SETUP
        </h1>
        <Divider className="mt-4" />
        <p className="text-lg text-white/20 uppercase font-bold mt-4">
          Select your gameplay environment
        </p>
      </header>
      <main className="flex flex-row gap-6 w-full">
        <FeatureCard
          title="Vanilla"
          subtitle="The classic experience"
          icon="Pickaxe"
          color="#bef264" // Lime
          onClick={() => navigate("vanilla_setup")}
        />
        <FeatureCard
          title="Plugins"
          subtitle="Play with friends using extra tools and commands"
          icon="Zap"
          color="#fb923c" // Orange
          onClick={() => {}}
        />
        <FeatureCard
          title="Mods"
          subtitle="Add new items, creatures, and adventures"
          icon="Box"
          color="#ef4444" // Red
          onClick={() => navigate("mods_setup")}
        />
      </main>
    </CenteredLayout>
  );
};
