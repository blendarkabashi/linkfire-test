/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import ArtistDetails from ".";
import "@testing-library/jest-dom";
import { artists } from "@/libs/data";
import { getTotalSongs } from "@/utils/global-functions";
import { Artist } from "@/types/types";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} alt={props.alt || "image"} />,
}));

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

describe("ArtistDetails - simple tests", () => {
  it("renders the artist name", async () => {
    const artist = artists[0];
    const Component = await ArtistDetails({ id: String(artist.id) });

    render(Component);

    expect(await screen.findByText(artist.name)).toBeInTheDocument();
  });
  it("returns the correct total number of songs for an artist", () => {
    const mockArtist: Artist = {
      id: 1,
      name: "Mock Artist",
      imageUrl: "/mock.jpg",
      genre: ["Pop"],
      albums: [
        {
          id: 1,
          title: "Album One",
          releaseYear: 2020,
          songs: [
            { id: 1, title: "Song A", genre: "Pop" },
            { id: 2, title: "Song B", genre: "Pop" },
          ],
        },
        {
          id: 2,
          title: "Album Two",
          releaseYear: 2021,
          songs: [{ id: 3, title: "Song C", genre: "Pop" }],
        },
      ],
    };

    const total = getTotalSongs(mockArtist);
    expect(total).toBe(3);
  });
});
