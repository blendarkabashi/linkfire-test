import { Suspense } from "react";
import Loading from "./loading";
import ArtistDetails from "./components/ArtistDetails";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ArtistDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <ArtistDetails id={id} />
    </Suspense>
  );
}
