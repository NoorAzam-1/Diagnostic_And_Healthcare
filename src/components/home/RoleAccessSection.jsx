"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCog, Users, Check, X, Lock } from "lucide-react";

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
    feature: "Reports",
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

export default function RoleAccessSection() {
  return (
    <section
      id="roles"
      className="relative overflow-hidden pb-14 px-6 lg:px-16"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Role Management
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-white">
            Healthcare Role Management
            <span className="block bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              For Administrators & Staff
            </span>
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed">
            Control access across patient records, laboratory workflows,
            reporting, audit logs and organization settings using a secure
            role-based permission system.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-indigo-500/20 bg-slate-900/60 backdrop-blur-xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600">
                <UserCog size={24} className="text-white" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Administrator</h3>

                <p className="text-slate-400 text-sm">
                  Complete organizational control
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs text-indigo-400">
                User Management
              </span>

              <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs text-indigo-400">
                Audit Logs
              </span>

              <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs text-indigo-400">
                Storage Settings
              </span>

              <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs text-indigo-400">
                Configuration
              </span>

              <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs text-indigo-400">
                Dashboard
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600">
                <Users size={24} className="text-white" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Staff Member</h3>
                <p className="text-slate-400 text-sm">
                  Daily healthcare operations
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                Patient Records
              </span>

              <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                Lab Results
              </span>

              <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                Reports
              </span>

              <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                Staff Dashboard
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
            <Lock size={18} className="text-indigo-400" />

            <h3 className="font-semibold text-white ">Permission Matrix</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="px-5 py-4 text-left text-sm font-medium text-slate-400">
                    Feature
                  </th>

                  <th className="px-5 py-4 text-center text-sm font-semibold text-indigo-400">
                    Admin
                  </th>

                  <th className="px-5 py-4 text-center text-sm font-semibold text-cyan-400">
                    Staff
                  </th>
                </tr>
              </thead>

              <tbody>
                {permissions.map((item) => (
                  <tr
                    key={item.feature}
                    className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="px-5 py-3 text-sm text-slate-300">
                      {item.feature}
                    </td>

                    <td className="px-5 py-3 text-center">
                      {item.admin ? (
                        <Check size={18} className="mx-auto text-emerald-400" />
                      ) : (
                        <X size={18} className="mx-auto text-rose-400" />
                      )}
                    </td>

                    <td className="px-5 py-3 text-center">
                      {item.staff ? (
                        <Check size={18} className="mx-auto text-emerald-400" />
                      ) : (
                        <X size={18} className="mx-auto text-rose-400" />
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
