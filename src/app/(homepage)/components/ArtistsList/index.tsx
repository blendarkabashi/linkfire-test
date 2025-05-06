import { artists } from "@/libs/data";
import { useArtistsStore } from "@/store/useArtistsStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getArtists() {
  // Simulate API call
  // const response = await fetch('https://api.example.com/artists');
  // const data = await response.json();
  // return data;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  useArtistsStore.setState({ artists });
  return artists;
}
const ArtistsList = async () => {
  const artists = await getArtists();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {artists.map((artist) => (
        <Link
          href={`/artist/${artist.id}`}
          key={artist.id}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
        >
          <div className="aspect-square relative overflow-hidden rounded-t-lg">
            <Image
              src={artist.imageUrl}
              alt={artist.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {artist.name}
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {artist.genre.map((genre) => (
                <span
                  key={genre}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-500">
              {artist.albums.length}{" "}
              {artist.albums.length === 1 ? "album" : "albums"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArtistsList;
