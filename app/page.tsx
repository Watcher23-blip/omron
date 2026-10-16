
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Faq from './components/Faq';
import FAQSection from './components/Faq';
import Footer from './components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
             <Navbar />
            <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#e8f3fc] via-[#f0efff] to-[#b0e3f3]">
               

                <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-[1440px] items-center px-6 py-16 sm:px-10 md:px-14 lg:px-16">
                    <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-8">
                        {/* Left: Hero Content */}
                        <div className="relative z-10 max-w-2xl">
                            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#30343b] sm:text-5xl lg:text-[46px] xl:text-[54px]">
                                The Future Of
                                <br />
                                Freelancing Is Here
                            </h1>

                            <p className="mt-5 max-w-[620px] text-base leading-7 text-[#343b49] sm:text-lg">
                                We have been working with various job portals, who require
                                assimilation and segregation of bulk data.
                            </p>

                            <Link
                                href="#work"
                                className="mt-6 inline-flex min-w-[187px] items-center justify-center rounded-full bg-[#2164cf] px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#174fae] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300/60"
                            >
                                Join Now
                            </Link>
                        </div>

                        {/* Right: Hero Illustration */}
                        <div className="relative flex items-center justify-center lg:justify-end">
                            <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-blue-300/20 blur-3xl sm:h-96 sm:w-96" />

                            <Image
                                src="/hero.png"
                                alt="Freelancers working together on data and digital projects"
                                width={600}
                                height={420}
                                priority
                                sizes="(max-width: 1024px) 90vw, 48vw"
                                className="relative h-auto w-full max-w-[580px] object-contain drop-shadow-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Company Section */}
            <section
                id="about"
                className="scroll-mt-24 bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 items-center gap-10 min-[1024px]:grid-cols-[7fr_3fr] min-[1024px]:gap-12 xl:gap-16">
                        {/* Left: Company Information */}
                        <div className="w-full">
                            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                                <span className="h-0.5 w-7 rounded-full bg-blue-600" />
                                Expert in Field
                            </span>

                            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                                About Our Company
                            </h2>

                            <p className="mt-6 text-base font-medium leading-8 text-slate-600 sm:text-lg">
                                We have a dedicated team of professionals with a mission to
                                provide quality services to our clients. We have been committed
                                to advertising and marketing since the company&apos;s inception
                                six years ago.
                            </p>

                            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                                <p>
                                    DataSort provides a wide range of advertising and marketing
                                    solutions to companies primarily engaged in IT services and
                                    other work related to data processing, data analysis, data
                                    segregation, estimation, and other such enablement services.
                                </p>

                                <p>
                                    We have been working with various job portals that require
                                    the assimilation and segregation of bulk data into specific
                                    formats. To facilitate marketing for these clients, we
                                    created DataSort. This platform allows individuals to
                                    register and earn payouts by completing data segregation and
                                    data processing tasks. We are constantly looking for
                                    individuals willing to work part-time or as freelancers.
                                </p>
                            </div>
                        </div>

                        {/* Right: Company Image */}
                        <div className="relative mx-auto w-full max-w-md min-[1024px]:max-w-none">
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                                <Image
                                    src="/about.png"
                                    alt="DataSort team working on data processing and marketing"
                                    fill
                                    sizes="(max-width: 1023px) 90vw, 30vw"
                                    className="object-contain"
                                />
                            </div>

                            {/* Decorative Accent */}
                            <div className="absolute -bottom-3 -right-3 -z-10 h-28 w-28 rounded-3xl bg-blue-100 sm:-bottom-4 sm:-right-4" />
                        </div>
                    </div>
                </div>
            </section>


            {/* Statistics Section */}
            <section className="bg-[#f7faff] px-6 sm:px-10 sm:py-5 lg:px-16">
                <div className="mx-auto max-w-7xl">



                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
                        {/* Global Partners */}
                        <div className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg lg:col-span-2">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M2 12h20" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
                                </svg>
                            </div>
                            <h3 className="mt-5 text-3xl font-extrabold text-slate-900">12</h3>
                            <h4 className="mt-2 text-base font-bold text-slate-800">Global Partners</h4>
                            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                                Our partners trust us. We help each other grow and value every relationship.
                            </p>
                        </div>

                        {/* Subscribers */}
                        <div className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg lg:col-span-2">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="10" cy="7" r="4" />
                                    <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className="mt-5 text-3xl font-extrabold text-slate-900">4,500</h3>
                            <h4 className="mt-2 text-base font-bold text-slate-800">Subscribers</h4>
                            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                                We provide dedicated support to each subscriber, helping them succeed globally.
                            </p>
                        </div>

                        {/* Support Heroes */}
                        <div className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg lg:col-span-2">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m12 3 2.7 5.47 6.03.88-4.36 4.25 1.03 6.01L12 16.77l-5.4 2.84 1.03-6.01-4.36-4.25 6.03-.88L12 3Z" />
                                </svg>
                            </div>
                            <h3 className="mt-5 text-3xl font-extrabold text-slate-900">135</h3>
                            <h4 className="mt-2 text-base font-bold text-slate-800">Support Heroes</h4>
                            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                                Our support team continuously shares guidance and positive insights with our community.
                            </p>
                        </div>

                        {/* Payouts Processed */}
                        <div className="group rounded-2xl border border-blue-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:col-span-3 lg:col-start-1 lg:row-start-2">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="5" width="20" height="14" rx="2" />
                                    <path d="M2 10h20" />
                                    <path d="M6 15h2" />
                                    <path d="M16 15h2" />
                                </svg>
                            </div>
                            <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                1,586,239
                            </h3>
                            <h4 className="mt-2 text-lg font-bold text-slate-800">Payouts Processed</h4>
                            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                                Tracking payouts processed since the launch of this project.
                            </p>
                        </div>

                        {/* Resumes Processed */}
                        <div className="group rounded-2xl border border-blue-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:col-span-3 lg:col-start-4 lg:row-start-2">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                                    <path d="M14 2v6h6" />
                                    <path d="M8 13h8" />
                                    <path d="M8 17h8" />
                                    <path d="M8 9h2" />
                                </svg>
                            </div>
                            <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                712,549
                            </h3>
                            <h4 className="mt-2 text-lg font-bold text-slate-800">Resumes Processed</h4>
                            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                                Processing resumes with the help of our subscribers and contributors.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            <section
                id="work"
                className="scroll-mt-30 bg-blue-600 py-20 md:py-28"
            >
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                        <div >
                            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                                BUILT FOR FREELANCERS
                            </span>

                            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                                It's Time We Rethink The Way Freelancers Work.
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-8 text-white/85">
                                We have a dedicated team of professionals with a mission to
                                provide quality services to our clients. We are committed to
                                advertising and marketing, with six years of experience in the
                                industry.
                            </p>

                            <div className="mt-9 grid gap-5 sm:grid-cols-2">
                                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 transition hover:bg-white/15">
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={1.8}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>

                                    <h3 className="text-lg font-bold text-white">
                                        Data Processing
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-white/80">
                                        Whether you're travelling or working from home, you can log
                                        in and get started whenever it suits you.
                                    </p>

                                    <a
                                        href="#how-it-works"
                                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-100"
                                    >
                                        Learn More <span>→</span>
                                    </a>
                                </div>

                                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 transition hover:bg-white/15">
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={1.8}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-7 8h6m-6 4h6"
                                            />
                                        </svg>
                                    </div>

                                    <h3 className="text-lg font-bold text-white">
                                        Data Segregation
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-white/80">
                                        Access the details of your tasks and keep track of your work
                                        through our easy-to-use portal.
                                    </p>

                                    <a
                                        href="#how-it-works"
                                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-100"
                                    >
                                        Learn More <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Image
                                src="/image3.png"
                                alt="Freelancer data processing interface"
                                width={600}
                                height={600}
                                className="h-auto w-[90%] object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <div
                        id="how-it-works"
                        className="mt-24 grid items-center gap-12 lg:mt-32 lg:grid-cols-2 lg:gap-20"
                    >
                        <div className="flex justify-center">
                            <Image
                                src="/image2.png"
                                alt="Data processing and copy-paste workflow"
                                width={600}
                                height={600}
                                className="h-auto w-[90%] object-contain"
                            />
                        </div>

                        <div>
                            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                                SIMPLE WORKFLOW
                            </span>

                            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                                Just CTRL+C &amp; CTRL+V
                            </h2>

                            <p className="mt-6 text-base leading-8 text-white/85">
                                An intelligently designed, beautifully crafted portal helps you
                                manage your tasks and work efficiently. Simply copy and paste
                                data to complete supported processing and segregation tasks.
                            </p>

                            <p className="mt-4 text-base leading-8 text-white/85">
                                Our platform is optimized for mobile use, so you can manage tasks
                                from your smartphone or computer, whether you're at home or on
                                the move.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                                    Easy-to-use portal
                                </span>
                                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                                    Mobile-friendly
                                </span>
                                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                                    Simple workflow
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 grid items-center gap-12 lg:mt-32 lg:grid-cols-2 lg:gap-20">
                        <div>
                            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                                MADE FOR YOU
                            </span>

                            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                                Custom Designed For Freelancers
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-8 text-white/85">
                                Our streamlined platform is designed to help freelancers
                                navigate tasks easily, manage their workflow, and focus on
                                completing their work accurately.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <Image
                                src="/image1.png"
                                alt="Custom-designed freelancer portal"
                                width={600}
                                height={600}
                                className="h-auto w-[90%] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            ```tsx
            <section className="bg-white py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                            -- BUILT WITH FREELANCERS IN MIND, PACKED WITH FEATURES --
                        </span>

                        <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                            The Features Every Freelancer Needs
                        </h2>
                    </div>

                    <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                        {/* User Dashboard */}
                        <div className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-6 py-10 text-center shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_18px_40px_rgba(37,99,235,0.13)]">
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-200/70">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5V5a2 2 0 012-2h14a2 2 0 012 2v8.5M3 13.5h5l2 3h4l2-3h5M3 13.5V19a2 2 0 002 2h14a2 2 0 002-2v-5.5M7 7h4m-4 3h7" />
                                </svg>
                            </div>

                            <h3 className="mt-2 text-xl font-bold text-gray-900">User Dashboard</h3>
                        </div>

                        {/* Referral System */}
                        <div className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-6 py-10 text-center shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_18px_40px_rgba(37,99,235,0.13)]">
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-200/70">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m6-10a4 4 0 100-8 4 4 0 000 8zm10 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                                </svg>
                            </div>

                            <h3 className="mt-2 text-xl font-bold text-gray-900">Referral System</h3>
                        </div>

                        {/* Payout Tracking */}
                        <div className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-6 py-10 text-center shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_18px_40px_rgba(37,99,235,0.13)]">
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-200/70">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.2 0-4 .9-4 2s1.8 2 4 2 4 .9 4 2-1.8 2-4 2m0-10V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <h3 className="mt-2 text-xl font-bold text-gray-900">Payout Tracking</h3>
                        </div>

                        {/* Dedicated Support */}
                        <div className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-6 py-10 text-center shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_18px_40px_rgba(37,99,235,0.13)]">
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-200/70">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8m-8 4h5m-5 7l-4-4H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-7l-4 4z" />
                                </svg>
                            </div>

                            <h3 className="mt-2 text-xl font-bold text-gray-900">Dedicated Support</h3>
                        </div>

                        {/* Useful Detailed Reports */}
                        <div className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-6 py-10 text-center shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_18px_40px_rgba(37,99,235,0.13)]">
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-200/70">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5m0 14h17M8 15v-4m4 4V7m4 8V9m4 6V4" />
                                </svg>
                            </div>

                            <h3 className="mt-2 text-xl font-bold text-gray-900">Useful Detailed Reports</h3>
                        </div>

                        {/* Application Timeline */}
                        <div className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-6 py-10 text-center shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_18px_40px_rgba(37,99,235,0.13)]">
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-200/70">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 2v4m8-4v4M4 9h16M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zm3 9h3m-3 4h7" />
                                </svg>
                            </div>

                            <h3 className="mt-2 text-xl font-bold text-gray-900">Application Timeline</h3>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection />
            <Footer />


        </main>
    );
}
