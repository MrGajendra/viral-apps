"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const searchParams = useSearchParams();

  const router = useRouter();

  const [studentData, setStudentData] =
    useState(null);

  const score = Number(
    searchParams.get("score") || 0
  );

  const total = Number(
    searchParams.get("total") || 1
  );

  const percentage = Math.round(
    (score / total) * 100
  );

  useEffect(() => {
    const data = localStorage.getItem(
      "studentData"
    );

    if (data) {
      setStudentData(JSON.parse(data));
    }
  }, []);


  const getGrade = () => {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= 50) return "D";

    return "F";
  };

  return (
    <main className="min-h-screen bg-[#F1F5F9]">

      {/* STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-[#0068A9] border-b-4 border-[#1D4ED8] shadow-xl">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* LEFT */}
            <div>

              <h1 className="text-2xl sm:text-4xl font-bold text-white">
                Examination Result
              </h1>

              <p className="text-slate-300 mt-1 text-sm sm:text-base">
                Vishal Mega Mart Security Guard Recruitment
              </p>

            </div>

            {/* RIGHT */}
            <div
              className={`px-6 py-4 rounded-2xl text-center shadow-lg ${
                percentage >= 50
                  ? "bg-[#16A34A]"
                  : "bg-[#DC2626]"
              }`}
            >

              <p className="text-white/80 text-sm">
                Final Status
              </p>

              <h2 className="text-white text-2xl font-bold">
                {percentage >= 50
                  ? "PASS"
                  : "FAIL"}
              </h2>

            </div>

          </div>

        </div>

      </header>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">

        {/* TOP RESULT CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

          {/* SCORE */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 text-center">

            <p className="text-slate-500 text-sm mb-3">
              Total Score
            </p>

            <h2 className="text-4xl font-bold text-[#1D4ED8]">
              {score}/{total}
            </h2>

          </div>

          {/* PERCENTAGE */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 text-center">

            <p className="text-slate-500 text-sm mb-3">
              Percentage
            </p>

            <h2 className="text-4xl font-bold text-[#16A34A]">
              {percentage}%
            </h2>

          </div>

          {/* GRADE */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 text-center">

            <p className="text-slate-500 text-sm mb-3">
              Grade
            </p>

            <h2 className="text-4xl font-bold text-[#CA8A04]">
              {getGrade()}
            </h2>

          </div>

          {/* STATUS */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 text-center">

            <p className="text-slate-500 text-sm mb-3">
              Result Status
            </p>

            <h2
              className={`text-3xl font-bold ${
                percentage >= 50
                  ? "text-[#16A34A]"
                  : "text-[#DC2626]"
              }`}
            >
              {percentage >= 50
                ? "PASS"
                : "FAIL"}
            </h2>

          </div>

        </div>

        {/* MESSAGE */}
        <div className="bg-white rounded-[32px] border border-slate-200 shadow-lg p-8 sm:p-10 mb-8 text-center">

          {percentage >= 80 ? (
            <div>

              <h2 className="text-3xl sm:text-5xl font-bold text-[#16A34A] mb-4">
                Congratulations 🎉
              </h2>

              <p className="text-lg sm:text-2xl text-slate-700 leading-relaxed">

                You are selected for the next round.
                <br />
                Please visit your nearest recruitment center.

              </p>

            </div>
          ) : percentage >= 50 ? (
            <div>

              <h2 className="text-3xl sm:text-5xl font-bold text-[#CA8A04] mb-4">
                Examination Passed 👍
              </h2>

              <p className="text-lg sm:text-2xl text-slate-700 leading-relaxed">

                You have successfully qualified the examination.

              </p>

            </div>
          ) : (
            <div>

              <h2 className="text-3xl sm:text-5xl font-bold text-[#DC2626] mb-4">
                Better Luck Next Time
              </h2>

              <p className="text-lg sm:text-2xl text-slate-700 leading-relaxed">

                Unfortunately you did not qualify this examination.

              </p>

            </div>
          )}

        </div>

        {/* DETAILS CARD */}
        <div className="bg-white rounded-[32px] border border-slate-200 shadow-lg overflow-hidden">

          {/* HEADER */}
          <div className="bg-[#0068A9] px-6 sm:px-8 py-6">

            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Candidate Information
            </h2>

            <p className="text-blue-100 mt-1">
              Registered candidate details
            </p>

          </div>

          {/* DETAILS */}
          <div className="p-5 sm:p-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

              {[
                {
                  label: "Full Name",
                  value: studentData?.name,
                },
                {
                  label: "Father's Name",
                  value:
                    studentData?.fatherName,
                },
                {
                  label: "Mother's Name",
                  value:
                    studentData?.motherName,
                },
                {
                  label: "Age",
                  value: studentData?.age,
                },
                {
                  label: "Height",
                  value:
                    studentData?.height,
                },
                {
                  label: "Gender",
                  value:
                    studentData?.gender,
                },
                {
                  label: "Mobile Number",
                  value:
                    studentData?.mobile,
                },
                {
                  label: "Email Address",
                  value:
                    studentData?.email,
                },
                {
                  label: "Qualification",
                  value:
                    studentData?.qualification,
                },
                {
                  label: "School / College",
                  value:
                    studentData?.school,
                },
                {
                  label: "City",
                  value: studentData?.city,
                },
                {
                  label: "State",
                  value:
                    studentData?.state,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5"
                >

                  <p className="text-slate-500 text-sm mb-2">
                    {item.label}
                  </p>

                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] break-words">

                    {item.value || "N/A"}

                  </h2>

                </div>
              ))}

              {/* ADDRESS */}
              <div className="sm:col-span-2 xl:col-span-3 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5">

                <p className="text-slate-500 text-sm mb-2">
                  Full Address
                </p>

                <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] break-words leading-relaxed">

                  {studentData?.address ||
                    "N/A"}

                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <button
            onClick={() =>
              router.push("/quiz")
            }
            className="flex-1 bg-[#0068A9] hover:bg-[#1E40AF] text-white py-5 rounded-2xl text-lg font-bold shadow-lg transition"
          >
            Attempt Again
          </button>

          <button
            onClick={() =>
              router.push("/")
            }
            className="flex-1 bg-white border border-slate-300 hover:bg-slate-100 text-[#0F172A] py-5 rounded-2xl text-lg font-bold shadow-lg transition"
          >
            Back Home
          </button>

        </div>

      </section>

    </main>
  );
}