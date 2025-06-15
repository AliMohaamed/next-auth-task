import "./globals.css";
import SessionWrapper from "./components/SessionWrapper";
import {
  UserGroupIcon,
  HomeIcon,
  UserPlusIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata = {
  title: "UserHub Pro - Modern User Management",
  description:
    "A powerful user management system with Google Authentication and full CRUD functionality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="min-h-screen flex flex-col"
      >
        <nav className="bg-gray-800/80 border-b border-gray-700 sticky top-0 z-50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="flex items-center justify-between p-6   space-x-8">
                <Link href="/" className="flex items-center space-x-3 group">
                  <span className="text-xl font-bold text-white">
                    UserHub Pro
                  </span>
                </Link>
                <div className="hidden md:flex items-center space-x-6 back">
                  <Link
                    href="/"
                    className="nav-link flex items-center space-x-1.5 hover:text-blue-600"
                  >
                    <HomeIcon className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    href="/add"
                    className="nav-link flex items-center space-x-1.5 hover:text-blue-600"
                  >
                    <UserPlusIcon className="h-5 w-5" />
                    <span>Add User</span>
                  </Link>
                  <Link
                    href="/analytics"
                    className="nav-link flex items-center space-x-1.5 hover:text-blue-600"
                  >
                    <ChartBarIcon className="h-5 w-5" />
                    <span>Analytics</span>
                  </Link>
                </div>
              </div>
       
          </div>
        </nav>

        <main className="flex-grow">
          <SessionWrapper>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </SessionWrapper>
        </main>
      </body>
    </html>
  );
}
