import { User } from '../requests';
import { SingleUser } from './User';

type UsersProps = {
  users: User[];
};

const Users = ({ users }: UsersProps) => {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 mt-12 mb-12 ">
      {users.map((user) => (
        <SingleUser key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
