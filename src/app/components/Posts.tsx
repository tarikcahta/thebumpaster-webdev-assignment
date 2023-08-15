// import { useRouter } from 'next/router';
import { Post } from '../requests';
import { SinglePost } from './Post';

type PostsProps = {
  posts: Post[];
};

export const Posts = ({ posts }: PostsProps) => {
  // const router = useRouter();
  // const { userId } = router.query;

  console.log('Posts prop in Posts:', posts);
  return (
    <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 mt-12 mb-12">
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </div>
  );
};
