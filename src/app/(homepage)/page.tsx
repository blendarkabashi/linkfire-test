import { Suspense } from "react";
import ArtistsList from "./components/ArtistsList";

export default async function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Popular Artists
        </h1>
        <Suspense fallback={<div className="text-black">Loading...</div>}>
          <ArtistsList />
        </Suspense>
      </div>
    </div>
  );
}
