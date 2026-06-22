export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0f]">
      <div className="flex flex-col items-center gap-4">
        {/* Spinning bracket animation */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-full" />
          <div className="absolute inset-0 border-2 border-transparent border-t-indigo-500 rounded-full animate-spin" />
          <div className="absolute inset-2 border-2 border-transparent border-t-violet-500 rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }} />
        </div>
        <p className="text-white/40 text-sm font-mono tracking-wider">
          &lt;Loading /&gt;
        </p>
      </div>
    </div>
  );
}
