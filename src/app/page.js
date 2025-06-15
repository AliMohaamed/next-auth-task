"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import UserItem from "./components/UserItem";

import {
  PlusCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";


export default function Home() {
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const handleDelete = async (id) => {
    await fetch("/api/users/" + id, { method: "DELETE" });
    setUsers(users.filter((u) => u._id !== id));
  };

  if (!session)
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8 text-center">

          <div className="space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-gray-600">
            </p>
          </div>
          <button
            className="btn btn-primary w-full flex items-center justify-center gap-2"
            onClick={() => signIn("google")}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );

  return (

    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white-900">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {session.user.name}
            </span>
          </h1>
          <p className="mt-2 text-gray-600">
            Manage your users and their information
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/add"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <PlusCircleIcon className="h-5 w-5" />
            Add New User
          </Link>
          <button
            className="btn btn-secondary flex items-center gap-2"
            onClick={() => signOut()}
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            Logout
          </button>
        </div>
      </div>

      {users.length === 0 ? (
        <div className="card text-center py-12">
          <div className="space-y-4">
            <p className="text-gray-500 text-lg">No users found</p>
            <Link
              href="/add"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <PlusCircleIcon className="h-5 w-5" />
              Add Your First User
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {users.map((u) => (
            <UserItem key={u._id} user={u} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
