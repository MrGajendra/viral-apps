"use client";

import { useRouter } from "next/navigation";

export default function ResultCard({ score }) {
  const router = useRouter();

  return (
    <div className="bg-white p-10 rounded-2xl shadow-xl text-center w-full max-w-md">
      <h1 className="text-4xl font-bold mb-4">
        Quiz Finished 🎉
      </h1>

      <p className="text-2xl mb-6">
        Your Score: {score}
      </p>

      <button
        onClick={() => router.push("/quiz")}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
      >
        Play Again
      </button>
    </div>
  );
}