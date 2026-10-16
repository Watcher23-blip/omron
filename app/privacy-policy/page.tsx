import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
    {
        title: "1. Information Collection and Use",
        content: [
            {
                heading: "Registration and Login",
                text: "When you register and log in to our app, we collect your phone number for OTP-based authentication. This helps us verify your identity and secure your account.",
            },
            {
                heading: "Profile Information",
                text: "We may collect the following information to create and manage your account:",
                list: ["City name", "Name", "Phone number", "Date of Birth (DOB)", "Gender"],
            },
            {
                heading: "Optional Profile Picture",
                text: "You may upload a profile picture to personalize your account. Providing a profile picture is optional and is not required to use our services.",
            },
        ],
    },
    {
        title: "2. Use of Information",
        content: [
            {
                heading: "Account Management",
                text: "We use the information collected to manage your account, provide access to our services, and assist with query resolution.",
            },
            {
                heading: "Communication",
                text: "We may use your contact information to communicate with you about your account, queries, and updates related to our services.",
            },
        ],
    },
    {
        title: "3. Information Sharing",
        content: [
            {
                heading: "Third-Party Sharing",
                text: "We do not share your personal information with third parties except where required by applicable law or where necessary to resolve queries related to our services.",
            },
        ],
    },
    {
        title: "4. Security",
        content: [
            {
                heading: "Data Security",
                text: "We implement reasonable security measures designed to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
            },
        ],
    },
    {
        title: "5. Data Retention",
        content: [
            {
                text: "We retain your personal information for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, comply with applicable legal obligations, and resolve disputes.",
            },
        ],
    },
    {
        title: "6. User Rights",
        content: [
            {
                text: "You may have the right to access, correct, or request deletion of your personal information, subject to applicable law. Please contact us to exercise these rights.",
            },
        ],
    },
    {
        title: "7. Updates to Privacy Policy",
        content: [
            {
                text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page and will take effect upon posting, unless otherwise stated.",
            },
        ],
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white text-gray-600">


            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-b from-blue-50 via-white to-white">
                <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20">
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
                            Privacy Policy
                        </span>
                    </div>

                    <div className="grid items-center gap-10 md:grid-cols-[1fr_320px] md:gap-14">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-sm font-medium text-blue-700 shadow-sm">
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
                                        d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m9 12 2 2 4-4"
                                    />
                                </svg>
                                Your privacy matters
                            </div>

                            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                Privacy{" "}
                                <span className="text-blue-600">Policy</span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                                Learn how we collect, use, protect, and retain your personal
                                information when you use our app and website for account
                                management and query resolution.
                            </p>

                            <Link
                                href="#privacy-content"
                                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
                            >
                                Read Privacy Policy
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 17 17 7M7 7h10v10"
                                    />
                                </svg>
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5 sm:p-8">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                    <svg
                                        className="h-7 w-7"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.6}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"
                                        />
                                        <rect
                                            width="6"
                                            height="5"
                                            x="9"
                                            y="10"
                                            rx="1"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10 10V8a2 2 0 1 1 4 0v2"
                                        />
                                    </svg>
                                </div>

                                <h2 className="text-xl font-bold text-gray-900">
                                    Your information, handled responsibly
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-gray-500">
                                    Understand what information we collect, why we need it, and
                                    the choices available to you regarding your personal data.
                                </p>

                                <div className="mt-6 space-y-3 border-t border-gray-100 pt-5">
                                    {[
                                        "Account information",
                                        "How data is used",
                                        "Your privacy rights",
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                                <svg
                                                    className="h-3 w-3"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2.5}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m5 12 4 4L19 6"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="text-sm font-medium text-gray-600">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute -right-3 -top-3 h-6 w-6 rounded-full border-4 border-white bg-blue-500 shadow-sm" />
                            <div className="absolute -bottom-3 -left-3 h-5 w-5 rounded-full border-4 border-white bg-sky-400 shadow-sm" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section
                id="privacy-content"
                className="scroll-mt-24 px-6 py-12 sm:px-8 md:px-12 md:py-16"
            >
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">
                    {/* Sidebar */}
                    <aside className="h-fit rounded-2xl border border-gray-100 bg-gray-50/70 p-5 lg:sticky lg:top-28">
                        <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                            On this page
                        </h2>

                        <nav className="space-y-1">
                            {sections.map((section, index) => (
                                <a
                                    key={section.title}
                                    href={`#section-${index + 1}`}
                                    className="group flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                                >
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white text-xs font-semibold text-gray-400 ring-1 ring-gray-200 transition-colors group-hover:text-blue-600 group-hover:ring-blue-200">
                                        {index + 1}
                                    </span>
                                    <span>{section.title.replace(/^\d+\.\s*/, "")}</span>
                                </a>
                            ))}
                        </nav>

                        <div className="mt-5 rounded-xl border border-blue-100 bg-white p-4">
                            <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
                                <span className="h-2 w-2 rounded-full bg-blue-600" />
                                Privacy information
                            </div>
                            <p className="mt-2 text-xs leading-5 text-gray-500">
                                Please review this policy to understand how your information
                                is handled.
                            </p>
                        </div>
                    </aside>

                    {/* Main Content */}
                    {/* Main Content */}
                    <div className="min-w-0">
                        <div className="mb-8 border-b border-gray-100 pb-7">
                            <p className="text-sm leading-7 text-gray-600 sm:text-base">
                                This Privacy Policy outlines how we collect, use, and share your
                                personal information when you use our app and website for account
                                management and query resolution.
                            </p>
                        </div>

                        <div className="space-y-10">
                            {sections.map((section, index) => (
                                <section
                                    key={section.title}
                                    id={`section-${index + 1}`}
                                    className="scroll-mt-28"
                                >
                                    <div className="mb-5 flex items-center gap-3">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-medium text-blue-600">
                                            {index + 1}
                                        </span>

                                        <h2 className="text-lg font-semibold tracking-tight text-gray-800 sm:text-xl">
                                            {section.title.replace(/^\d+\.\s*/, "")}
                                        </h2>
                                    </div>

                                    <div className="space-y-5 pl-0 sm:pl-11">
                                        {section.content.map((item, itemIndex) => (
                                            <div key={`${section.title}-${itemIndex}`}>
                                                {item.heading && (
                                                    <h3 className="mb-2 text-base font-medium text-gray-800">
                                                        {item.heading}
                                                    </h3>
                                                )}

                                                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                                                    {item.text}
                                                </p>

                                                {"list" in item && item.list && (
                                                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                                                        {item.list.map((value) => (
                                                            <li
                                                                key={value}
                                                                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50/70 px-4 py-3 text-sm text-gray-600"
                                                            >
                                                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                                                {value}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>

                        {/* Acknowledgement */}
                        <div className="mt-12 rounded-xl border border-blue-100 bg-blue-50/50 p-6 sm:p-7">
                            <div className="flex items-start gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600">
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m9 12 2 2 4-4"
                                        />
                                        <circle cx="12" cy="12" r="9" />
                                    </svg>
                                </div>

                                <div>
                                    <h2 className="text-base font-semibold text-gray-800">
                                        Your acknowledgement
                                    </h2>
                                    <p className="mt-2 text-sm leading-7 text-gray-600">
                                        By using our app and website, you acknowledge that you have
                                        read and understood this Privacy Policy and agree to the
                                        collection and use of your personal information as described
                                        herein.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-blue-600"
                            >
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m15 18-6-6 6-6"
                                    />
                                </svg>
                                Back to Home
                            </Link>

                            <Link
                                href="/terms-and-conditions"
                                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                            >
                                Terms & Conditions
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 17 17 7M7 7h10v10"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}