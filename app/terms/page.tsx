import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "These Website Standard Terms and Conditions govern your use of the Omron website, including all pages within it. By accessing or using this website, you agree to these Terms and Conditions. If you do not agree, you must not use this website.",
      "This website is not intended for individuals under 18 years of age. You must be at least 18 years old to use it.",
    ],
  },
  {
    title: "2. Intellectual Property Rights",
    paragraphs: [
      "Except for content owned by users, Searchline Database Private Limited (referred to as “Omron”) and/or its licensors own the intellectual property rights and materials contained on this website. All rights are reserved.",
      "You are granted a limited licence to view website materials, subject to the restrictions in these Terms.",
    ],
  },
  {
    title: "3. Restrictions",
    paragraphs: [
      "You must not:",
    ],
    bullets: [
      "Publish website material in any media without authorization.",
      "Sell, sublicense, or commercialize website material.",
      "Publicly perform or display website material without authorization.",
      "Use the website in a way that damages it or interferes with other users’ access.",
      "Use the website unlawfully or in a way that may harm any person or business.",
      "Conduct data mining, harvesting, extraction, or similar activities without authorization.",
      "Use the website for unauthorized advertising or marketing.",
      "Access restricted areas without permission. Any user ID or password issued to you must be kept confidential.",
    ],
  },
  {
    title: "4. Your Content and Personal Information",
    paragraphs: [
      "“Your Content” means any audio, video, text, images, or other material you choose to display on this website. By displaying content, you grant Omron a non-exclusive, worldwide, royalty-free, sublicensable licence to use, reproduce, adapt, publish, translate, and distribute that content in any media.",
      "Your content must be your own or used with appropriate permission, and must not infringe third-party rights. Omron reserves the right to remove content, subject to applicable law.",
      "Basic details you provide, such as your name, phone number, and email address, may be shared with people or organizations associated with Omron for purposes related to the resume data-filling project, subject to applicable privacy requirements and the website’s Privacy Policy.",
    ],
  },
  {
    title: "5. No Warranties",
    paragraphs: [
      "This website is provided on an “as is” and “as available” basis, to the extent permitted by applicable law. Omron makes no warranties regarding the website or its materials, whether express or implied.",
      "Information on this website is for general informational purposes and should not be treated as professional advice.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, Omron and its officers, directors, and employees shall not be liable for indirect, incidental, special, or consequential losses arising from or related to your use of the website.",
      "Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law.",
    ],
  },
  {
    title: "7. Termination",
    paragraphs: [
      "Omron may suspend or terminate access to the website or a membership in accordance with these Terms and applicable law, including where a user breaches these Terms. Where required, notice may be sent to the email address provided in the application or by another legally permitted method.",
      "Any consequences for membership benefits or accumulated points will be handled in accordance with the applicable programme terms and law.",
    ],
  },
  {
    title: "8. Indemnification",
    paragraphs: [
      "To the extent permitted by applicable law, you may be responsible for losses, costs, claims, and reasonable legal expenses arising from your breach of these Terms or unlawful use of the website.",
    ],
  },
  {
    title: "9. Severability",
    paragraphs: [
      "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in effect to the extent permitted by applicable law.",
    ],
  },
  {
    title: "10. General Terms for Using the Portal",
    paragraphs: [
      "By registering for or using the Omron portal, you agree to the project-related terms described below, subject to applicable law and any separate written agreement that applies to your work.",
      "All work submitted by a user is subject to quality checks conducted by Omron’s internal Quality Control (QC) department. Payment eligibility depends on QC assessment and approval under the applicable payout rules.",
      "Delays caused by server issues, website maintenance, or similar technical events may affect processing timelines. Omron will communicate material changes where appropriate. Payment obligations, if any, remain subject to applicable law and the agreed project terms.",
      "To qualify for the stated payout schedule, users must process between 300 and 700 resumes within a seven-day period and achieve at least 50% accuracy, as assessed under the QC process.",
      "Data supplied through the portal may only be used for the assigned project and entered into the specified fields. Users must not use, copy, disclose, or retain the data for unrelated purposes.",
      "If work accuracy falls below 50%, Omron may, at its discretion and subject to applicable law, offer an extension for correction and resubmission. The stated extension charges are ₹2,500 for two days or ₹3,000 for five days. Any fee must be clearly disclosed and agreed to before the extension is purchased.",
    ],
  },
];

