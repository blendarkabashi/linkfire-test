import { Artist } from "@/types/types";
import { api } from "./axios";

export const getArtists = async (): Promise<Artist[]> => {
  const { data } = await api.get("https://placeholderapi.com");
  return data;
};
