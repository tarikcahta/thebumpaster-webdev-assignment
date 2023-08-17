'use client';
import { Header } from '@/app/components/Header';
import PageFooter from '@/app/components/PageFooter';
import Users from '@/app/components/Users';
import { useState, useEffect } from 'react';
import { getUsers, User } from '@/app/requests';
import '../styles/globals.css';

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
