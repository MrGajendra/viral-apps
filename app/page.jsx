"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    age: "",
    height: "",
    gender: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    qualification: "",
    school: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "studentData",
      JSON.stringify(formData)
    );

    router.push("/quiz");
  };

  return (
    <main className="min-h-screen bg-[#0068A9] py-6 sm:py-10 px-3 sm:px-5">

      <div className="max-w-6xl mx-auto">

        {/* TOP HEADER */}
        <div className="bg-[#EB008B] rounded-[30px] overflow-hidden shadow-2xl border border-slate-800 mb-6">

          <div className="px-5 sm:px-10 py-8 sm:py-10">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

              {/* LEFT */}
              <div>

                <div className="inline-flex items-center gap-2 bg-[#1E293B] px-4 py-2 rounded-full mb-5 border border-slate-700">

                  <div className="w-2 h-2 rounded-full bg-[#16A34A]"></div>

                  <span className="text-slate-300 text-sm font-medium">
                    Original Fake Recruitment Portal
                  </span>

                </div>

                <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">

                  Vishaal Megha Mart
                  <br />

                  <span className="text-white">
                    Security Guard Exam
                  </span>

                </h1>

                <p className="text-slate-300 text-sm sm:text-lg mt-5 max-w-2xl leading-relaxed">

                  Fill in your candidate details carefully before proceeding to the online examination portal.

                </p>

              </div>

              {/* RIGHT */}
              

            </div>

          </div>

        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-[30px] shadow-2xl border border-slate-200 overflow-hidden">

          {/* HEADER */}
          <div className="bg-[#EB008B]  px-6 sm:px-10 py-7">

            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Candidate Registration Form
            </h2>

            <p className="text-blue-100 mt-2 text-sm sm:text-base">
              All fields marked are mandatory
            </p>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-8 lg:p-10 space-y-10"
          >

            {/* PERSONAL DETAILS */}
            <div>

              <div className="flex items-center gap-4 mb-8">

                <div className="w-1.5 h-10 rounded-full bg-[#1D4ED8]"></div>

                <div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
                    Personal Details
                  </h2>

                  <p className="text-slate-500 text-sm mt-1">
                    Enter your personal information
                  </p>

                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {[
                  {
                    label: "Full Name",
                    name: "name",
                    type: "text",
                  },
                  {
                    label: "Father's Name",
                    name: "fatherName",
                    type: "text",
                  },
                  {
                    label: "Mother's Name",
                    name: "motherName",
                    type: "text",
                  },
                  {
                    label: "Age",
                    name: "age",
                    type: "number",
                  },
                  {
                    label: "Height",
                    name: "height",
                    type: "text",
                  },
                  {
                    label: "Mobile Number",
                    name: "mobile",
                    type: "tel",
                  },
                  {
                    label: "Email Address",
                    name: "email",
                    type: "email",
                  },
                  {
                    label: "Qualification",
                    name: "qualification",
                    type: "text",
                  },
                  {
                    label: "School / College",
                    name: "school",
                    type: "text",
                  },
                ].map((field) => (
                  <div
                    key={field.name}
                    className="space-y-2"
                  >

                    <label className="text-sm font-semibold text-slate-700">

                      {field.label}

                    </label>

                    <input
                      type={field.type}
                      name={field.name}
                      required
                      value={
                        formData[field.name]
                      }
                      onChange={handleChange}
                      className="w-full bg-[#F8FAFC] border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                    />

                  </div>
                ))}

                {/* GENDER */}
                <div className="space-y-2">

                  <label className="text-sm font-semibold text-slate-700">
                    Gender
                  </label>

                  <select
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                  >
                    <option value="">
                      Select Gender
                    </option>

                    <option value="Male">
                      Male
                    </option>

                    <option value="Female">
                      Female
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>

              </div>

            </div>

            {/* ADDRESS DETAILS */}
            <div>

              <div className="flex items-center gap-4 mb-8">

                <div className="w-1.5 h-10 rounded-full bg-[#1D4ED8]"></div>

                <div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
                    Address Details
                  </h2>

                  <p className="text-slate-500 text-sm mt-1">
                    Enter your address information
                  </p>

                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* ADDRESS */}
                <div className="md:col-span-2 space-y-2">

                  <label className="text-sm font-semibold text-slate-700">
                    Full Address
                  </label>

                  <textarea
                    name="address"
                    required
                    rows="5"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-2xl px-5 py-4 outline-none resize-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                  ></textarea>

                </div>

                {/* CITY */}
                <div className="space-y-2">

                  <label className="text-sm font-semibold text-slate-700">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                  />

                </div>

                {/* STATE */}
                <div className="space-y-2">

                  <label className="text-sm font-semibold text-slate-700">
                    State
                  </label>

                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                  />

                </div>

                {/* PINCODE */}
                <div className="space-y-2">

                  <label className="text-sm font-semibold text-slate-700">
                    Pincode
                  </label>

                  <input
                    type="number"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                  />

                </div>

              </div>

            </div>

            {/* BUTTON */}
            <div className="pt-2">

              <button
                type="submit"
                className="w-full bg-[#EB008B] hover:bg-[#1E40AF] text-white py-5 rounded-2xl text-lg sm:text-xl font-bold shadow-xl transition-all duration-200 hover:scale-[1.01]"
              >
                Proceed To Examination
              </button>

            </div>

          </form>

        </div>

      </div>

    </main>
  );
}