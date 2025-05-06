import { Artist } from "@/types/types";
import { create } from "zustand";

type ArtistsStore = {
  artists: Artist[];
  getArtistById: (id: number) => Artist | undefined;
};

export const useArtistsStore = create<ArtistsStore>((set, get) => ({
  artists: [],
  getArtistById: (id) => {
    return get().artists.find((artist) => artist.id === id);
  },
}));
