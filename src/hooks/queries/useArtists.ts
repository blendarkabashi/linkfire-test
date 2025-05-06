import { useQuery } from "@tanstack/react-query";
import { Artist } from "@/types/types";
import { getArtists } from "@/libs/api";

export const useArtists = () => {
  return useQuery<Artist[]>({
    queryKey: ["artists"],
    queryFn: async () => {
      const response = await getArtists();
      if (!response) {
        throw new Error("No data received");
      }
      return response;
    },
  });
};
