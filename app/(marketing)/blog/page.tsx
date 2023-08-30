import React from 'react'
import PostList from './PostList'

const posts = [
  {
    id: '1',
    slug: '1',
    title: 'post1',
  },
  {
    id: '2',
    slug: '2',
    title: 'post2',
  },
]

const Blog = () => {
  console.log('first')
  return (
    <>
      <h3>Blog</h3>
      <PostList posts={posts} />
    </>
  )
}

export default Blog
