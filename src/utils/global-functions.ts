import { Artist } from "@/types/types";

export const getTotalSongs = (artist: Artist): number => {
  return artist.albums.reduce((acc, album) => acc + album.songs.length, 0);
};
