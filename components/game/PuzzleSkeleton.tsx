export function PuzzleSkeleton() {
  return (
    <div aria-busy="true" className="py-8">
      <p className="sr-only" role="status">
        Loading today&apos;s puzzle…
      </p>
      <div aria-hidden="true" className="animate-pulse space-y-6">
        <div className="grid grid-cols-5 gap-2">
          {[0, 1, 2, 3, 4].map((index) => (
            <div key={index} className="h-14 rounded-md bg-rule/50" />
          ))}
        </div>
        <div className="h-3 w-40 rounded bg-rule/60" />
        <div className="h-8 w-4/5 rounded bg-rule/60" />
        <div className="h-24 rounded bg-rule/40" />
        <div className="space-y-3">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="h-14 rounded-md bg-rule/40" />
          ))}
        </div>
      </div>
    </div>
  );
}
