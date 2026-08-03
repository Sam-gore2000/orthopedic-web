// Mirrors the `color` field seeded on each Department in the backend.
// Kept here too so DoctorCard can tint its photo banner without an extra API round trip.
export const departmentColors = {
  Cardiology: "#0F766E",
  Orthopedics: "#2563EB",
  Pediatrics: "#22C55E",
  Neurology: "#EF4444",
  Dermatology: "#F59E0B",
  "General Medicine": "#14B8A6",
};

export const getDepartmentColor = (departmentName) => departmentColors[departmentName] || "#0F766E";
