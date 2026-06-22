"use client";
import { useApp } from "@/context/AppContext";

export function StaffDirectory() {
  const {
    staffDirectory,
    staffInvitationForm,
    setStaffInvitationForm,
    sendStaffInvitation,
    changeStaffCredentials,
    changeStaffAvailability,
  } = useApp();
  
  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4 border-border">
        <h2 className="text-xl font-bold text-heading">
          Staff Operations & Identity Controls
        </h2>
        <p className="text-muted text-xs mt-1">
          Onboard new clinical operators, modify privilege structures, and
          maintain organizational roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
        <div className="p-5 rounded-xl border bg-surface border-border h-fit space-y-4">
          <h3 className="font-bold text-primary uppercase tracking-widest text-[10px]">
            Invite New Operator
          </h3>

          <form onSubmit={sendStaffInvitation} className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label className="font-semibold text-body">
                Operator Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Rajesh Malhotra"
                value={staffInvitationForm.name}
                onChange={(e) =>
                  setStaffInvitationForm({
                    ...staffInvitationForm,
                    name: e.target.value,
                  })
                }
                className="bg-white border border-border rounded p-2.5 text-heading"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-semibold text-body">
                Clinical Email Address
              </label>
              <input
                type="email"
                required
                placeholder="e.g. r.malhotra@apexclinical.in"
                value={staffInvitationForm.email}
                onChange={(e) =>
                  setStaffInvitationForm({
                    ...staffInvitationForm,
                    email: e.target.value,
                  })
                }
                className="bg-white border border-border rounded p-2.5 text-heading"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-semibold text-body">
                Access Privilege Class
              </label>
              <select
                value={staffInvitationForm.role}
                onChange={(e) =>
                  setStaffInvitationForm({
                    ...staffInvitationForm,
                    role: e.target.value,
                  })
                }
                className="bg-white border border-border rounded p-2.5 text-heading font-semibold"
              >
                <option value="Medical Registrar (Staff)">
                  Medical Registrar (Intake desk access)
                </option>
                <option value="Clinical Director (Admin)" disabled>
                  Clinical Director (NHA Authorization Required)
                </option>
              </select>
              <span className="text-[10px] text-rose-500 font-semibold block mt-1">
                * Security Mandate: Staff operators are barred from
                self-elevating profiles to Admin level clearance.
              </span>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-semibold text-body">
                Specialization / Department
              </label>
              <input
                type="text"
                placeholder="e.g. Laboratory Technician, Front Desk Associate"
                value={staffInvitationForm.specialization}
                onChange={(e) =>
                  setStaffInvitationForm({
                    ...staffInvitationForm,
                    specialization: e.target.value,
                  })
                }
                className="bg-white border border-border rounded p-2.5 text-heading"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-2.5 rounded-lg transition"
            >
              Generate Onboarding Credentials
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 p-5 rounded-xl border bg-surface border-border space-y-4">
          <h3 className="font-bold text-primary uppercase tracking-widest text-[10px]">
            Clinical Team Directory
          </h3>

          <div className="divide-y divide-border">
            {staffDirectory.map((staff, idx) => (
              <div
                key={idx}
                className="py-3.5 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-heading text-sm">
                      {staff.name}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[9px] font-bold ${staff.role.includes("Admin") ? "bg-red-50 text-primary border border-red-200" : "bg-surface text-body"}`}
                    >
                      {staff.role}
                    </span>
                  </div>
                  <span className="text-[10px] text-muted font-mono mt-1 block">
                    {staff.email} • {staff.specialization}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  {staff.id !== "DIR-101" && (
                    <button
                      onClick={() => changeStaffCredentials(staff.id)}
                      className="px-2 py-1 rounded text-[10px] font-semibold border bg-white border-border hover:bg-surface text-body"
                    >
                      Change Role
                    </button>
                  )}

                  {staff.id !== "DIR-101" && (
                    <button
                      onClick={() => changeStaffAvailability(staff.id)}
                      className={`px-2.5 py-1 rounded text-[10px] font-bold ${staff.status === "Active" ? "bg-green-50 text-green-700 border border-green-200" : "bg-rose-50 text-rose-700 border border-rose-200"}`}
                    >
                      {staff.status}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}