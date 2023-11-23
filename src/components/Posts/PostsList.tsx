'use client'

import { usePathname } from 'next/navigation'
import * as React from 'react'
import useSWR from 'swr'

import { fetcher } from '~/lib/functions'

import { ListContainer } from '../ListDetail/ListContainer'
import { TitleBar } from '../ListDetail/TitleBar'
import { type Post } from './BlogDetail'
//import useSWR from 'swr';
//import LoadingSpinner from '../LoadingSpinner';
import { PostListItem } from './PostListItem'

export const PostsList = ({ posts }: { posts: Post[] }) => {
  const path = usePathname()
  const [scrollContainerRef, setScrollContainerRef] = React.useState(null)

  //** Fetch directly from Sanity Studio through API route */
  /*   const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/posts');
      const fetchedPosts = await res.json();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, [setPosts]); */
  /*   const { data: posts } = useSWR<Post[]>(
    'http://localhost:3000/api/posts',
    fetcher
  )
 */
  /*   const { data: posts } = useQuery<PostPageGroup>({
    queryKey: ['posts'],
    queryFn: async () => await axios.get(`/api/posts`).then((res) => res.data)
  }); */

  return (
    <>
      <ListContainer data-cy="posts-list" onRef={setScrollContainerRef}>
        <TitleBar scrollContainerRef={scrollContainerRef} title="Blog" />

        <div className="lg:space-y-1 lg:p-3">
          {posts &&
            posts
              ?.sort((a, b) => {
                if (new Date(a.date) > new Date(b.date)) {
                  return -1
                }
                return 1
              })
              .map((post) => {
                const active = path === post.slug
                return (
                  <PostListItem key={post.slug} post={post} active={active} />
                )
              })}
        </div>
      </ListContainer>
    </>
  )
}
