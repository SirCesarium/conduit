import { EntityCard } from "../components/EntityCard";
import { useNav } from "../routes";
import { CenteredLayout } from "../layouts/CenteredLayout";
import { Divider } from "../components/Divider";

export const LandingScreen = () => {
  const { navigate } = useNav("welcome");

  return (
    <CenteredLayout>
      <header className="mb-20 flex flex-col items-center gap-4 text-center w-full">
        <h1 className="text-7xl font-black uppercase tracking-[0.2em] leading-none">
          CONDUIT
        </h1>
        <Divider className="mt-4" />
        <p className="text-lg text-white/20 uppercase font-bold tracking-[0.4em] mt-4">
          Create your first instance
        </p>
      </header>

      <main className="w-full space-y-4">
        <EntityCard
          title="Guided Setup"
          subtitle="Quick step by step guide"
          icon="Sparkles"
          onClick={() => navigate("quick_setup")}
        />
        <EntityCard
          title="Advanced Setup"
          subtitle="Manual configuration"
          icon="Box"
          variant="outline"
          onClick={() => {}}
        />
      </main>
    </CenteredLayout>
  );
};
