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
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
         <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}