export interface Song {
  id: number;
  title: string;
  genre: string;
}

export interface Album {
  id: number;
  title: string;
  releaseYear: number;
  songs: Song[];
}

export interface Artist {
  id: number;
  name: string;
  imageUrl: string;
  genre: string[];
  albums: Album[];
}
