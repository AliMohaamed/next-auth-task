"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { createUser } from "../actions/userActions";
import { FaUserPlus, FaEnvelope, FaUser, FaCheckCircle } from "react-icons/fa";

export default function AddUserPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
  }, [status, router]);

  const handleAdd = async () => {
    if (!form.name || !form.email) {
      return alert("Please fill in all fields.");
    }

    setLoading(true);
    try {
      await createUser(form);
      router.push("/");
    } catch (err) {
      alert("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-400 mx-auto"></div>
          <p className="mt-4 text-gray-400">Checking session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="card w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-4">
            <FaUserPlus className="w-8 h-8 text-gray-300" />
          </div>
          <h3 className="text-2xl font-bold text-gray-100">Add New User</h3>
          <p className="text-gray-400 mt-2">
            Fill in the details below to create a new user
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="flex items-center gap-2 text-gray-300 mb-2">
              <FaUser className="w-4 h-4" /> Name
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter user's full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-300 mb-2">
              <FaEnvelope className="w-4 h-4" /> Email
            </label>
            <input
              type="email"
              className="input-field"
              placeholder="Enter user's email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <button
            className="btn btn-primary w-full flex items-center justify-center gap-2"
            onClick={handleAdd}
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                <span>Adding...</span>
              </>
            ) : (
              <>
                <FaCheckCircle className="w-5 h-5" />
                <span>Add User</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
