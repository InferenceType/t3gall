import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockURLs = [
  "https://utfs.io/f/1c6f2d1a-e497-4342-8a0a-2e06ae1c4270-qwjwrt.jpg",
  "https://utfs.io/f/c4921e54-1e86-4266-86e0-2b81cc1a80dd-lkwtv9.jpeg"
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy:(model , {desc}) => desc(model.id)
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image) => (
          <div key={image.id} className="w-48 flex flex-col justify-center">
            <img src={image.url}/>
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}