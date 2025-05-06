import { Artist } from "@/types/types";

export const artists: Artist[] = [
  {
    id: 1,
    name: "Taylor Swift",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png",
    genre: ["Pop", "Country Pop"],
    albums: [
      {
        id: 1,
        title: "Red (Taylor's Version)",
        releaseYear: 2021,
        songs: [
          { id: 101, title: "State of Grace", genre: "Pop" },
          { id: 102, title: "Red", genre: "Pop" },
          { id: 103, title: "All Too Well", genre: "Pop" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "The Weeknd",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/The_Weeknd_Cannes_2023.png",
    genre: ["R&B", "Pop"],
    albums: [
      {
        id: 2,
        title: "After Hours",
        releaseYear: 2020,
        songs: [
          { id: 201, title: "Blinding Lights", genre: "Pop/R&B" },
          { id: 202, title: "Save Your Tears", genre: "Pop/R&B" },
          { id: 203, title: "After Hours", genre: "Pop/R&B" },
        ],
      },
    ],
  },
];
