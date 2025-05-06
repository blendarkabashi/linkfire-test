import { artists } from "@/libs/data";
import { getTotalSongs } from "@/utils/global-functions";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface ArtistDetailsProps {
  id: string;
}

async function getArtist(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); //simulate api call

  //   if i wanted to make this call client side, i would use useQuery similar to this: const { isPending, error, data: post } = useArtistById(id);

  const artist = artists.find((artist) => artist.id === Number(id));
  // const artist = useArtistsStore.getState().getArtistById(Number(id)); // this is how i would fetch the artist from the store, but i wouldnt recommend this approach, just an illustration of zustand store usage
  return artist;
}

const ArtistDetails = async ({ id }: ArtistDetailsProps) => {
  const artist = await getArtist(id);
  if (!artist) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[300px] lg:h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10" />
        <Image
          src={artist.imageUrl}
          alt={artist.name}
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {artist.name}
            </h1>
            <div className="flex gap-2">
              {artist.genre.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Albums</h2>
            <div className="grid grid-cols-1 gap-6">
              {artist.albums.map((album) => (
                <div
                  key={album.id}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {album.title}
                      </h3>
                      <p className="text-gray-500">{album.releaseYear}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {album.songs.map((song, index) => (
                      <div
                        key={song.id}
                        className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-gray-400 w-6">{index + 1}</span>
                          <span className="text-gray-900">{song.title}</span>
                        </div>
                        <span className="text-sm text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                          {song.genre}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Artist Info
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Total Albums
                  </h3>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">
                    {artist.albums.length}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Total Songs
                  </h3>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">
                    {getTotalSongs(artist)}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Genres</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {artist.genre.map((genre) => (
                      <span
                        key={genre}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;
