import axios from 'axios';

type Geo = {
    lat: string;
    lng: string;
  };
  
  type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  };
  
  type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  
  export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  };
  
  export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

export const getUsers = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  console.log(response);
  return response.data as Array<User>;
};

export const getPosts = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  console.log(response);
  return response.data as Array<Post>;
};
