import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-4 w-full max-w-2xl" />
        </div>

        {/* Filter Buttons Skeleton */}
        <div className="flex gap-2 flex-wrap">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-10 w-24" />
          ))}
        </div>

        {/* Project Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-4 space-y-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="flex gap-2">
                  {[1, 2, 3].map((j) => (
                    <Skeleton key={j} className="h-6 w-16" />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-9 w-24" />
                  <Skeleton className="h-9 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 