import "./globals.css";
import SessionWrapper from "./components/SessionWrapper";
import { UserGroupIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Smart User Dashboard",
  description: "Manage users easily with Google Authentication and full CRUD functionality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="min-h-screen flex flex-col">
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="flex items-center space-x-3">
                  <UserGroupIcon className="h-8 w-8 text-primary-600" />
                  <span className="text-xl font-semibold text-gray-900">Smart Users Hub</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <SessionWrapper>{children}</SessionWrapper>
        </main>

        <footer className="bg-white border-t border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              🚀 Powered by Next.js & Google Auth — 2025 © All Rights Reserved
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
