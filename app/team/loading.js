export default function Loading() {
  // Function to generate a single skeleton item
  const SkeletonItem = () => (
    <div className="aspect-square bg-neutral-950 border border-zinc-200/30 rounded-md animate-pulse"></div>
  );

  // Generate 6 skeleton items (2 rows for mobile, 3 rows for larger screens)
  const skeletonItems = Array(6)
    .fill(null)
    .map((_, index) => <SkeletonItem key={index} />);

  return (
    <div className="max-w-7xl mx-auto py-[10vh] px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-10">
        {skeletonItems}
      </div>
    </div>
  );
}
