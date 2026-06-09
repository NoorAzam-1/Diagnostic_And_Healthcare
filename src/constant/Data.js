export const INITIAL_AUDIT_LOGS = [
  {
    id: 1,
    timestamp: "2026-06-09T08:30:15.120Z",
    operatorId: "DIR-101",
    operatorName: "Noor Azam",
    action: "FACILITY_REGISTRATION",
    details:
      "Registered 'Apex Diagnostic & Wellness Center' under National Health Authority License: IND-KA-9921",
    sourceIp: "192.168.1.10",
    clinicalTemplateVersion: 1,
    integritySignature: "9a2d8f7c...e3f4",
  },
  {
    id: 2,
    timestamp: "2026-06-09T08:35:00.000Z",
    operatorId: "DIR-101",
    operatorName: "Noor Azam",
    action: "DATA_SOVEREIGNTY_RE_ROUTING",
    details:
      "Activated Local Workstation Cryptographic Enclave Storage (Encrypted SQLCipher Database on Desktop Application)",
    sourceIp: "192.168.1.10",
    clinicalTemplateVersion: 1,
    integritySignature: "1c2da4b1...9e8f",
  },
  {
    id: 3,
    timestamp: "2026-06-09T08:42:10.450Z",
    operatorId: "DIR-101",
    operatorName: "Noor Azam",
    action: "CLINICAL_TEMPLATE_REVISION",
    details:
      "Enabled 'Blood Group', 'Allergy Lists' and 'Aadhaar ID' parameters. Activated 'Blood Glucose' & 'Lipid Panel' diagnostic modules.",
    sourceIp: "192.168.1.10",
    clinicalTemplateVersion: 2,
    integritySignature: "3e4fc2d3...0a1b",
  },
  {
    id: 4,
    timestamp: "2026-06-09T09:12:03.110Z",
    operatorId: "REG-204",
    operatorName: "Amit Mishra",
    action: "PATIENT_RECORD_COMMITTED",
    details:
      "Registered Patient File for Aarav Sharma (File Code: PAT-2026-00042) under Schema v2.00",
    sourceIp: "192.168.1.45",
    clinicalTemplateVersion: 2,
    integritySignature: "4f5ad3e4...1b2c",
  },
];

export const INITIAL_STAFF = [
  {
    id: "DIR-101",
    name: "Noor Azam",
    email: "noor.azam@apexclinical.in",
    role: "Clinical Director (Admin)",
    status: "Active",
    mfa: true,
    specialization: "Pathology Head",
  },
  {
    id: "REG-204",
    name: "Amit Mishra",
    email: "a.mishra@apexclinical.in",
    role: "Medical Registrar (Staff)",
    status: "Active",
    mfa: false,
    specialization: "Front Desk Operations",
  },
  {
    id: "STF-302",
    name: "Priya Nair",
    email: "p.nair@apexclinical.in",
    role: "Medical Registrar (Staff)",
    status: "Active",
    mfa: true,
    specialization: "Lab Assistant",
  },
  {
    id: "STF-099",
    name: "Robert Langdon",
    email: "r.langdon@apexclinical.in",
    role: "Medical Registrar (Staff)",
    status: "Suspended",
    mfa: false,
    specialization: "Operations Executive",
  },
];

export const INITIAL_PATIENT_RECORDS = [
  {
    id: "PAT-2026-00042",
    fullName: "Aarav Sharma",
    dob: "1990-05-14",
    gender: "Male",
    phone: "+91 98765 43210",
    visitDate: "2026-06-09T09:10",
    testRequested: "Routine Coronary Profile",
    storageArchitecture: "LOCAL_ENCLAVE",
    appliedTemplateVersion: 2,
    demographics: {
      bloodGroup: "B+",
      knownAllergies: "Penicillin, Dust Mites",
      emailAddress: "aarav.sharma@gmail.com",
      address: {
        street: "Flat 402, Shanti Kunj, Sector 15, Dwarka",
        city: "Delhi",
        state: "Delhi",
        pincode: "110075",
      },
      nationalId: "5422-9011-5678", // Aadhaar Card
      insurancePolicy: "HDFC Ergo Optima Secure #90119",
      emergencyContact: "Sunita Sharma (+91 98765 43209)",
    },
    diagnostics: {
      lipidProfile: {
        totalCholesterol: "185",
        hdl: "52",
        ldl: "110",
        triglycerides: "115",
      },
      bloodGlucose: {
        fasting: "92",
        postPrandial: "135",
      },
    },
    customClinicalParameters: {
      "Oxygen Saturation (SpO2)": "98%",
    },
  },
  {
    id: "PAT-2026-00043",
    fullName: "Priyadarshini Patel",
    dob: "1985-11-23",
    gender: "Female",
    phone: "+91 91234 56789",
    visitDate: "2026-06-09T10:05",
    testRequested: "Diabetic Monitoring Study",
    storageArchitecture: "LOCAL_ENCLAVE",
    appliedTemplateVersion: 2,
    demographics: {
      bloodGroup: "A-",
      knownAllergies: "None Reported",
      emailAddress: "priya.patel@clinicalnet.com",
      address: {
        street: "Block C-12, Green Glen Layout, Bellandur",
        city: "Bengaluru",
        state: "Karnataka",
        pincode: "560103",
      },
      nationalId: "9088-1234-9012", // Aadhaar Card
      insurancePolicy: "Star Health Family Red Carpet",
      emergencyContact: "Karan Patel (+91 91234 56780)",
    },
    diagnostics: {
      bloodGlucose: {
        fasting: "142",
        postPrandial: "210",
      },
    },
    customClinicalParameters: {
      "Oxygen Saturation (SpO2)": "95%",
    },
  },
];
