import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getPosts, Post } from '../../app/requests';
import { Posts } from '../../app/components/Posts';
import { Header } from '@/app/components/Header';
import PageFooter from '@/app/components/PageFooter';

const UserPosts = () => {
  const router = useRouter();
  const { userId } = router.query;

  const [userPosts, setUserPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (userId) {
      getPosts().then((posts) => {
        const filteredPosts = posts.filter(
          (post) => post.userId === parseInt(userId as string)
        );
        setUserPosts(filteredPosts);
      });
    }
  }, [userId]);

  return (
    <div className="min-h-screen max-w-screen bg-slate-600 flex flex-col justify-between items-center">
      <Header home="Home" todos="To Dos" about="About" />
      <div className="w-[80%]">
        <Posts posts={userPosts} />
      </div>
      <PageFooter />
    </div>
  );
};

export default UserPosts;
