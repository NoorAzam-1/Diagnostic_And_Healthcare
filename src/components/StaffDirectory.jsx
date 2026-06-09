export function StaffDirectory({
  isDarkMode,
  staffDirectory,
  staffInvitationForm,
  setStaffInvitationForm,
  sendStaffInvitation,
  changeStaffCredentials,
  changeStaffAvailability
}) {
  return (
    <div className="p-6 space-y-6">
      
      {/* Header */}
      <div className="border-b pb-4 border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold">Staff Operations & Identity Controls</h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
          Onboard new clinical operators, modify privilege structures, and maintain organizational roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
        
        {/* Onboarding form */}
        <div className={`p-5 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'} h-fit space-y-4`}>
          <h3 className="font-bold text-indigo-700 uppercase tracking-widest text-[10px]">Invite New Operator</h3>
          
          <form onSubmit={sendStaffInvitation} className="space-y-4">
            
            <div className="flex flex-col space-y-1">
              <label className="font-semibold text-slate-700">Operator Full Name</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Dr. Rajesh Malhotra"
                value={staffInvitationForm.name}
                onChange={(e) => setStaffInvitationForm({...staffInvitationForm, name: e.target.value})}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded p-2.5 text-slate-900 dark:text-white"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-semibold text-slate-700">Clinical Email Address</label>
              <input 
                type="email" 
                required
                placeholder="e.g. r.malhotra@apexclinical.in"
                value={staffInvitationForm.email}
                onChange={(e) => setStaffInvitationForm({...staffInvitationForm, email: e.target.value})}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded p-2.5 text-slate-900 dark:text-white"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-semibold text-slate-700">Access Privilege Class</label>
              <select 
                value={staffInvitationForm.role}
                onChange={(e) => setStaffInvitationForm({...staffInvitationForm, role: e.target.value})}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded p-2.5 text-slate-900 dark:text-white font-semibold"
              >
                <option value="Medical Registrar (Staff)">Medical Registrar (Intake desk access)</option>
                <option value="Clinical Director (Admin)" disabled>Clinical Director (NHA Authorization Required)</option>
              </select>
              <span className="text-[10px] text-rose-500 font-semibold block mt-1">
                * Security Mandate: Staff operators are barred from self-elevating profiles to Admin level clearance.
              </span>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-semibold text-slate-700">Specialization / Department</label>
              <input 
                type="text" 
                placeholder="e.g. Laboratory Technician, Front Desk Associate"
                value={staffInvitationForm.specialization}
                onChange={(e) => setStaffInvitationForm({...staffInvitationForm, specialization: e.target.value})}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded p-2.5 text-slate-900 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-lg transition"
            >
              Generate Onboarding Credentials
            </button>

          </form>
        </div>

        {/* Staff list panel */}
        <div className={`lg:col-span-2 p-5 rounded-xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-4`}>
          <h3 className="font-bold text-indigo-700 uppercase tracking-widest text-[10px]">Clinical Team Directory</h3>
          
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {staffDirectory.map((staff, idx) => (
              <div key={idx} className="py-3.5 flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{staff.name}</span>
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${staff.role.includes('Admin') ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'bg-slate-100 text-slate-600'}`}>
                      {staff.role}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono mt-1 block">{staff.email} • {staff.specialization}</span>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Protection built-in: main admin Noor Azam cannot be edited to prevent demo lockouts */}
                  {staff.id !== 'DIR-101' && (
                    <button 
                      onClick={() => changeStaffCredentials(staff.id)}
                      className={`px-2 py-1 rounded text-[10px] font-semibold border ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:text-white' : 'bg-white border-slate-205 hover:bg-slate-50'}`}
                    >
                      Change Role
                    </button>
                  )}
                  
                  {staff.id !== 'DIR-101' && (
                    <button 
                      onClick={() => changeStaffAvailability(staff.id)}
                      className={`px-2.5 py-1 rounded text-[10px] font-bold ${staff.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'}`}
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
