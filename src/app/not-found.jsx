import Link from "next/link";
import { ArrowLeft, Activity } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-background px-6">
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-red-100 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-sky-100 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-3xl border border-red-100 bg-red-50 shadow-sm">
          <Activity size={36} className="text-red-600" />
        </div>

        <h1 className="text-[110px] sm:text-[160px] md:text-[220px] font-black leading-none tracking-[-0.08em] text-heading">
          404
        </h1>

        <h2 className="mt-2 text-3xl md:text-5xl font-black text-heading">
          Page Not Found
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-body">
          The page you are looking for doesn&apos;t exist, has been moved,
          or is temporarily unavailable.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-4 font-semibold text-white shadow-[0_12px_32px_rgba(230,0,18,0.18)] transition-all duration-300 hover:-translate-y-1"
          >
            <ArrowLeft size={18} />
            Back To Home
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-6 py-4 font-semibold text-heading shadow-sm transition-all duration-300 hover:border-red-300"
          >
            Open Dashboard
          </Link>
        </div>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-red-700">
          Healthcare ERP Platform
        </div>
      </div>
    </section>
  );
}