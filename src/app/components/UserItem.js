"use client";
import Link from "next/link";
import { UserCircleIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function UserItem({ user, onDelete }) {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <UserCircleIcon className="h-12 w-12 text-primary-500" />
          <div>
            <Link
              href={`/user/${user._id}`}
              className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors duration-200"
            >
              {user.name}
            </Link>
            <p className="text-sm text-gray-500 mt-1">{user.email}</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <Link
            href={`/update/${user._id}`}
            className="btn btn-secondary flex items-center gap-1 text-sm"
          >
            <PencilIcon className="h-4 w-4" />
            Edit
          </Link>
          <button
            className="btn btn-danger flex items-center gap-1 text-sm"
            onClick={() => onDelete(user._id)}
          >
            <TrashIcon className="h-4 w-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
