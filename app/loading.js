export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-l-2 border-r-2 border-brand-surface" />
    </div>
  );
}