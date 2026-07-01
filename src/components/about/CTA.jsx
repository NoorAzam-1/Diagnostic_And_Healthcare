import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden rounded-4xl max-w-7xl lg:mx-auto py-6 md:py-16 lg:py-24 mb-8 mx-4 md:mx-6">
      <div className="relative z-10 text-center ">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
          Let&apos;s Build the Future of Healthcare Together
        </h2>
        <p className="text-slate-400 font-light text-lg mb-5 md:mb-10 max-w-5xl mx-auto">
          Get in touch to see how our highly configurable, adaptive platform
          transforms operational burdens into delightful clinical workflows.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-white/10 px-8 py-4 rounded-xl font-semibold bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/25 transition-all duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
