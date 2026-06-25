"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  UserCog,
  Users,
  Check,
  X,
  Lock,
} from "lucide-react";

const permissions = [
  {
    feature: "Patient Records",
    admin: true,
    staff: true,
  },
  {
    feature: "Lab Result Entry",
    admin: true,
    staff: true,
  },
  {
    feature: "Reports & Analytics",
    admin: true,
    staff: true,
  },
  {
    feature: "Admin Dashboard",
    admin: true,
    staff: false,
  },
  {
    feature: "Staff Dashboard",
    admin: false,
    staff: true,
  },
  {
    feature: "User Management",
    admin: true,
    staff: false,
  },
  {
    feature: "Invite Users",
    admin: true,
    staff: false,
  },
  {
    feature: "Storage Settings",
    admin: true,
    staff: false,
  },
  {
    feature: "Audit Logs",
    admin: true,
    staff: false,
  },
  {
    feature: "Parameter Configuration",
    admin: true,
    staff: false,
  },
];

const adminFeatures = [
  "Organization Management",
  "User Management",
  "Storage Configuration",
  "Audit Logs",
  "Lab Configuration",
  "Reports & Analytics",
];

const staffFeatures = [
  "Patient Records",
  "Lab Result Entry",
  "Reports",
  "Daily Operations",
];

export default function RoleAccessSection() {
  return (
    <section id="roles" className="relative container-custom overflow-hidden  py-6 md:py-8 lg:py-12 scroll-m-18 md:scroll-m-12">
      <div className="absolute top-20 left-20 h-[400px] w-[400px] rounded-full bg-red-100 blur-[140px]" />

      <div className=" relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-red-700">
            Role Management
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-heading">
            Secure Healthcare Access
            <span className="block bg-linear-to-r from-red-600 via-red-500 to-black bg-clip-text text-transparent">
              For Administrators & Staff
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-6xl text-lg leading-relaxed text-body">
            Control access across patient records, diagnostics, reporting,
            security and organization settings through a powerful role-based
            permission system.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
            className="rounded-4xl border border-border bg-white p-7 shadow-sm transition-all hover:shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-red-50">
                <UserCog size={28} className="text-red-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-heading">
                  Administrator
                </h3>

                <p className="text-body">
                  Complete organizational control
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {adminFeatures.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            whileHover={{ y: -5 }}
            className="rounded-[32px] border border-border bg-white p-7 shadow-sm transition-all hover:shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-50">
                <Users size={28} className="text-sky-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-heading">
                  Staff Member
                </h3>

                <p className="text-body">
                  Daily healthcare operations
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {staffFeatures.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mt-10 overflow-hidden rounded-4xl border border-border bg-white shadow-sm"
        >
          <div className="flex items-center gap-3 border-b border-border px-6 py-5">
            <Lock size={18} className="text-red-600" />

            <h3 className="font-semibold text-heading">
              Permission Matrix
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-heading">
                    Feature
                  </th>

                  <th className="px-6 py-4 text-center text-sm font-semibold text-red-600">
                    Administrator
                  </th>

                  <th className="px-6 py-4 text-center text-sm font-semibold text-sky-600">
                    Staff
                  </th>
                </tr>
              </thead>

              <tbody>
                {permissions.map((item) => (
                  <tr
                    key={item.feature}
                    className="border-b border-border transition-colors hover:bg-surface"
                  >
                    <td className="px-6 py-4 text-body">
                      {item.feature}
                    </td>

                    <td className="px-6 py-4 text-center">
                      {item.admin ? (
                        <Check
                          size={18}
                          className="mx-auto text-green-600"
                        />
                      ) : (
                        <X
                          size={18}
                          className="mx-auto text-red-500"
                        />
                      )}
                    </td>

                    <td className="px-6 py-4 text-center">
                      {item.staff ? (
                        <Check
                          size={18}
                          className="mx-auto text-green-600"
                        />
                      ) : (
                        <X
                          size={18}
                          className="mx-auto text-red-500"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}