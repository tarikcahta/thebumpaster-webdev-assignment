import { User } from '../page';
import { Card } from 'flowbite-react';

type SingleUserProps = {
  user: User;
};

export const SingleUser = ({ user }: SingleUserProps) => {
  return (
    <Card className="max-w-sm bg-gray-700 hover:bg-gray-800" href="#">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{user.name}</p>
      </h5>
      <p className="font-normal text-gray-500 dark:text-gray-400">
        <p>{user.website}</p>
      </p>
    </Card>
  );
};
