
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Omron?",
    answer:
      "Omron is a work portal for freelancers. It provides a platform where freelancers can undertake data-processing tasks related to resumes and organize information into structured formats.",
  },
  {
    question: "What exactly is the work?",
    answer:
      "The work involves reviewing resumes and transferring relevant information into a master form so the data can be organized and used in different ways. The exact tasks and instructions should be provided through the work portal.",
  },
  {
    question: "How many resumes do I need to process in a month? Is there any target?",
    answer:
      "According to the stated requirements, the target is 300 to 700 resumes within a 7-day period. Confirm the current target and applicable work terms with Omron before starting.",
  },
  {
    question:
      "How will I be paid? What is the payment mode? Will there be any tax deduction?",
    answer:
      "The stated payment schedule is the 15th and 30th of each month, with payment processed in the next applicable cycle after work completion. Payments are described as online transfers to registered bank accounts. The original information mentions a 5% TDS deduction for FY 2023–2024; verify the current applicable tax deduction and payment slabs directly with Omron.",
  },
  {
    question: "Whom should I contact if I face a problem during work?",
    answer:
      "The stated support hours are 10 AM to 6 PM, Monday to Friday. You can raise a query through the portal or contact team@omron.in. The original information states that portal queries are resolved within a maximum of four working hours.",
  },
  {
    question:
      "What is accuracy? Is there a minimum accuracy requirement? How is it calculated?",
    answer:
      "The stated minimum accuracy requirement is 50%. For example, at least 150 out of 300 resumes or 350 out of 700 resumes must be processed accurately. Confirm how accuracy is assessed and measured under the current work guidelines.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What Solutions We Provide
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-500">
            Find answers to common questions about our work portal and
            processes.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 bg-white shadow-[0_8px_30px_rgba(37,99,235,0.08)]"
                    : "border-gray-200 bg-white hover:border-blue-200"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span className="flex items-start gap-4">
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base font-semibold leading-7 text-gray-900 sm:text-lg">
                      {faq.question}
                    </span>
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                      isOpen
                        ? "rotate-180 bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6 9 6 6 6-6"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    className="px-5 pb-6 sm:px-7 sm:pb-7"
                  >
                    <div className="ml-12 border-l-2 border-blue-100 pl-4 sm:pl-5">
                      <p className="text-sm leading-7 text-gray-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}