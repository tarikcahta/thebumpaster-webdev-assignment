'use client';
import { Card } from 'flowbite-react';
import { Post } from '../requests';

type SinglePostProps = {
  post: Post;
};

export const SinglePost = ({ post }: SinglePostProps) => {
  return (
    <Card className="max-w-sm bg-gray-700 hover:bg-gray-800">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{post.title}</p>
      </h5>
      <p className="font-normal text-gray-500 dark:text-gray-400">
        {post.body}
      </p>
    </Card>
  );
};
