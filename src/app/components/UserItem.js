"use client";
import Link from "next/link";
import {
  UserCircleIcon,
  PencilIcon,
  TrashIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function UserItem({ user, onDelete }) {
  return (
    <div className="card group">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <UserCircleIcon className="h-14 w-14 text-gray-400 group-hover:text-gray-300 transition-colors" />
            <div className="absolute -bottom-1 -right-1 bg-gray-600 rounded-full w-4 h-4 border-2 border-gray-800"></div>
          </div>
          <div>
            <Link
              href={`/user/${user._id}`}
              className="text-lg font-semibold text-gray-100 hover:text-white transition-colors duration-200"
            >
              {user.name}
            </Link>
            <div className="flex items-center space-x-1 mt-1 text-gray-400">
              <EnvelopeIcon className="h-4 w-4" />
              <p className="text-sm">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-2 pt-2 border-t border-gray-700">
          <Link
            href={`/update/${user._id}`}
            className="btn btn-secondary flex items-center gap-1.5 text-sm px-3 py-1.5"
          >
            <PencilIcon className="h-4 w-4" />
            Edit
          </Link>
          <button
            className="btn btn-danger flex items-center gap-1.5 text-sm px-3 py-1.5"
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
