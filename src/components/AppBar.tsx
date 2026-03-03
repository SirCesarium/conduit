import { Minus, Square, X } from "lucide-react";

export const AppBar = () => (
  <div
    data-tauri-drag-region
    className="fixed top-0 left-0 right-0 h-10 bg-(--bg-top-bar) flex items-center justify-between pl-4 border-b border-white/3 z-50 select-none"
  >
    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 pointer-events-none">
      Conduit
    </span>

    <div className="flex items-center h-full">
      <button
        tabIndex={-1}
        className="h-full w-12 flex items-center justify-center hover:bg-white/5 transition-colors group"
        onClick={() => {}}
      >
        <Minus size={14} className="text-white/40 group-hover:text-white" />
      </button>

      <button
        tabIndex={-1}
        className="h-full w-12 flex items-center justify-center hover:bg-white/5 transition-colors group"
        onClick={() => {}}
      >
        <Square size={12} className="text-white/40 group-hover:text-white" />
      </button>

      <button
        tabIndex={-1}
        className="h-full w-12 flex items-center justify-center hover:bg-[#e81123] transition-colors group"
        onClick={() => {}}
      >
        <X size={16} className="text-white/40 group-hover:text-white" />
      </button>
    </div>
  </div>
);
