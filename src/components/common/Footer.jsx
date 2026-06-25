import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Heart,
  Database,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative  overflow-hidden border-t border-border">
      <div className="absolute top-0 left-0 h-75 w-75 rounded-full bg-emerald-100 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-75 w-75 rounded-full bg-teal-100 blur-[120px]" />

      <div className="container-custom relative z-10 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 lg:grid-cols-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src="/brandLogo.jpeg"
                alt="HARAI Innovations"
                width={76}
                height={76}
                className="h-auto w-24 rounded-2xl object-cover shadow-md"
                priority
              />

              <div>
                <h3 className="text-xl font-black text-heading">HARAI</h3>

                <p className="text-xs uppercase tracking-wider text-muted">
                  Innovations Pvt. Ltd.
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
              <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span className="text-xs font-semibold text-emerald-700">
                  ABDM Ready
                </span>
              </div>

                <div className="flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2">
                  <Database size={14} className="text-teal-600" />
                  <span className="text-xs font-semibold text-teal-700">
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
        <div className="mt-4 sm:flex md:gap-6 md:mt-8 justify-end items-center">
          <div className="flex items-center gap-3 text-body">
            <Mail size={16} className="text-primary" />
            contact@haraione.com
          </div>

          <div className="flex items-center gap-3 text-body">
            <Phone size={16} className="text-primary" />
            089204 55160
          </div>

          <div className="flex items-center gap-3 text-body">
            <MapPin size={16} className="text-primary" />
            New Delhi, India
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} HARAI ONE. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted">
            Made with
            <Heart size={14} className="fill-emerald-500 text-emerald-500" />
            in India
          </div>
        </div>
      </div>
    </footer>
  );
}
