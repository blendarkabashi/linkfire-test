export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[300px] lg:h-[400px] bg-gray-200 animate-pulse">
        <div className="relative z-20 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
            <div className="h-10 w-64 bg-gray-300 rounded-lg mb-4"></div>
            <div className="flex gap-2">
              <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="h-8 w-32 bg-gray-200 rounded mb-6 animate-pulse"></div>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="h-6 w-48 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded mb-6 animate-pulse"></div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((j) => (
                      <div
                        key={j}
                        className="flex justify-between items-center py-2 px-4"
                      >
                        <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <div className="h-8 w-32 bg-gray-200 rounded mb-6 animate-pulse"></div>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <div className="h-4 w-24 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
