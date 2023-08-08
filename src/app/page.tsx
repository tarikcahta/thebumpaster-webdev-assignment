'use client';
import axios from 'axios';
import { Header } from './components/Header';
import Users from './components/Users';
import { useState, useEffect } from 'react';
import PageFooter from './components/PageFooter';

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

export default function Home() {
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="min-h-screen max-w-screen bg-slate-600 flex flex-col justify-between items-center ">
      <Header />
      <div className="w-[80%]">
        <Users users={users} />
      </div>
      <PageFooter />
    </div>
  );
}

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
