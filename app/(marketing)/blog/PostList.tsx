import Link from 'next/link'

interface Post {
  id: string
  slug: string
  title: string
}

interface PostListProps {
  posts: Post[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