const payoutRows = [
  { quality: "Learning", accuracy: "Below 50%", rate: "₹2" },
  { quality: "Emerging", accuracy: "50% to below 55%", rate: "₹5" },
  { quality: "Emerging", accuracy: "55% to below 60%", rate: "₹10" },
  { quality: "Progressing", accuracy: "60% to below 65%", rate: "₹15" },
  { quality: "Progressing", accuracy: "65% to below 70%", rate: "₹20" },
  { quality: "Meets Expectation", accuracy: "70% to below 75%", rate: "₹30" },
  { quality: "Meets Expectation", accuracy: "75% to below 80%", rate: "₹40" },
  { quality: "Proficient", accuracy: "80% to below 85%", rate: "₹50" },
  { quality: "Proficient", accuracy: "85% to below 90%", rate: "₹60" },
  { quality: "Master", accuracy: "91% to 100%", rate: "₹70" },
];

const finalSections = [
  {
    title: "12. Variation of Terms",
    text: "Omron may update these Terms from time to time. Updated terms will be published on this page with a revision date where applicable. Continued use of the website after an update is subject to applicable law and the updated terms.",
  },
  {
    title: "13. Assignment",
    text: "Omron may assign or transfer its rights and obligations under these Terms where permitted by law. Users may not assign or transfer their rights or obligations without Omron’s written permission.",
  },
  {
    title: "14. Entire Agreement",
    text: "These Terms, together with applicable legal notices, disclaimers, and policies published on the website, govern your use of the website, subject to any separate agreement applicable to your project.",
  },
  {
    title: "15. Governing Law and Jurisdiction",
    text: "The original terms specify the laws of Gujarat, India, and courts located in Gujarat. The appropriate governing law and jurisdiction should be confirmed by Omron and reviewed for legal enforceability before publication.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    

    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-600">
       
<section className="relative isolate overflow-hidden border-b border-blue-100/70 bg-gradient-to-br from-white via-blue-50/80 to-sky-100/60 px-6 py-14 sm:py-16 md:py-20">
  {/* Background gradients */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -right-32 -top-32 h-[440px] w-[440px] rounded-full bg-blue-200/30 blur-[100px]" />
    <div className="absolute -bottom-40 left-[20%] h-[380px] w-[380px] rounded-full bg-sky-200/30 blur-[100px]" />
    <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent" />

    {/* Dot pattern */}
    <svg
      className="absolute right-0 top-0 h-full w-2/3 text-blue-300/40"
      viewBox="0 0 600 500"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="hero-dots"
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="600" height="500" fill="url(#hero-dots)" />
    </svg>

    {/* Decorative geometry */}
    <svg
      className="absolute -right-20 top-0 hidden h-[440px] w-[440px] text-blue-300/40 md:block"
      viewBox="0 0 440 440"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="220" cy="220" r="105" stroke="currentColor" />
      <circle cx="220" cy="220" r="145" stroke="currentColor" />
      <circle cx="220" cy="220" r="185" stroke="currentColor" />
      <path
        d="M220 20V420M20 220H420M78 78L362 362M362 78L78 362"
        stroke="currentColor"
        strokeOpacity="0.5"
      />
      <circle cx="220" cy="220" r="7" fill="#60A5FA" />
      <circle cx="325" cy="220" r="5" fill="#93C5FD" />
      <circle cx="220" cy="75" r="5" fill="#BFDBFE" />
    </svg>
  </div>

  <div className="relative mx-auto max-w-7xl">
    {/* Breadcrumb */}
  <div className="mb-7 flex items-center gap-2 text-sm">
  <Link
    href="/"
    className="flex items-center gap-2 text-gray-500 transition-colors hover:text-blue-600"
  >
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"
      />
    </svg>
    Home
  </Link>

  <svg
    className="h-4 w-4 text-gray-300"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 18 6-6-6-6"
    />
  </svg>

  <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 font-semibold text-blue-700">
    <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_0_3px_rgba(37,99,235,0.12)]" />
    Terms & Conditions
  </span>
</div>

    <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
      {/* Hero content */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                d="M7 3.75h7l5 5V20a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5.75a2 2 0 0 1 2-2Z"
                strokeLinejoin="round"
              />
              <path
                d="M14 4v5h5M8.5 13h7M8.5 16.5h7"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-blue-800">
            Omron Legal Center
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
          Terms &amp;{" "}
          <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">
            Conditions
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">
          Clear guidelines for using Omron, understanding our services, and
          participating in our resume data-processing projects.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href="#terms-content"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Read the terms
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                d="M12 5v14m-7-7 7 7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <span className="inline-flex items-center gap-2 text-sm text-gray-500">
            <svg
              className="h-5 w-5 text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <path
                d="M12 3 19 6v5c0 4.5-2.8 7.7-7 10-4.2-2.3-7-5.5-7-10V6l7-3Z"
                strokeLinejoin="round"
              />
              <path
                d="m9 12 2 2 4-4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Important information
          </span>
        </div>
      </div>

      {/* Information card */}
      <div className="relative mx-auto hidden w-full max-w-sm lg:block">
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-200/40 to-sky-100/30 blur-2xl" />

        <div className="relative rounded-3xl border border-white/90 bg-white/80 p-6 shadow-xl shadow-blue-950/[0.06] backdrop-blur-xl">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-600/20">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <path
                d="M7 3.75h7l5 5V20a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5.75a2 2 0 0 1 2-2Z"
                strokeLinejoin="round"
              />
              <path
                d="M14 4v5h5M8.5 13h7M8.5 16.5h7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2 className="mt-5 text-xl font-semibold tracking-tight text-gray-900">
            Before you get started
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            A few important things to review before using our platform.
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                title: "Understand the terms",
                description: "Know the conditions for using the website.",
              },
              {
                title: "Review project requirements",
                description: "Check the applicable quality and payout rules.",
              },
              {
                title: "Protect your information",
                description: "Understand your data-related responsibilities.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path
                      d="m5 12 4 4L19 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 p-3.5">
            <svg
              className="h-5 w-5 shrink-0 text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5m0-8h.01" strokeLinecap="round" />
            </svg>
            <p className="text-xs leading-5 text-gray-600">
              Need clarification? Contact the support team.
            </p>
          </div>
        </div>

        <div className="absolute -right-4 top-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white bg-white shadow-lg shadow-blue-900/10">
          <svg
            className="h-5 w-5 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v8M8 12h8" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-lg font-medium text-gray-900 md:text-xl">
                {section.title}
              </h2>

              <div className="space-y-3 text-sm leading-7 text-gray-600 md:text-base">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul className="list-disc space-y-2 pl-6">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <section>
            <h2 className="mb-3 text-lg font-medium text-gray-900 md:text-xl">
              11. Payout Rates and Accuracy
            </h2>

            <p className="mb-5 text-sm leading-7 text-gray-600 md:text-base">
              The following rates are stated per resume. Payment eligibility
              and accuracy are subject to the QC assessment and the project
              rules communicated to the user.
            </p>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full min-w-[540px] border-collapse text-left text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-5 py-4 font-medium">Work Quality</th>
                    <th className="px-5 py-4 font-medium">Accuracy</th>
                    <th className="px-5 py-4 font-medium">
                      Payout per Resume
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {payoutRows.map((row, index) => (
                    <tr
                      key={`${row.accuracy}-${index}`}
                      className="border-t border-gray-100"
                    >
                      <td className="px-5 py-3.5">{row.quality}</td>
                      <td className="px-5 py-3.5">{row.accuracy}</td>
                      <td className="px-5 py-3.5 text-gray-900">
                        {row.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 space-y-3 text-sm leading-7 text-gray-600 md:text-base">
              <p>
                Rates are stated per resume. Only resumes accepted as accurate
                under the applicable QC rules qualify for the relevant rate.
                The original project terms state that a minimum of ₹2 per
                accurate resume may be paid even when overall work accuracy is
                below 50%.
              </p>
              <p>
                The stated minimum withdrawal amount is ₹1,000. The applicable
                payment cycle, processing time, and other conditions should be
                communicated clearly to users before work begins.
              </p>
            </div>
          </section>

          {finalSections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-lg font-medium text-gray-900 md:text-xl">
                {section.title}
              </h2>
              <p className="text-sm leading-7 text-gray-600 md:text-base">
                {section.text}
              </p>
            </section>
          ))}

          <div className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-medium text-gray-900">
              Questions about these terms?
            </h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              For questions about the Omron portal or resume
              data-processing project, contact the support team.
            </p>
            <a
              href="mailto:REPLACE-WITH-OMRON-SUPPORT-EMAIL"
              className="mt-2 inline-block text-sm text-blue-600 transition-colors hover:text-blue-700"
            >
              Contact support
            </a>
          </div>
        </div>
      </section>

 <Footer />
    </main>
  );
}