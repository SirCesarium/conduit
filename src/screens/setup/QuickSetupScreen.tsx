import { EntityCard } from "../../components/EntityCard";
import { CenteredLayout } from "../../layouts/CenteredLayout";
import { Divider } from "../../components/Divider";

export const QuickSetupScreen = () => {
  return (
    <CenteredLayout>
      <header className="mb-20 flex flex-col items-center gap-4 text-center w-full">
        <h1 className="text-2xl font-black uppercase tracking-[0.2em] leading-none">
          QUICK SETUP
        </h1>
        <Divider className="mt-4" />
        <p className="text-lg text-white/20 uppercase font-bold tracking-[0.4em] mt-4">
          Placeholder
        </p>
      </header>

      <main className="w-full space-y-4">
        <EntityCard
          title="PLACEHOLDER"
          subtitle="PLACEHOLDER"
          icon="Sparkles"
          onClick={() => {}}
        />
        <EntityCard
          title="PLACEHOLDER"
          subtitle="PLACEHOLDER"
          icon="Box"
          variant="outline"
          onClick={() => {}}
        />
      </main>
    </CenteredLayout>
  );
};
