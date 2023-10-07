import * as React from "react"
import { useRouter } from "next/router"
import yespls from "~/lib/functions/yespls"
import useSWR from "swr"

import { ListContainer } from "../ListDetail/ListContainer"
import { TitleBar } from "../ListDetail/TitleBar"
import { type Post } from "./BlogDetail"
//import useSWR from 'swr';
//import LoadingSpinner from '../LoadingSpinner';
import { PostListItem, type PostPage } from "./PostListItem"

export type PostPageGroup = {
  map(arg0: (post: PostPage) => JSX.Element): import("react").ReactNode
  posts: Array<PostPage>
}
export const PostsList = () => {
  const router = useRouter()
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
  const { data: posts } = useSWR<Post[]>("/api/posts", yespls)

  /*   const { data: posts } = useQuery<PostPageGroup>({
    queryKey: ['posts'],
    queryFn: async () => await axios.get(`/api/posts`).then((res) => res.data)
  }); */

  return (
    <>
      <ListContainer data-cy="posts-list" onRef={setScrollContainerRef}>
        <TitleBar scrollContainerRef={scrollContainerRef} title="Blog" />

        <div className="lg:space-y-1 lg:p-3">
          {posts
            ?.sort((a, b) => {
              if (new Date(a.date) > new Date(b.date)) {
                return -1
              }
              return 1
            })
            .map((post) => {
              const active = router.query?.slug === post.slug

              return (
                <PostListItem key={post.slug} post={post} active={active} />
              )
            })}
        </div>
      </ListContainer>
    </>
  )
}
