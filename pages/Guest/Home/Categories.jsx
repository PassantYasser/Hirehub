import { categories } from '@/data/Guest/Categories'
import React from 'react'

function Categories() {
  return (
    <>
      <section className="bg-[#E2E8F0] py-8 px-18">
        <h2 className="text-3xl font-semibold text-[#0F172A]">
          Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <h3 className="text-[#0F172A] text-base font-bold">
                {category.title}
              </h3>

              <p className="text-[#64748B] text-sm font-normal mt-1">
                {category.jobs} jobs
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Categories