import Link from "next/link";
import {
  Activity,
  ShieldCheck,
  Heart,
  Database,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="relative container-custom overflow-hidden border-t border-border bg-white">
      <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-red-100 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-sky-100 blur-[120px]" />

      <div className=" relative z-10 py-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white shadow-md">
                <Activity size={22} />
              </div>

              <div>
                <h3 className="text-xl font-black text-heading">HERAI ONE</h3>

                <p className="text-xs uppercase tracking-wider text-muted">
                  Healthcare SaaS Platform
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-body leading-relaxed">
              Unified healthcare operations platform for hospitals, diagnostic
              laboratories and clinics. Manage patient records, diagnostics,
              reporting and administration through a secure healthcare
              ecosystem.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2">
                <ShieldCheck size={14} className="text-green-600" />
                <span className="text-xs font-semibold text-green-700">
                  ABDM Ready
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2">
                <Database size={14} className="text-sky-600" />
                <span className="text-xs font-semibold text-sky-700">
                  Data Sovereignty
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-heading">Company</h4>

            <div className="mt-5 space-y-3">
              <Link
                href="#"
                className="block text-body transition-colors hover:text-primary"
              >
                About Us
              </Link>

              <Link
                href="#"
                className="block text-body transition-colors hover:text-primary"
              >
                Contact
              </Link>

              <Link
                href="#"
                className="block text-body transition-colors hover:text-primary"
              >
                Careers
              </Link>

              <Link
                href="#"
                className="block text-body transition-colors hover:text-primary"
              >
                Partners
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-heading">Product</h4>

            <div className="mt-5 space-y-3">
              <Link
                href="#features"
                className="block text-body transition-colors hover:text-primary"
              >
                Features
              </Link>

              <Link
                href="#workflow"
                className="block text-body transition-colors hover:text-primary"
              >
                Workflow
              </Link>

              <Link
                href="#roles"
                className="block text-body transition-colors hover:text-primary"
              >
                Role Access
              </Link>

              <Link
                href="#lab-configuration"
                className="block text-body transition-colors hover:text-primary"
              >
                Lab Configuration
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-heading">Support</h4>

            <div className="mt-5 space-y-3">
              <Link
                href="#"
                className="block text-body transition-colors hover:text-primary"
              >
                Documentation
              </Link>

              <Link
                href="#"
                className="block text-body transition-colors hover:text-primary"
              >
                Help Center
              </Link>

              <Link
                href="#"
                className="block text-body transition-colors hover:text-primary"
              >
                Status Page
              </Link>

              <Link
                href="#"
                className="block text-body transition-colors hover:text-primary"
              >
                Support Ticket
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-heading">Legal</h4>

            <div className="mt-5 space-y-3">
              <Link
                href="#"
                className="block text-body transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="block text-body transition-colors hover:text-primary"
              >
                Terms of Service
              </Link>

              <Link
                href="#"
                className="block text-body transition-colors hover:text-primary"
              >
                Security Policy
              </Link>

              <Link
                href="#"
                className="block text-body transition-colors hover:text-primary"
              >
                Compliance
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4 flex md:gap-6 justify-end items-center">
          <div className="flex items-center gap-3 text-body">
            <Mail size={16} className="text-red-600" />
            contact@heraione.com
          </div>

          <div className="flex items-center gap-3 text-body">
            <Phone size={16} className="text-red-600" />
            089204 55160
          </div>

          <div className="flex items-center gap-3 text-body">
            <MapPin size={16} className="text-red-600" />
            New Delhi, India
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} HERAI ONE. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted">
            Made with
            <Heart size={14} className="fill-red-500 text-red-500" />
            in India
          </div>
        </div>
      </div>
    </footer>
  );
}
