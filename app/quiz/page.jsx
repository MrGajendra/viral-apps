"use client";

import { useState } from "react";
import questions from "../../data/questions.json";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function QuizPage() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswers, setSelectedAnswers] =
    useState({});

  const handleOptionClick = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: option,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let score = 0;

    questions.forEach((q, index) => {
      if (
        selectedAnswers[index] === q.answer
      ) {
        score++;
      }
    });

    router.push(
      `/result?score=${score}&total=${questions.length}`
    );
  };

  const currentData = questions[currentQuestion];

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <main className="min-h-screen bg-[#EEF2F7]">

      {/* TOP HEADER */}
      <header className="sticky top-0 z-50 bg-[#EB008B] border-b-4 border-[#0068A9] shadow-lg">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

            {/* LEFT */}
            <div className="flex items-center gap-4">

              <div className="bg-white rounded-xl p-2 shadow-md">
                <Image
                  src="/vmmlogo.jpg"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
              </div>

              <div className="text-white">

                <h1 className="text-lg sm:text-2xl font-bold">
                  Vishaal Megha Mart
                </h1>

                <p className="text-slate-300 text-sm sm:text-base">
                  Security Guard Recruitment Examination
                </p>

              </div>

            </div>

            {/* RIGHT */}
            

          </div>

        </div>
      </header>

      {/* BODY */}
      <div className="max-w-7xl mx-auto p-3 sm:p-5">

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-5">

          {/* LEFT CONTENT */}
          <section>

            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">

              {/* QUESTION HEADER */}
              <div className="bg-[#F8FAFC] border-b px-5 sm:px-8 py-5">

                <div className="flex flex-col sm:flex-row justify-between gap-4">

                  <div>

                    <p className="text-slate-500 text-sm mb-1">
                      Examination Question
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
                      Question {currentQuestion + 1}
                    </h2>

                  </div>

                  <div className="bg-[#DBEAFE] text-[#0068A9] px-5 py-3 rounded-2xl text-center min-w-[120px]">

                    <p className="text-sm font-medium">
                      Attempted
                    </p>

                    <h2 className="text-2xl font-bold">
                      {
                        Object.keys(
                          selectedAnswers
                        ).length
                      }
                    </h2>

                  </div>

                  

                </div>

              </div>

              {/* QUESTION */}
              <div className="p-5 sm:p-8">

                <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-8 mb-8">

                  <h2 className="text-lg sm:text-2xl font-semibold text-slate-800 leading-relaxed break-words">

                    {currentData.question}

                  </h2>

                </div>

                {/* OPTIONS */}
                <div className="space-y-5">

                  {currentData.options.map(
                    (option, index) => {
                      const isSelected =
                        selectedAnswers[
                          currentQuestion
                        ] === option;

                      return (
                        <button
                          key={index}
                          onClick={() =>
                            handleOptionClick(
                              option
                            )
                          }
                          className={`
                            w-full rounded-2xl border text-left transition-all duration-200
                            
                            ${
                              isSelected
                                ? "border-[#1D4ED8] bg-[#DBEAFE] shadow-lg"
                                : "border-slate-200 bg-white hover:border-[#93C5FD] hover:shadow-md"
                            }
                          `}
                        >

                          <div className="flex gap-4 p-4 sm:p-5">

                            {/* LABEL */}
                            <div
                              className={`
                                min-w-[52px] h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-all
                                
                                ${
                                  isSelected
                                    ? "bg-[#0068A9] text-white"
                                    : "bg-slate-100 text-slate-700"
                                }
                              `}
                            >
                              {
                                optionLabels[index]
                              }
                            </div>

                            {/* TEXT */}
                            <div className="flex-1 flex items-center">

                              <p className="text-sm sm:text-lg font-medium text-slate-800 leading-relaxed break-words">

                                {option}

                              </p>

                            </div>

                          </div>

                        </button>
                      );
                    }
                  )}

                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 pt-6 border-t">

                  <button
                    onClick={prevQuestion}
                    disabled={
                      currentQuestion === 0
                    }
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-200 hover:bg-slate-300 disabled:opacity-50 font-semibold transition"
                  >
                    Previous
                  </button>

                  {currentQuestion ===
                  questions.length - 1 ? (
                    <button
                      onClick={handleSubmit}
                      className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#16A34A] text-white hover:bg-green-700 font-semibold shadow-lg transition"
                    >
                      Submit Exam
                    </button>
                  ) : (
                    <button
                      onClick={nextQuestion}
                      className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1D4ED8] text-white hover:bg-[#1E40AF] font-semibold shadow-lg transition"
                    >
                      Save & Next
                    </button>
                  )}

                </div>

              </div>

            </div>
          </section>

          {/* RIGHT SIDEBAR */}
          <aside>

            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden sticky top-28">

              {/* TOP */}
              <div className="bg-[#0068A9] text-white p-5">

                <h2 className="text-xl font-bold">
                  Question Palette
                </h2>

                <p className="text-blue-100 text-sm mt-1">
                  Select question number
                </p>

              </div>

              {/* QUESTION GRID */}
              <div className="p-5">

                <div className="grid grid-cols-5 gap-3">

                  {questions.map((q, index) => (
                    <button
                      key={q.id}
                      onClick={() =>
                        setCurrentQuestion(
                          index
                        )
                      }
                      className={`
                        h-12 rounded-xl text-sm font-bold transition-all border
                        
                        ${
                          currentQuestion ===
                          index
                            ? "bg-[#0F172A] text-white border-[#0F172A] scale-105"
                            : selectedAnswers[
                                index
                              ]
                            ? "bg-[#16A34A] text-white border-[#16A34A]"
                            : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                        }
                      `}
                    >
                      {index + 1}
                    </button>
                  ))}

                  

                </div>

                <section className="my-3 flex">
                  <div className="flex items-center gap-4">

              <div className="bg-[#1E293B] px-5 py-3 rounded-2xl border border-slate-600 text-center">

                <p className="text-slate-300 text-sm">
                  Question
                </p>

                <h2 className="text-white text-2xl font-bold">
                  {currentQuestion + 1}
                </h2>

              </div>

              <div className="bg-[#1D4ED8] px-5 py-3 rounded-2xl text-center shadow-lg">

                <p className="text-blue-100 text-sm">
                  Total
                </p>

                <h2 className="text-white text-2xl font-bold">
                  {questions.length}
                </h2>

              </div>

            </div>
                </section>

                {/* LEGEND */}
                <div className="mt-8 space-y-4 border-t pt-6">

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded bg-[#0F172A]"></div>

                    <span className="text-slate-700 font-medium text-sm">
                      Current
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded bg-[#16A34A]"></div>

                    <span className="text-slate-700 font-medium text-sm">
                      Answered
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded bg-slate-300"></div>

                    <span className="text-slate-700 font-medium text-sm">
                      Not Answered
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </aside>

        </div>

      </div>
    </main>
  );
}