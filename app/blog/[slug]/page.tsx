import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../lib/posts";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();
  return (
    <article className="prose dark:prose-invert">
      <h1>{post.title}</h1>
      <p className="text-sm">{new Date(post.date).toLocaleDateString("en-US")}</p>
      <div className="whitespace-pre-wrap">{post.content}</div>
    </article>
  );
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}
