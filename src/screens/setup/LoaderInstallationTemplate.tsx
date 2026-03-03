import { useState } from "react";
import { CenteredLayout } from "../../layouts/CenteredLayout";
import { Button } from "../../components/Button";
import { ArrowLeft, Search, Check } from "lucide-react";
import { useNav } from "../../routes";
import { motion } from "framer-motion";
import { Divider } from "../../components/Divider";

interface LoaderOption {
  id: string;
  name: string;
  description: string;
}

interface TemplateProps {
  title: string;
  accentColor: string;
  options: LoaderOption[];
  versions: string[];
}

export const LoaderInstallationTemplate = ({
  title,
  accentColor,
  options,
  versions,
}: TemplateProps) => {
  const { goBack } = useNav();
  const [selectedLoader, setSelectedLoader] = useState(options[0]?.id);
  const [selectedVersion, setSelectedVersion] = useState(versions[0]);
  const [search, setSearch] = useState("");

  const filteredVersions = versions.filter((v) =>
    v.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <CenteredLayout className="max-w-6xl h-full flex flex-col">
      <header className="mb-10 flex flex-col items-center gap-2 text-center w-full">
        <div className="fixed top-14 left-4">
          <Button variant="ghost" onClick={goBack}>
            <ArrowLeft size={18} /> BACK
          </Button>
        </div>
        <h1 className="text-2xl font-black uppercase tracking-[0.3em]">
          {title}
        </h1>
        <Divider />
      </header>

      <main className="grid grid-cols-2 gap-40 flex-1 overflow-hidden min-h-125 w-full">
        {/* LADO IZQUIERDO: SELECTOR DE LOADER */}
        <div className="flex flex-col gap-4">
          <span className="text-[12px] font-black text-white/20 uppercase tracking-[0.2em]">
            Select Loader
          </span>
          <div className="flex flex-col gap-3">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedLoader(opt.id)}
                className={`group relative p-6 rounded-2xl border text-left transition-all duration-300 ${
                  selectedLoader === opt.id
                    ? "bg-white/5 border-white/20"
                    : "bg-white/1 border-white/5 hover:border-white/10"
                }`}
              >
                <div className="relative z-10 flex flex-col gap-1">
                  <h3
                    className={`font-bold transition-colors ${selectedLoader === opt.id ? "text-white" : "text-white/40 group-hover:text-white/60"}`}
                  >
                    {opt.name}
                  </h3>
                  <p className="text-xs text-white/40 font-medium">
                    {opt.description}
                  </p>
                </div>
                {selectedLoader === opt.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                    style={{ backgroundColor: accentColor }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* LADO DERECHO: SELECTOR DE VERSIÓN */}
        <div className="flex flex-col gap-4 overflow-hidden">
          <span className="text-[12px] font-black text-white/20 uppercase tracking-[0.2em]">
            Select Version
          </span>
          <div className="flex flex-col flex-1 bg-white/2 border border-white/5 rounded-3xl overflow-hidden">
            {/* Search Bar */}
            <div className="p-4 border-b border-white/5 flex items-center gap-3 bg-white/1">
              <Search size={16} className="text-white/20" />
              <input
                type="text"
                placeholder="Search versions..."
                className="bg-transparent border-none outline-none text-sm font-mono w-full text-white placeholder:text-white/10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
              <div className="flex flex-col gap-1">
                {filteredVersions.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVersion(v)}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                      selectedVersion === v
                        ? "bg-white/5 text-white"
                        : "text-white/30 hover:bg-white/3 hover:text-white/60"
                    }`}
                  >
                    <span className="font-mono text-sm">{v}</span>
                    {selectedVersion === v && (
                      <Check size={14} style={{ color: accentColor }} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <footer className="mt-8 flex justify-center">
        <Button
          className="w-64"
          onClick={() =>
            console.log("Install", { selectedLoader, selectedVersion })
          }
        >
          CONTINUE
        </Button>
      </footer> */}
    </CenteredLayout>
  );
};
