import uav from "@/assets/uav.jpg";
import floorplan from "@/assets/floorplan.jpg";
import resumeiq from "@/assets/resumeiq.jpg";

// Central, editable content. Leave URLs empty to hide the link.
export const profile = {
  name: "Suleman",
  role: "AI / Machine Learning Engineer",
  // Portrait for the hero. Leave "" to show the placeholder; drop an imported
  // image (or CDN url string) here to show your photo.
  portrait: "/me.jpg",
  email: "muhammadsulemanlahore@gmail.com",
  github: "https://github.com/suleman12344",
  linkedin: "https://www.linkedin.com/in/muhammad-suleman-goraya/?isSelfProfile=true",
  facts: [
    { k: "Education", v: "BS Computer Science — University of Central Punjab (UCP), Pakistan" },
    { k: "Affiliation", v: "Master of Computer Science (Research Mode) — Universiti Sains Malaysia (USM)" },
    { k: "Specialization", v: "Computer Vision, Deep Learning & AI/ML Engineering" },
    { k: "Research interest", v: "UAV-Based Highway Traffic Monitoring & Unsafe Lane-Change Detection" },
  ],
};

export type Project = {
  id: string; title: string; category: string; status: string; image: string;
  summary: string; problem: string; approach: string; tech: string[];
  /** GitHub / source URL. Leave "" until ready — button shows disabled until set. */
  repo: string;
  /** Live site or demo URL. Leave "" until ready — button shows disabled until set. */
  demo: string;
};

export const projects: Project[] = [
  {
    id: "01", title: "AI Floor Plan to Interior", category: "Generative Vision", status: "Prototype", image: floorplan,
    summary: "Explores transforming 2D floor-plan inputs into architectural and interior-design visualizations.",
    problem: "Turning technical drawings into visuals non-experts can understand takes time and skill.",
    approach: "Image-conditioned generation pipeline that interprets layout structure and renders styled interiors.",
    tech: ["Python", "PyTorch", "FastAPI", "React"],
    repo: "https://github.com/suleman12344/AI_Architect/tree/main",
    demo: "",
  },
  {
    id: "02", title: "ResumeIQ", category: "Full-stack AI", status: "Built", image: resumeiq,
    summary: "AI-powered resume screening with a web interface and backend processing.",
    problem: "Manual screening of many resumes is slow and inconsistent.",
    approach: "Resume parsing and text analysis served via a REST API to a React dashboard.",
    tech: ["Python", "Django REST", "React", "NLP"],
    repo: "https://github.com/suleman12344/resume_screener",
    demo: "https://resume-screener-beta-indol.vercel.app/",
  },
  {
    id: "03", title: "UAV Highway Traffic Monitoring", category: "Research", status: "Ongoing research", image: uav,
    summary: "Investigating deep-learning vehicle detection and multi-object tracking to study lane-changing behavior in aerial highway video.",
    problem: "Unsafe lane changes are hard to observe at scale from ground-level cameras.",
    approach: "Detect vehicles, track them across frames, and analyze trajectories against lane geometry. Objectives, not validated results.",
    tech: ["PyTorch", "Object Detection", "MOT", "OpenCV"],
    repo: "",
    demo: "",
  },
];

export const skills = [
  { group: "AI & Machine Learning", items: ["PyTorch", "Deep Learning", "Model Training & Evaluation", "Computer Vision"] },
  { group: "Backend", items: ["Python", "FastAPI", "Django REST Framework"] },
  { group: "Frontend", items: ["React", "Next.js", "TypeScript"] },
  { group: "Tools & Workflows", items: ["Git", "REST APIs", "Data Processing", "Model Integration"] },
];

export const services = [
  { t: "AI Application Development", d: "End-to-end applications where models are a working part of the product, not a demo.", tech: ["PyTorch", "FastAPI", "React"], link: "02" },
  { t: "Computer Vision Systems", d: "Detection, tracking and image understanding pipelines for real-world footage.", tech: ["Detection", "Tracking", "OpenCV"], link: "03" },
  { t: "Deep Learning Prototyping", d: "Fast, measured experiments to test whether an idea is feasible.", tech: ["PyTorch", "Training", "Evaluation"], link: "01" },
  { t: "Backend API Development", d: "Clean, documented REST APIs that serve models and data reliably.", tech: ["FastAPI", "Django REST"], link: "" },
  { t: "Full-stack AI Integration", d: "Connecting models, APIs and interfaces into one coherent system.", tech: ["Next.js", "TypeScript", "REST"], link: "02" },
];

export const timeline = [
  {
    org: "Universiti Sains Malaysia (USM)",
    role: "MSc Computer Science — Research Mode",
    date: "2026 — Present",
    desc: "Pursuing postgraduate research focused on UAV-based highway traffic monitoring, vehicle detection, multi-object tracking, and unsafe lane-changing behavior analysis.",
    tags: ["Research", "Computer Vision", "Deep Learning"]
  },
  {
    org: "University of Central Punjab (UCP)",
    role: "BS Computer Science",
    date: "2021 — 2025",
    desc: "Completed a Bachelor's degree in Computer Science with a CGPA of 3.31/4.00. Developed a foundation in software engineering, artificial intelligence, and machine learning.",
    tags: ["Computer Science", "AI/ML", "Software Engineering"]
  },
  {
    org: "Neodustria",
    role: "AI Engineer Intern",
    date: "2026",
    desc: "Worked on machine learning engineering projects involving model development and integration within an ML platform, gaining practical experience with Python, PyTorch, and ML workflows.",
    tags: ["Python", "PyTorch", "Machine Learning"]
  }
];

export const highlights = [
  { k: "3", l: "Featured AI projects across vision, generative and full-stack" },
  { k: "CV", l: "Primary focus: detection, tracking, visual generation" },
  { k: "E2E", l: "From model training to deployed web interface" },
];
