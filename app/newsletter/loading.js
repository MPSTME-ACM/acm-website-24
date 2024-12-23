export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto py-[10vh] px-6">
      <div className="flex lg:flex-row flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center gap-4 w-full">
          <span className="w-full lg:h-32 h-28 bg-neutral-950 border  border-zinc-200/30 rounded-sm animate-pulse"></span>
          <span className="w-full lg:h-32 h-28 bg-neutral-950 border  border-zinc-200/30 rounded-sm animate-pulse"></span>
          <span className="w-full lg:h-32 h-28 bg-neutral-950 border  border-zinc-200/30 rounded-sm animate-pulse"></span>
          <span className="w-full lg:h-32 h-28 bg-neutral-950 border  border-zinc-200/30 rounded-sm animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}
