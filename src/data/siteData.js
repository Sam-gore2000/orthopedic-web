// This site no longer has a backend: it's a single-doctor informational
// website with an external booking link. All content lives here as plain
// data so pages can import it directly with no loading states needed.

export const EXTERNAL_BOOKING_URL = "https://ors.gov.in/orsportal/";

export const doctor = {
  name: "Dr. Abhishek Saini",
  department: "Orthopedics & Sports Medicine",
  specialization: "Orthopedic & Sports Surgeon",
  qualifications: "MS Ortho, FNB Sports Medicine",
  experienceYears: " 5 yrs 7 mos",
  rating: 4.8,
  hospitalBranch: "Dr. Abhishek Saini, Lucknow",
  phone: "+91 8175081034",
  bio: "Dr. A. Saini is an orthopedic and sports surgeon specializing in arthroscopic ligament repair, joint replacement, and sports injury management, helping athletes and active patients return safely to the activities they love.",
};

export const department = {
  name: "Orthopedics & Sports Medicine",
  slug: "orthopedics-sports-medicine",
  icon: "🦴",
  color: "#0F766E",
  shortDescription: "Sports injury, joint, and orthopedic surgical care under Dr. Abhishek Saini.",
  overview:
    "Our Orthopedics & Sports Medicine practice, led by Dr. A. Saini, focuses on diagnosing and treating sports injuries, joint problems, and musculoskeletal conditions for athletes and everyday patients alike. From arthroscopic ligament repair to joint replacement, every treatment plan is built around getting patients back to the activities they care about, safely and efficiently.",
  whyChooseUs: [
    "Fellowship-trained sports surgeon with a focus on minimally invasive arthroscopy",
    "Personalized rehabilitation plans coordinated with physiotherapy",
    "Same-week consultations for urgent sports injuries and fractures",
    "Clear, honest guidance on surgical vs. non-surgical treatment options",
  ],
  proceduresAndTreatments: [
    { title: "ACL & Ligament Reconstruction", description: "Arthroscopic repair or reconstruction of torn knee ligaments to restore stability." },
    { title: "Meniscus Repair", description: "Minimally invasive repair or trimming of torn knee cartilage." },
    { title: "Shoulder Arthroscopy", description: "Keyhole surgery for rotator cuff tears, dislocations, and impingement." },
    { title: "Total Knee & Hip Replacement", description: "Joint replacement for advanced arthritis and degenerative joint disease." },
    { title: "Fracture Fixation", description: "Surgical stabilization of sports-related and traumatic fractures." },
  ],
  conditionsTreated: [
    { title: "ACL / PCL Tears", description: "Ligament injuries common in sports involving pivoting and sudden stops." },
    { title: "Meniscus Tears", description: "Cartilage damage in the knee causing pain, swelling, and locking." },
    { title: "Rotator Cuff Injuries", description: "Shoulder tendon tears affecting movement and strength." },
    { title: "Osteoarthritis", description: "Wear-and-tear joint disease causing chronic pain and stiffness." },
    { title: "Sports Fractures", description: "Bone fractures resulting from sports-related trauma." },
  ],
  subSpecialities: [
    { title: "Arthroscopic Sports Surgery", description: "Minimally invasive keyhole surgery for joint and ligament injuries." },
    { title: "Joint Replacement Surgery", description: "Hip and knee replacement for advanced degenerative joint disease." },
    { title: "Sports Injury Rehabilitation", description: "Structured recovery plans to safely return athletes to play." },
  ],
  diagnosticTests: ["X-Ray", "MRI", "CT Scan", "Ultrasound (Musculoskeletal)", "Bone Density Test (DEXA)", "Arthroscopic Evaluation"],
};
