
import { jobs } from "@/data/Guest/Features";
import React from "react";


function Features() {
  return (
    <div className="bg-white py-8 px-18">

      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-[#0F172A]">
          Featured jobs
        </h1>

        <button className="text-sm font-medium text-[#4F46E5] cursor-pointer hover:underline">
          View all jobs
        </button>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-3 gap-4 mt-6">

        {jobs.slice(0, 3).map((job) => (
          <div
            key={job.id}
            className="bg-[#EEF2FF] p-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >

            {/* Job title */}
            <div className="flex gap-4 items-center">
              <p className="bg-white rounded-lg text-[#4F46E5] text-base font-semibold flex justify-center items-center w-12 h-12 shrink-0">
                {job.logo}
              </p>

              <div>
                <h2 className="text-2xl font-semibold text-[#0F172A]">
                  {job.title}
                </h2>

                <p className="text-sm font-normal text-[#64748B]">
                  {job.company}
                </p>
              </div>
            </div>

            {/* Job details */}
            <div className="flex flex-wrap gap-2 my-4">
              {[job.location, job.type, job.employment].map(
                (detail, index) => (
                  <p
                    key={`${job.id}-${index}`}
                    className="bg-white text-sm font-medium text-[#475569] w-fit px-4 py-1 rounded-lg"
                  >
                    {detail}
                  </p>
                )
              )}
            </div>

            {/* Salary */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A]">
                <span>${job.minSalary}</span>
                <span> - </span>
                <span>${job.maxSalary}</span>
                <span className="text-sm font-normal text-[#64748B]">
                  {" "}/month
                </span>
              </h2>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 my-4">
              {job.skills.map((skill) => (
                <p
                  key={`${job.id}-${skill}`}
                  className="bg-white text-sm font-medium text-[#4338CA] w-fit px-4 py-1 rounded-lg"
                >
                  {skill}
                </p>
              ))}
            </div>

            {/* Posted date */}
            <p className="text-sm font-normal text-[#64748B]">
              Posted {job.posted}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Features;
