"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LegacyStatsSection } from "@/components/LegacyStatsSection";

const navLinks = [
  {
    label: "About",
    href: "/",
    submenu: ["Our School", "CBSE Houses"],
  },
  { label: "Curriculum", href: "/" },
  { label: "Life With Us", href: "/" },
  { label: "Admissions", href: "/" },
  { label: "Resources", href: "/" },
  { label: "Careers", href: "/" },
  { label: "Contact", href: "/" },
];

const announcementMessage =
  "Please be informed that all payment services will be temporarily blocked from Sunday (29-01-2026) to Monday (30-01-2026) due to scheduled maintenance and system upgrade activities. During this period, users may not be able to make online payments or access payment-related services.";

const isUnderMaintenance = false;

const getSubmenuHref = (label: string) =>
  label === "CBSE Houses" ? "/aboutus/cbse-houses" : "/";

const aboutExperiencePillars = [
  {
    label: "Collaborations",
    title: "Multicultural Campus",
    description:
      "A vibrant learning environment shaped by diverse peers, shared ambition, and a global outlook on education.",
    image: "/hero-banners/home/3.jpeg",
  },
  {
    label: "Degree Opportunities",
    title: "Dual-Degree Opportunities",
    description:
      "Pursue articulation programs, participate in study tours, and engage in cultural exchange pathways built around future-ready learning.",
    image: "/imageSection/10.jpeg",
  },
  {
    label: "Language and Culture",
    title: "Language and Culture Immersion",
    description:
      "Build confidence through global communication, intercultural exposure, and programs that broaden both perspective and expression.",
    image: "/hero-banners/home/5.jpeg",
  },
  {
    label: "International Research Projects",
    title: "Research with Global Relevance",
    description:
      "Work on collaborative projects, inquiry-driven learning, and structured academic exploration that connect classroom learning to real-world problems.",
    image: "/hero-banners/home/1.jpeg",
  },
  {
    label: "Global Faculty",
    title: "Mentorship from Global Faculty",
    description:
      "Learn with expert mentors and visiting educators who bring diverse experience, academic rigor, and international perspective.",
    image: "/hero-banners/home/4.jpeg",
  },
  {
    label: "Career Pathways",
    title: "Career Pathways with Purpose",
    description:
      "Move from aspiration to direction with exposure to future careers, skill-building opportunities, and guided long-term planning.",
    image: "/imageSection/5.jpg",
  },
];

// const aboutExperienceHighlights = [
//   {
//     title: "Collaborate",
//     text: "with diverse peers",
//     icon: "people",
//     color: "#9FC164",
//   },
//   {
//     title: "Explore",
//     text: "new cultures",
//     icon: "globe",
//     color: "#4F4CB0",
//   },
//   {
//     title: "Innovate",
//     text: "with global ideas",
//     icon: "lightbulb",
//     color: "#9FC164",
//   },
//   {
//     title: "Grow",
//     text: "beyond boundaries",
//     icon: "target",
//     color: "#4F4CB0",
//   },
// ];

const studentStories = [
  {
    name: "Shardul J.",
    role: "Competitive Scholar",
    thumb: "/imageSection/1.webp",
    image: "/imageSection/10.jpeg",
    quoteTitle: "Focused Learner to Confident Achiever",
    quote:
      "The academic discipline and supportive mentors at Sri Chaitanya helped me stay consistent, improve my performance, and build confidence for bigger goals.",
  },
  {
    name: "Anand B.",
    role: "Future Engineer",
    thumb: "/imageSection/2.jfif",
    image: "/imageSection/11.jpeg",
    quoteTitle: "Aspiring Engineer with a Strong Foundation",
    quote:
      "I gained clarity, routine, and the kind of academic preparation that helped me take on competitive exams with a stronger mindset.",
  },
  {
    name: "games",
    role: "Chess Compidition",
    thumb: "/imageSection/3.avif",
    image: "/imageSection/12.jfif",
    quoteTitle: "From an Aspiring Athlete to an International Cricketer",
    quote:
      "Lots of credit for my success in cricket goes to the school environment that helped me pursue my sports career alongside my academics.",
  },
  {
    name: "Vandana C.",
    role: "Global Research Student",
    thumb: "/imageSection/4.avif",
    image: "/imageSection/9.webp",
    quoteTitle: "From Curiosity to Global Exposure",
    quote:
      "The culture of mentorship, teamwork, and disciplined learning encouraged me to aim higher and explore new academic pathways with confidence.",
  },
];

const campusGalleryItems = [
  {
    title: "Baby League",
    image: "/blog/1.jpeg",
    category: "Academics",
    icon: "users",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Academic Expo",
    image: "/blog/2.png",
    category: "Academics",
    icon: "flask",
    span: "lg:col-span-1 lg:row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Cultural Showcase",
    image: "/blog/3.jpg",
    category: "Arts & Culture",
    icon: "palette",
    span: "lg:col-span-2 lg:row-span-3",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Creative Learning",
    image: "/blog/4.jpg",
    category: "Academics",
    icon: "book",
    span: "lg:col-span-1 lg:row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Sports Spirit",
    image: "/blog/5.webp",
    category: "Sports",
    icon: "ball",
    span: "lg:col-span-2 lg:row-span-1",
    aspect: "aspect-[16/7]",
  },
  {
    title: "Annual Day Celebrations",
    image: "/blog/6.avif",
    category: "Events",
    icon: "calendar",
    span: "lg:col-span-1 lg:row-span-1",
    aspect: "aspect-[4/3]",
  },
];

const branchLocations = [
  {
    name: "Sri Chaitanya Techno School - Ameerpet",
    address:
      "Near Metro Station, Ameerpet Main Road, Hyderabad, Telangana 500016, India",
    image: "/hero-banners/home/3.jpeg",
    rating: "4.8",
    reviews: "124",
    top: "30%",
    left: "36%",
  },
  {
    name: "Sri Chaitanya Olympiad School - Kukatpally",
    address:
      "KPHB Colony, Kukatpally, Hyderabad, Telangana 500072, India",
    image: "/hero-banners/home/5.jpeg",
    rating: "4.7",
    reviews: "98",
    top: "22%",
    left: "28%",
  },
  {
    name: "Sri Chaitanya School - Dilsukhnagar",
    address:
      "Dilsukhnagar Cross Road, Hyderabad, Telangana 500060, India",
    image: "/hero-banners/home/1.jpeg",
    rating: "4.6",
    reviews: "110",
    top: "66%",
    left: "59%",
  },
  {
    name: "Sri Chaitanya School - Miyapur",
    address: "Miyapur Main Road, Hyderabad, Telangana 500049, India",
    image: "/hero-banners/home/2.jpeg",
    rating: "4.5",
    reviews: "87",
    top: "26%",
    left: "22%",
  },
  {
    name: "Sri Chaitanya School - Vanasthalipuram",
    address:
      "Vanasthalipuram Ring Road, Hyderabad, Telangana 500070, India",
    image: "/imageSection/10.jpeg",
    rating: "4.6",
    reviews: "76",
    top: "78%",
    left: "67%",
  },
  {
    name: "Sri Chaitanya School - Secunderabad",
    address:
      "Sardar Patel Road, Secunderabad, Telangana 500003, India",
    image: "/imageSection/11.jpeg",
    rating: "4.7",
    reviews: "92",
    top: "16%",
    left: "48%",
  },
];

const branchFilterControls = [
  {
    label: "Board",
    value: "CBSE",
    accent: "#003A8C",
    options: ["CBSE", "State Board", "ICSE"],
    icon: "cap",
  },
  {
    label: "State",
    value: "Telangana",
    accent: "#D99A00",
    options: ["Telangana", "Andhra Pradesh", "Karnataka"],
    icon: "pin",
  },
  {
    label: "City",
    value: "Hyderabad",
    accent: "#003A8C",
    options: ["Hyderabad", "Rangareddy", "Secunderabad"],
    icon: "building",
  },
  {
    label: "Branch / Area",
    value: "Ameerpet",
    accent: "#D99A00",
    options: ["Ameerpet", "Kukatpally", "Dilsukhnagar", "Miyapur"],
    icon: "tower",
  },
];

const branchNetworkTabs = [
  { label: "Schools", count: "128", icon: "building" },
  { label: "Colleges", count: "24", icon: "cap" },
  { label: "Coaching Centers", count: "36", icon: "user" },
];

const featuredCities = [
  { name: "Delhi", image: "/admission-cities/delhi-city.webp" },
  { name: "Gurugram", image: "/admission-cities/gurugram-city.webp" },
  { name: "Hyderabad", image: "/admission-cities/hyderabad-city.webp" },
  { name: "Indore", image: "/admission-cities/indore-city.webp" },
  { name: "Jabalpur", image: "/admission-cities/jabalpur-city.webp" },
  { name: "Jaipur", image: "/admission-cities/jaipur-city.webp" },
  { name: "Jodhpur", image: "/admission-cities/jodhpur-city.webp" },
  { name: "Mumbai", image: "/admission-cities/mumbai-city.webp" },
  { name: "Pune", image: "/admission-cities/pune-city.webp" },
  { name: "Chennai", image: "/admission-cities/chennai-city.webp" },
  { name: "Kolkata", image: "/admission-cities/kolkata-city.webp" },
  { name: "Bhopal", image: "/admission-cities/bhopal-city.webp" },
  { name: "Nagpur", image: "/admission-cities/nagpur-city.webp" },
  { name: "Rohtak", image: "/admission-cities/rohtak-city.webp" },
  { name: "Sonipat", image: "/admission-cities/sonipat-city.webp" },
  { name: "Tumkur", image: "/admission-cities/tumkur-city.webp" },
  { name: "Ahmednagar", image: "/admission-cities/ahmednagar-city.webp" },
  { name: "Aurangabad", image: "/admission-cities/aurangabad-city.webp" },
];

const admissionBranchesByCity: Record<string, string[]> = {
  Delhi: ["Delhi NCR Branch", "Rohini Branch", "Dwarka Branch"],
  Gurugram: ["Sector 14 Branch", "DLF Phase Branch", "Sohna Road Branch"],
  Hyderabad: ["Madhapur Branch", "Ameerpet Branch", "Kukatpally Branch"],
  Indore: ["Vijay Nagar Branch", "Palasia Branch", "Bhawarkuan Branch"],
  Jabalpur: ["Napier Town Branch", "Madan Mahal Branch", "Adhartal Branch"],
  Jaipur: ["Malviya Nagar Branch", "Vaishali Nagar Branch", "Mansarovar Branch"],
  Jodhpur: ["Ratanada Branch", "Paota Branch", "Shastri Nagar Branch"],
  Mumbai: ["Andheri Branch", "Powai Branch", "Thane Branch"],
  Pune: ["Kothrud Branch", "Wakad Branch", "Hadapsar Branch"],
  Chennai: ["Anna Nagar Branch", "Velachery Branch", "OMR Branch"],
  Kolkata: ["Salt Lake Branch", "New Town Branch", "Behala Branch"],
  Bhopal: ["MP Nagar Branch", "Arera Colony Branch", "Kolar Road Branch"],
  Nagpur: ["Dharampeth Branch", "Manish Nagar Branch", "Wardha Road Branch"],
  Rohtak: ["Model Town Branch", "Sector 14 Branch", "Delhi Road Branch"],
  Sonipat: ["Sector 15 Branch", "Murthal Road Branch", "Civil Lines Branch"],
  Tumkur: ["Ashok Nagar Branch", "Sira Gate Branch", "Gubbi Branch"],
  Ahmednagar: ["Savedi Branch", "Pipeline Road Branch", "MIDC Branch"],
  Aurangabad: ["Cidco Branch", "Jalna Road Branch", "Beed Bypass Branch"],
};

const academicYearOptions = [
  "2025-26",
  "2026-27",
  "2027-28",
];

const admissionsBannerSlides = [
  { type: "image", src: "/hero-banners/home/1.jpeg", width: 1920, height: 500 },
  { type: "image", src: "/hero-banners/home/2.jpeg", width: 1920, height: 500 },
  { type: "image", src: "/hero-banners/home/3.jpeg", width: 1920, height: 500 },
  { type: "image", src: "/hero-banners/home/4.jpeg", width: 1920, height: 500 },
  { type: "image", src: "/hero-banners/home/5.jpeg", width: 1920, height: 501 },
  { type: "video", src: "/hero-banners/home/hero.mp4" },
] as const;

const socialNewsItems = [
  {
    platform: "Instagram",
    handle: "@srichaitanya_schools",
    date: "New Update",
    title: "Campus moments from academic expo week",
    description:
      "Students showcased creative projects, interactive models, and collaborative learning highlights from across the campus.",
    image: "/hero-banners/home/2.jpeg",
    accent: "bg-[#173B6C]",
  },
  {
    platform: "YouTube",
    handle: "Sri Chaitanya Schools",
    date: "Video Highlight",
    title: "Student success story and mentorship spotlight",
    description:
      "A featured story sharing how structured mentoring, discipline, and guidance shaped a high-achieving learner journey.",
    image: "/imageSection/3.avif",
    accent: "bg-[#9FC164]",
  },
  {
    platform: "Facebook",
    handle: "Sri Chaitanya Schools",
    date: "Community Post",
    title: "Celebrating sports, culture, and all-round growth",
    description:
      "Snapshots from inter-school events, cultural performances, and co-curricular achievements shared with our school community.",
    image: "/imageSection/11.jpeg",
    accent: "bg-[#4F4CB0]",
  },
];

const footerGalleryCards = [
  {
    src: "/hero-banners/home/2.jpeg",
    alt: "Students participating in a classroom activity",
    marginLeft: 0,
    rotate: -6,
    y: 14,
    z: 1,
    objectPosition: "center",
  },
  {
    src: "/imageSection/1.webp",
    alt: "Sri Chaitanya students with their teacher",
    marginLeft: -54,
    rotate: 3,
    y: 6,
    z: 5,
    objectPosition: "center",
  },
  {
    src: "/hero-banners/home/3.jpeg",
    alt: "Students studying with faculty guidance",
    marginLeft: -36,
    rotate: -4,
    y: 11,
    z: 7,
    objectPosition: "center",
  },
  {
    src: "/imageSection/10.jpeg",
    alt: "Focused academic classroom session",
    marginLeft: -46,
    rotate: 5,
    y: 4,
    z: 4,
    objectPosition: "center",
  },
  {
    src: "/imageSection/6.webp",
    alt: "Young learners in class",
    marginLeft: -42,
    rotate: -7,
    y: 9,
    z: 8,
    objectPosition: "center",
  },
  {
    src: "/imageSection/11.jpeg",
    alt: "Student exploring library shelves",
    marginLeft: -28,
    rotate: 2,
    y: 2,
    z: 6,
    objectPosition: "center",
  },
  {
    src: "/imageSection/9.webp",
    alt: "Student achievement poster",
    marginLeft: -38,
    rotate: -4,
    y: 8,
    z: 9,
    objectPosition: "center",
  },
  {
    src: "/imageSection/12.jfif",
    alt: "Academic excellence announcement",
    marginLeft: -32,
    rotate: 4,
    y: 7,
    z: 5,
    objectPosition: "center",
  },
  {
    src: "/imageSection/2.jfif",
    alt: "Students celebrating certificates",
    marginLeft: -42,
    rotate: -6,
    y: 5,
    z: 10,
    objectPosition: "center",
  },
  {
    src: "/imageSection/3.avif",
    alt: "Students presenting robotics work",
    marginLeft: -34,
    rotate: 3,
    y: 9,
    z: 6,
    objectPosition: "center",
  },
  {
    src: "/imageSection/4.avif",
    alt: "Student holding a creative project",
    marginLeft: -36,
    rotate: -3,
    y: 3,
    z: 7,
    objectPosition: "center",
  },
  {
    src: "/imageSection/8.jfif",
    alt: "Sri Chaitanya school students",
    marginLeft: -40,
    rotate: 5,
    y: 10,
    z: 3,
    objectPosition: "center",
  },
];

const footerGalleryCardSize = {
  width: 205,
  height: 270,
};

const footerQuickLinks = [
  "Home",
  "About Us",
  "Academics",
  "Admissions",
  "Student Life",
  "Careers",
  "Contact Us",
];

const footerCategories = [
  "CBSE Curriculum",
  "IIT-JEE Advanced",
  "NEET Coaching",
  "Olympiads",
  "Competitive Exams",
];

const footerBranches = [
  {
    name: "Madhapur Main Branch",
    area: "Kavuri Hills, 0.5 km",
    rating: "4.8",
    image: "/hero-banners/home/3.jpeg",
  },
  {
    name: "Ameerpet Branch",
    area: "Ameerpet, 2.1 km",
    rating: "4.6",
    image: "/hero-banners/home/5.jpeg",
  },
  {
    name: "Kukatpally Branch",
    area: "Kukatpally, 6.3 km",
    rating: "4.5",
    image: "/hero-banners/home/1.jpeg",
  },
];

const footerSocialLinks = [
  { label: "Facebook", icon: "facebook", href: "/", color: "#173B6C" },
  { label: "Instagram", icon: "instagram", href: "/", color: "#4F4CB0" },
  { label: "YouTube", icon: "youtube", href: "/", color: "#4F4CB0" },
  { label: "LinkedIn", icon: "linkedin", href: "/", color: "#9FC164" },
];

const FooterSocialIcon = ({ icon }: { icon: string }) => {
  if (icon === "facebook") {
    return <span className="text-[21px] font-bold leading-none">f</span>;
  }

  if (icon === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
        <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "youtube") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
        <rect x="3.5" y="6.5" width="17" height="11" rx="3.2" fill="currentColor" />
        <path d="m10.5 9.6 5 2.9-5 2.9z" fill="#173B6C" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return <span className="text-[13px] font-black uppercase leading-none">in</span>;
  }

  return <span className="text-[18px] font-medium leading-none">X</span>;
};

const FooterCategoryIcon = ({ label }: { label: string }) => {
  const commonPathProps = {
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (label.includes("CBSE")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path {...commonPathProps} d="M4 5.5h6.2A3.8 3.8 0 0 1 14 9.3v9.2H7.8A3.8 3.8 0 0 0 4 22V5.5Z" />
        <path {...commonPathProps} d="M20 5.5h-6.2A3.8 3.8 0 0 0 10 9.3v9.2h6.2A3.8 3.8 0 0 1 20 22V5.5Z" />
      </svg>
    );
  }

  if (label.includes("IIT")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path {...commonPathProps} d="m3 8.5 9-4 9 4-9 4-9-4Z" />
        <path {...commonPathProps} d="M6 11v5c3.2 2.4 8.8 2.4 12 0v-5" />
      </svg>
    );
  }

  if (label.includes("NEET")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path {...commonPathProps} d="M6 4v7a6 6 0 0 0 12 0V4" />
        <path {...commonPathProps} d="M8 4v6a4 4 0 0 0 8 0V4" />
        <path {...commonPathProps} d="M12 17v1.5a2.5 2.5 0 0 0 5 0V17" />
        <circle cx="17" cy="16.5" r="1.5" stroke="currentColor" strokeWidth="1.9" />
      </svg>
    );
  }

  if (label.includes("Olympiads")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path {...commonPathProps} d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
        <path {...commonPathProps} d="M6 5H4v2a4 4 0 0 0 4 4M18 5h2v2a4 4 0 0 1-4 4M12 12v4M9 20h6M10 16h4" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path {...commonPathProps} d="M7 3v3M17 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      <path {...commonPathProps} d="M8 13h3M13 13h3M8 16h3" />
    </svg>
  );
};

const AboutExperienceIcon = ({ icon }: { icon: string }) => {
  const pathProps = {
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.9,
  };

  if (icon === "handshake") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path {...pathProps} d="m8.4 12.2 2.2 2.2a2 2 0 0 0 2.8 0l4.1-4.1" />
        <path {...pathProps} d="m14 7.5 1.4-1.4a3.2 3.2 0 0 1 4.5 0l1.1 1.1-4.2 4.2" />
        <path {...pathProps} d="m10 7.5-1.4-1.4a3.2 3.2 0 0 0-4.5 0L3 7.2l5.6 5.6" />
        <path {...pathProps} d="m7.6 14.4 1.7 1.7M10.2 16.7l1 1" />
      </svg>
    );
  }

  if (icon === "globe") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <circle {...pathProps} cx="12" cy="12" r="8.5" />
        <path {...pathProps} d="M3.8 12h16.4M12 3.5c2.4 2.5 3.7 5.4 3.7 8.5S14.4 18 12 20.5M12 3.5C9.6 6 8.3 8.9 8.3 12S9.6 18 12 20.5" />
      </svg>
    );
  }

  if (icon === "people") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path {...pathProps} d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 20v-1.5A4.5 4.5 0 0 1 8.5 14h0A4.5 4.5 0 0 1 13 18.5V20M12 15.1A4.5 4.5 0 0 1 15.5 14h0A4.5 4.5 0 0 1 20 18.5V20" />
      </svg>
    );
  }

  if (icon === "cap") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path {...pathProps} d="m3 8.5 9-4 9 4-9 4-9-4Z" />
        <path {...pathProps} d="M6.5 11v4.6c3.1 2.2 7.9 2.2 11 0V11M20.5 9v5" />
      </svg>
    );
  }

  if (icon === "briefcase") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path {...pathProps} d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7M4.5 8.5h15v10h-15v-10Z" />
        <path {...pathProps} d="M4.5 12.5c4.7 1.6 10.3 1.6 15 0M12 11.5v3" />
      </svg>
    );
  }

  if (icon === "lightbulb") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path {...pathProps} d="M9 18h6M10 21h4M8.2 14.8a6 6 0 1 1 7.6 0c-.8.6-1.1 1.4-1.1 2.2H9.3c0-.8-.3-1.6-1.1-2.2ZM12 2.5v1.8M4.9 5.4l1.3 1.3M19.1 5.4l-1.3 1.3M2.5 12h1.8M19.7 12h1.8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path {...pathProps} d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z" />
      <path {...pathProps} d="M12 16a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
      <path {...pathProps} d="M12 12h8.5M12 12l4.8-4.8" />
    </svg>
  );
};

const BranchNetworkIcon = ({ icon, className = "h-6 w-6" }: { icon: string; className?: string }) => {
  const pathProps = {
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.9,
  };

  if (icon === "cap") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
        <path {...pathProps} d="m3 8.5 9-4 9 4-9 4-9-4Z" />
        <path {...pathProps} d="M6.5 11v4.8c3.1 2.1 7.9 2.1 11 0V11M20.5 9v5" />
      </svg>
    );
  }

  if (icon === "pin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
        <path {...pathProps} d="M12 21s6.5-5.6 6.5-12A6.5 6.5 0 0 0 5.5 9c0 6.4 6.5 12 6.5 12Z" />
        <circle cx="12" cy="9.2" r="2.2" stroke="currentColor" strokeWidth="1.9" />
      </svg>
    );
  }

  if (icon === "user") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
        <path {...pathProps} d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM4 20c1-3.1 3.7-5 8-5s7 1.9 8 5" />
      </svg>
    );
  }

  if (icon === "tower") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
        <path {...pathProps} d="M4 20h16M6 20V8h5v12M13 20V5h5v15M8.5 11h.01M8.5 15h.01M15.5 9h.01M15.5 13h.01M15.5 17h.01" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <path {...pathProps} d="M4 20h16M6 20V9l6-3 6 3v11M9 20v-4h6v4M9 11h.01M12 11h.01M15 11h.01" />
    </svg>
  );
};

const CityMonumentIcon = ({ city }: { city: string }) => {
  const lineProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  if (city === "Delhi") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M16 75h64M22 75V48h52v27M29 48V31l7-9 7 9v17M53 48V31l7-9 7 9v17" />
        <path {...lineProps} d="M31 75V60a7 7 0 0 1 14 0v15M51 75V60a7 7 0 0 1 14 0v15M22 48l26-18 26 18M20 40h56M36 28h24M36 38h24" />
      </svg>
    );
  }

  if (city === "Gurugram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M18 76h60M24 76V48h48v28M34 48V34h28v14M41 34V22h14v12M31 60h10M55 60h10M31 68h10M55 68h10" />
        <path {...lineProps} d="M25 48h46M35 34h26M48 22v-8M40 22h16M24 40h-8v12h8M72 40h8v12h-8" />
      </svg>
    );
  }

  if (city === "Hyderabad") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M18 76h60M26 76V48h44v28M32 48V24M64 48V24M28 28h8M60 28h8M32 24l4-8 4 8M56 24l4-8 4 8" />
        <path {...lineProps} d="M26 48l22-18 22 18M40 76V62a8 8 0 0 1 16 0v14M36 54h4M56 54h4M32 38h32" />
      </svg>
    );
  }

  if (city === "Indore") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M18 76h60M24 76V42h48v34M29 42V30h38v12M35 30V20h26v10M31 52h6M45 52h6M59 52h6M31 62h6M45 62h6M59 62h6" />
        <path {...lineProps} d="M39 76V64a9 9 0 0 1 18 0v12M24 42h48M32 30h32" />
      </svg>
    );
  }

  if (city === "Jaipur") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M18 76h60M24 76V40h48v36M30 40V30h36v10M36 30V22h24v8M30 52h6M42 52h6M54 52h6M66 52h2M30 62h6M42 62h6M54 62h6M66 62h2" />
        <path {...lineProps} d="M24 40h48M28 34h40M38 76V66a10 10 0 0 1 20 0v10" />
      </svg>
    );
  }

  if (city === "Jodhpur") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M16 76h64M24 76V46h48v30M30 46V34h36v12M36 34V24h24v10" />
        <path {...lineProps} d="M24 46h48M30 58h8M44 58h8M58 58h8M30 68h8M44 68h8M58 68h8M38 76V64a10 10 0 0 1 20 0v12" />
        <path {...lineProps} d="M20 46c4-10 14-16 28-16s24 6 28 16" />
      </svg>
    );
  }

  if (city === "Mumbai") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M16 76h64M24 76V42h48v34M30 42V30h36v12M36 30l12-10 12 10" />
        <path {...lineProps} d="M40 76V62a8 8 0 0 1 16 0v14M24 42h48M32 52h6M44 52h8M58 52h6M32 62h6M58 62h6" />
      </svg>
    );
  }

  if (city === "Pune") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M18 76h60M24 76V44h48v32M30 44V32h36v12M36 32V24h24v8" />
        <path {...lineProps} d="M24 44h48M30 56h36M34 68h28M42 76V64a6 6 0 0 1 12 0v12M30 24h36" />
      </svg>
    );
  }

  if (city === "Chennai") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M16 76h64M28 76V38h40v38M34 38V28h28v10M40 28l8-10 8 10" />
        <path {...lineProps} d="M36 76V60a12 12 0 0 1 24 0v16M28 48h40M34 56h6M56 56h6M34 66h6M56 66h6" />
      </svg>
    );
  }

  if (city === "Kolkata") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M18 76h60M24 76V52h48v24M30 52V38h36v14M38 38V26h20v12" />
        <path {...lineProps} d="M24 52h48M31 63h8M45 63h8M59 63h8M40 76V66a8 8 0 0 1 16 0v10M48 26v-8M42 18h12" />
      </svg>
    );
  }

  if (city === "Bhopal") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M18 76h60M28 76V46h40v30M34 46V34h28v12M38 34c3-8 17-8 20 0" />
        <path {...lineProps} d="M24 46h48M38 76V62a10 10 0 0 1 20 0v14M33 56h6M57 56h6M30 68h10M56 68h10" />
      </svg>
    );
  }

  if (city === "Nagpur") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M18 76h60M30 76V44h36v32M36 44V32h24v12M42 32l6-10 6 10" />
        <path {...lineProps} d="M26 44h44M34 56h8M54 56h8M34 66h8M54 66h8M42 76V62a6 6 0 0 1 12 0v14" />
        <path {...lineProps} d="M24 76c7-8 41-8 48 0" />
      </svg>
    );
  }

  if (city === "Rohtak") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M18 76h60M24 76V48h48v28M30 48V34h36v14M36 34h24" />
        <path {...lineProps} d="M24 48h48M34 60h8M54 60h8M34 68h8M54 68h8M40 76V64a8 8 0 0 1 16 0v12" />
      </svg>
    );
  }

  if (city === "Sonipat") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M18 76h60M26 76V44h44v32M34 44V30h28v14M38 30l10-8 10 8" />
        <path {...lineProps} d="M26 44h44M34 56h6M46 56h6M58 56h6M34 66h6M58 66h6M42 76V64a6 6 0 0 1 12 0v12" />
      </svg>
    );
  }

  if (city === "Tumkur") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M16 76h64M26 76V50h44v26M34 50V36h28v14M40 36V26h16v10" />
        <path {...lineProps} d="M22 50h52M36 62h6M54 62h6M38 76V64a10 10 0 0 1 20 0v12M34 26h28" />
      </svg>
    );
  }

  if (city === "Ahmednagar") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M16 76h64M24 76V42h48v34M30 42V30h36v12M24 42l24-16 24 16" />
        <path {...lineProps} d="M34 76V62a14 14 0 0 1 28 0v14M32 52h6M58 52h6M30 64h8M58 64h8" />
      </svg>
    );
  }

  if (city === "Aurangabad") {
    return (
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
        <path {...lineProps} d="M18 76h60M24 76V44h48v32M30 44V32h36v12M36 32V22h24v10" />
        <path {...lineProps} d="M24 44h48M36 76V60a12 12 0 0 1 24 0v16M32 54h8M56 54h8M32 66h8M56 66h8" />
        <path {...lineProps} d="M38 22c4-6 16-6 20 0" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full">
      <path {...lineProps} d="M18 76h60M44 76V26h8v50M36 76V52h24v24M32 52h32M40 26l8-12 8 12M38 38h20M30 64h36" />
      <path {...lineProps} d="M28 76V64h40v12M40 52V42h16v10M34 38h28M44 14h8" />
    </svg>
  );
};

const StudentStoryBadgeIcon = ({ index }: { index: number }) => {
  const pathProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
  };

  if (index % 2 === 0) {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-7 w-7">
        <path {...pathProps} d="M15 19v8a9 9 0 0 0 18 0v-8" />
        <path {...pathProps} d="m11 15 13-6 13 6-13 6-13-6Z" />
        <path {...pathProps} d="M17 34h14M20 39h8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-7 w-7">
      <path {...pathProps} d="M25 29c6.5-2.4 10.8-8.7 11-18-9.3.2-15.6 4.5-18 11" />
      <path {...pathProps} d="M18 22 10 30l8 1 1 8 8-8" />
      <path {...pathProps} d="M27 16h.01M14 35l-4 4M20 38l-2 4" />
    </svg>
  );
};

const SocialNewsIcon = ({ index }: { index: number }) => {
  const pathProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
  };

  if (index === 0) {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-7 w-7">
        <path {...pathProps} d="M12 26V14l24-6v30l-24-6v-6Z" />
        <path {...pathProps} d="M12 26H7a3 3 0 0 1 0-6h5M17 33l3 7M36 16l5-3M38 24h6M36 32l5 3" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-7 w-7">
        <path {...pathProps} d="M14 10h20v8a10 10 0 0 1-20 0v-8Z" />
        <path {...pathProps} d="M14 13H8v4a8 8 0 0 0 8 8M34 13h6v4a8 8 0 0 1-8 8M24 28v8M18 40h12M20 36h8" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-7 w-7">
      <path {...pathProps} d="M16 20a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM32 20a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM7 40v-3a9 9 0 0 1 18 0v3M23 30a9 9 0 0 1 18 7v3" />
      <path {...pathProps} d="M24 7l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L24 7Z" />
    </svg>
  );
};

const FooterGallery = () => (
  <section className="relative z-30 h-[220px] w-full overflow-hidden bg-white sm:h-[274px] lg:h-[336px]">
    <div className="absolute inset-x-0 bottom-0 h-[220px] sm:h-[274px] lg:h-[336px]">
      <div className="absolute left-1/2 bottom-[-62px] z-10 flex min-w-max -translate-x-1/2 items-end">
        {footerGalleryCards.map((item, index) => {
          const width = `clamp(${Math.round(footerGalleryCardSize.width * 0.52)}px, ${(
            footerGalleryCardSize.width / 19.2
          ).toFixed(2)}vw, ${footerGalleryCardSize.width}px)`;
          const height = `clamp(${Math.round(footerGalleryCardSize.height * 0.62)}px, ${(
            footerGalleryCardSize.height / 13.44
          ).toFixed(2)}vw, ${footerGalleryCardSize.height}px)`;
          const marginLeft =
            item.marginLeft === 0
              ? 0
              : `clamp(${Math.round(item.marginLeft * 0.58)}px, ${(
                  item.marginLeft / 19.2
                ).toFixed(2)}vw, ${item.marginLeft}px)`;

          return (
            <article
              key={`${item.src}-${index}`}
              className="footer-gallery-card relative shrink-0 overflow-hidden border-[4px] border-white bg-white sm:border-[5px]"
              style={{
                "--gallery-card-y": `${item.y}px`,
                "--gallery-card-rotate": `${item.rotate}deg`,
                "--gallery-card-hover-y": `-${Math.max(36, footerGalleryCardSize.height * 0.16)}px`,
                width,
                height,
                marginLeft,
                zIndex: item.z,
              } as CSSProperties}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 52vw, (max-width: 1024px) 26vw, 18vw"
                className="object-cover"
                style={{ objectPosition: item.objectPosition }}
              />
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

const Footer = ({ children }: { children: ReactNode }) => (
  <footer className="relative isolate z-10 -mt-[34px] overflow-hidden border-t border-[#4F4CB0]/80 bg-[radial-gradient(circle_at_12%_5%,rgba(29,78,122,0.28)_0%,rgba(6,21,34,0)_31%),linear-gradient(115deg,#061522_0%,#081B2C_52%,#04101B_100%)] text-[#E9EFF9] sm:-mt-[42px] lg:-mt-[48px]">
    {children}
  </footer>
);

const CampusMomentIcon = ({ icon }: { icon: string }) => {
  const commonPathProps = {
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (icon === "users") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <path {...commonPathProps} d="M16 20v-1.5a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4V20" />
        <path {...commonPathProps} d="M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path {...commonPathProps} d="M20 20v-1.5a3.5 3.5 0 0 0-3-3.45" />
        <path {...commonPathProps} d="M15.5 5.25a3 3 0 0 1 0 5.5" />
      </svg>
    );
  }

  if (icon === "flask") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <path {...commonPathProps} d="M9 3h6" />
        <path {...commonPathProps} d="M10 3v5.3L5.4 17a3 3 0 0 0 2.65 4.4h7.9A3 3 0 0 0 18.6 17L14 8.3V3" />
        <path {...commonPathProps} d="M8 15h8" />
      </svg>
    );
  }

  if (icon === "ball") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <circle {...commonPathProps} cx="12" cy="12" r="8" />
        <path {...commonPathProps} d="m9 5.1 3 2.2 3-2.2" />
        <path {...commonPathProps} d="m6.1 10 3.3 1.4L9 15" />
        <path {...commonPathProps} d="m17.9 10-3.3 1.4L15 15" />
        <path {...commonPathProps} d="m9 18.9 3-2.2 3 2.2" />
      </svg>
    );
  }

  if (icon === "palette") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <path {...commonPathProps} d="M12 4a8 8 0 0 0-2.4 15.65c.9.28 1.4-.24 1.4-.9 0-.52-.38-.95-.38-1.48 0-.74.6-1.27 1.34-1.27h1.42A6.62 6.62 0 0 0 20 9.38C20 6.4 16.42 4 12 4Z" />
        <path {...commonPathProps} d="M7.6 10.2h.01M10 7.6h.01M14 7.6h.01M16.4 10.2h.01" />
      </svg>
    );
  }

  if (icon === "calendar") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <path {...commonPathProps} d="M7 3v3M17 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
        <path {...commonPathProps} d="M8 13h3M13 13h3M8 16h3" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path {...commonPathProps} d="M12 3l1.9 5.4 5.7.15-4.5 3.5 1.6 5.5L12 14.35 7.3 17.55l1.6-5.5-4.5-3.5 5.7-.15L12 3Z" />
    </svg>
  );
};

export default function Home() {
  const studentStoriesSectionRef = useRef<HTMLElement | null>(null);
  const storyCarouselRef = useRef<HTMLDivElement | null>(null);
  const featuredCitiesSectionRef = useRef<HTMLDivElement | null>(null);
  const campusGalleryRef = useRef<HTMLDivElement | null>(null);
  const admissionsBannerVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const aboutPillarHoverTimeoutRef = useRef<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    "About",
  );
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [storyCardsPerView, setStoryCardsPerView] = useState(2);
  const [activeAboutPillarIndex, setActiveAboutPillarIndex] = useState(0);
  const [featuredCitiesPerView, setFeaturedCitiesPerView] = useState(
    featuredCities.length,
  );
  const [featuredCityStartIndex, setFeaturedCityStartIndex] = useState(0);
  const [activeFeaturedCityName, setActiveFeaturedCityName] = useState(
    featuredCities[0].name,
  );
  const [featuredCitySlideDirection, setFeaturedCitySlideDirection] = useState<
    "next" | "prev"
  >("next");
  const [admissionsBannerIndex, setAdmissionsBannerIndex] = useState(3);
  const [aboutPillarsIntroVisible, setAboutPillarsIntroVisible] = useState(false);
  const [featuredCitiesVisible, setFeaturedCitiesVisible] = useState(false);
  const [campusGalleryVisible, setCampusGalleryVisible] = useState(false);
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isAdmissionModalClosing, setIsAdmissionModalClosing] = useState(false);
  const [admissionForm, setAdmissionForm] = useState({
    parentName: "",
    countryCode: "+91",
    mobile: "",
    email: "",
    academicYear: academicYearOptions[1],
    city: featuredCities[0].name,
    branchName: admissionBranchesByCity[featuredCities[0].name][0],
  });

  const visibleFeaturedCities = Array.from(
    { length: Math.min(featuredCitiesPerView, featuredCities.length) },
    (_, offset) =>
      featuredCities[(featuredCityStartIndex + offset) % featuredCities.length],
  );
  const handleFeaturedCityPrev = () => {
    setFeaturedCitySlideDirection("prev");
    setFeaturedCityStartIndex((prev) => {
      const nextIndex = (prev - 1 + featuredCities.length) % featuredCities.length;
      setActiveFeaturedCityName(featuredCities[nextIndex].name);
      return nextIndex;
    });
  };

  const handleFeaturedCityNext = () => {
    setFeaturedCitySlideDirection("next");
    setFeaturedCityStartIndex((prev) => {
      const nextIndex = (prev + 1) % featuredCities.length;
      setActiveFeaturedCityName(featuredCities[nextIndex].name);
      return nextIndex;
    });
  };

  const activateAboutPillar = (index: number, delay = 0) => {
    if (aboutPillarHoverTimeoutRef.current !== null) {
      window.clearTimeout(aboutPillarHoverTimeoutRef.current);
    }

    if (delay <= 0) {
      setActiveAboutPillarIndex(index);
      return;
    }

    aboutPillarHoverTimeoutRef.current = window.setTimeout(() => {
      setActiveAboutPillarIndex(index);
    }, delay);
  };

  const cycleStudentStories = (step: number) => {
    const maxStartIndex = Math.max(studentStories.length - storyCardsPerView, 0);
    const nextIndex =
      activeStoryIndex + step > maxStartIndex
        ? 0
        : activeStoryIndex + step < 0
          ? maxStartIndex
          : activeStoryIndex + step;

    setActiveStoryIndex(nextIndex);

    const section = studentStoriesSectionRef.current;

    if (section && window.innerWidth >= 1024) {
      const scrollableDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = maxStartIndex > 0 ? nextIndex / maxStartIndex : 0;

      window.scrollTo({
        top: section.offsetTop + scrollableDistance * progress,
        behavior: "smooth",
      });
    }
  };

  const handleOpenAdmissionModal = (cityName: string) => {
    const cityBranches = admissionBranchesByCity[cityName] ?? [];

    setIsAdmissionModalClosing(false);
    setAdmissionForm((prev) => ({
      ...prev,
      city: cityName,
      branchName: cityBranches[0] ?? "",
    }));
    setIsAdmissionModalOpen(true);
  };

  const handleCloseAdmissionModal = () => {
    setIsAdmissionModalClosing(true);
    window.setTimeout(() => {
      setIsAdmissionModalOpen(false);
      setIsAdmissionModalClosing(false);
    }, 240);
  };

  const handleAdmissionFormChange = (
    field: keyof typeof admissionForm,
    value: string,
  ) => {
    setAdmissionForm((prev) => ({ ...prev, [field]: value }));
  };

  const selectedCityBranches =
    admissionBranchesByCity[admissionForm.city] ?? [];

  useEffect(() => {
    if (!isMenuOpen && !isAdmissionModalOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isAdmissionModalOpen, isMenuOpen]);

  useEffect(() => {
    return () => {
      if (aboutPillarHoverTimeoutRef.current !== null) {
        window.clearTimeout(aboutPillarHoverTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setAboutPillarsIntroVisible(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setAdmissionsBannerIndex(
        (prev) => (prev + 1) % admissionsBannerSlides.length,
      );
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    admissionsBannerVideoRefs.current.forEach((video, index) => {
      if (!video) {
        return;
      }

      if (index !== admissionsBannerIndex) {
        video.pause();
        return;
      }

      video.currentTime = 0;
      void video.play().catch(() => {
        // Some browsers still block autoplay in edge cases; muted inline playback
        // keeps this eligible once the browser allows media playback.
      });
    });
  }, [admissionsBannerIndex]);

  useEffect(() => {
    const syncStoryCardsPerView = () => {
      setStoryCardsPerView(window.innerWidth >= 1280 ? 2 : 1);
    };

    syncStoryCardsPerView();
    window.addEventListener("resize", syncStoryCardsPerView);

    return () => window.removeEventListener("resize", syncStoryCardsPerView);
  }, []);

  useEffect(() => {
    const syncFeaturedCitiesPerView = () => {
      const nextPerView =
        window.innerWidth >= 1280 ? 7 : featuredCities.length;

      setFeaturedCitiesPerView(nextPerView);
      setFeaturedCityStartIndex((prev) =>
        nextPerView >= featuredCities.length ? 0 : prev,
      );
    };

    syncFeaturedCitiesPerView();
    window.addEventListener("resize", syncFeaturedCitiesPerView);

    return () => window.removeEventListener("resize", syncFeaturedCitiesPerView);
  }, []);

  useEffect(() => {
    const section = featuredCitiesSectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry], currentObserver) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setFeaturedCitiesVisible(true);
        currentObserver.unobserve(section);
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const maxStartIndex = Math.max(studentStories.length - storyCardsPerView, 0);

    const frameId = window.requestAnimationFrame(() => {
      setActiveStoryIndex((prev) => Math.min(prev, maxStartIndex));
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [storyCardsPerView]);

  useEffect(() => {
    const carousel = storyCarouselRef.current;

    if (!carousel) {
      return;
    }

    if (window.innerWidth >= 1024) {
      return;
    }

    const targetCard = carousel.children.item(activeStoryIndex) as HTMLElement | null;

    if (!targetCard) {
      return;
    }

    carousel.scrollTo({
      left: targetCard.offsetLeft,
      behavior: "smooth",
    });
  }, [activeStoryIndex]);

  useEffect(() => {
    const section = studentStoriesSectionRef.current;
    const track = storyCarouselRef.current;

    if (!section || !track) {
      return;
    }

    let frameId = 0;

    const syncPinnedStories = () => {
      frameId = 0;

      if (window.innerWidth < 1024) {
        track.style.transform = "";
        section.style.removeProperty("--student-stories-scroll-height");
        return;
      }

      const viewport = track.parentElement;

      if (!viewport) {
        return;
      }

      const maxTranslate = Math.max(track.scrollWidth - viewport.clientWidth, 0);
      const scrollHeight = Math.max(
        window.innerHeight + maxTranslate + 180,
        window.innerHeight * 1.6,
      );

      section.style.setProperty("--student-stories-scroll-height", `${scrollHeight}px`);

      const scrollableDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const rawProgress = (window.scrollY - section.offsetTop) / scrollableDistance;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      track.style.transform = `translate3d(${-maxTranslate * progress}px, 0, 0)`;

      const maxStartIndex = Math.max(studentStories.length - storyCardsPerView, 0);
      const nextActiveIndex = Math.round(progress * maxStartIndex);

      setActiveStoryIndex((prev) =>
        prev === nextActiveIndex ? prev : nextActiveIndex,
      );
    };

    const requestSync = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(syncPinnedStories);
    };

    requestSync();
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", requestSync);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestSync);
      window.removeEventListener("resize", requestSync);
      track.style.transform = "";
      section.style.removeProperty("--student-stories-scroll-height");
    };
  }, [storyCardsPerView]);

  useEffect(() => {
    const gallery = campusGalleryRef.current;

    if (!gallery) {
      return;
    }

    const revealGallery = () => setCampusGalleryVisible(true);
    const isGalleryInView = () => {
      const rect = gallery.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      return rect.top <= viewportHeight * 0.88 && rect.bottom >= 0;
    };

    if (isGalleryInView()) {
      revealGallery();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry], currentObserver) => {
        if (!entry?.isIntersecting) {
          return;
        }

        revealGallery();
        currentObserver.unobserve(gallery);
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -4% 0px",
      },
    );

    observer.observe(gallery);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-wave-reveal]"),
    );

    if (!elements.length) {
      return;
    }

    const restartReveal = (element: HTMLElement, delay: number) => {
      window.setTimeout(() => {
        element.classList.remove("is-visible");
        void element.offsetWidth;
        element.classList.add("is-visible");
      }, delay);
    };

    const revealIfInView = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= viewportHeight * 0.9 && rect.bottom >= 0) {
        restartReveal(element, 60);
        return true;
      }

      return false;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (!entry.isIntersecting) {
            element.classList.remove("is-visible");
            return;
          }

          if (!element.classList.contains("is-visible")) {
            restartReveal(element, 40);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    const frameId = window.requestAnimationFrame(() => {
      elements.forEach((element) => {
        observer.observe(element);

        if (revealIfInView(element)) {
          return;
        }
      });
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-reveal]"),
    );

    if (!elements.length) {
      return;
    }

    const revealIfInView = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= viewportHeight * 0.92 && rect.bottom >= 0) {
        window.setTimeout(() => {
          element.classList.add("is-visible");
        }, 40);
        return true;
      }

      return false;
    };

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (!entry.isIntersecting) {
            return;
          }

          window.setTimeout(() => {
            element.classList.add("is-visible");
          }, 40);

          currentObserver.unobserve(element);
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -4% 0px",
      },
    );

    const frameId = window.requestAnimationFrame(() => {
      elements.forEach((element) => {
        if (revealIfInView(element)) {
          return;
        }

        observer.observe(element);
      });
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resetDecorDrift = () => {
      root.style.setProperty("--decor-scroll-a-x", "0px");
      root.style.setProperty("--decor-scroll-a-y", "0px");
      root.style.setProperty("--decor-scroll-b-x", "0px");
      root.style.setProperty("--decor-scroll-b-y", "0px");
      root.style.setProperty("--decor-scroll-c-x", "0px");
      root.style.setProperty("--decor-scroll-c-y", "0px");
      root.style.setProperty("--decor-scroll-d-x", "0px");
      root.style.setProperty("--decor-scroll-d-y", "0px");
    };

    if (prefersReducedMotion) {
      resetDecorDrift();
      return;
    }

    let frameId = 0;

    const syncDecorDrift = () => {
      frameId = 0;
      const scrollY = window.scrollY || window.pageYOffset;

      root.style.setProperty(
        "--decor-scroll-a-x",
        `${Math.sin(scrollY / 280) * 10}px`,
      );
      root.style.setProperty(
        "--decor-scroll-a-y",
        `${Math.cos(scrollY / 340) * 14}px`,
      );
      root.style.setProperty(
        "--decor-scroll-b-x",
        `${Math.cos(scrollY / 310) * -12}px`,
      );
      root.style.setProperty(
        "--decor-scroll-b-y",
        `${Math.sin(scrollY / 260) * 10}px`,
      );
      root.style.setProperty(
        "--decor-scroll-c-x",
        `${Math.sin(scrollY / 220) * 8}px`,
      );
      root.style.setProperty(
        "--decor-scroll-c-y",
        `${Math.cos(scrollY / 300) * -12}px`,
      );
      root.style.setProperty(
        "--decor-scroll-d-x",
        `${Math.cos(scrollY / 360) * 14}px`,
      );
      root.style.setProperty(
        "--decor-scroll-d-y",
        `${Math.sin(scrollY / 320) * -9}px`,
      );
    };

    const requestSync = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(syncDecorDrift);
    };

    syncDecorDrift();
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", requestSync);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestSync);
      window.removeEventListener("resize", requestSync);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const headerIsSolid = true;
  const headerTextClass = headerIsSolid ? "text-[#173B6C]" : "!text-[#E9EFF9]";
  const logoTitleClass = headerIsSolid ? "text-[#173B6C]" : "text-[#E9EFF9]";
  const logoSubtitleClass = headerIsSolid ? "text-[#9FC164]" : "text-[#E9EFF9]/78";
  const headerEnterClass = headerIsSolid
    ? "translate-y-0 opacity-100"
    : "-translate-y-2 opacity-95";

  return (
    <main className="min-h-screen overflow-x-clip bg-[#E9EFF9]">
      <header
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 transform-gpu border-b transition-[clip-path,opacity,box-shadow,background-color,backdrop-filter] duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
            headerIsSolid
              ? "border-transparent bg-transparent opacity-100 shadow-none [clip-path:inset(0_0_0_0_round_0px)]"
              : "border-transparent bg-[#E9EFF9]/0 opacity-0 shadow-none [clip-path:inset(0_0_100%_0_round_0px)]"
          }`}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1510px] px-2 sm:px-2.5 lg:px-3">
          <div
            className={`relative overflow-hidden flex items-center justify-between gap-4 rounded-[18px] border border-[#D6E8C8]/70 bg-white/90 px-3 py-3 shadow-[0_14px_34px_rgba(23,59,108,0.10)] backdrop-blur-xl transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-[#9FC164] min-[1317px]:mt-4 min-[1317px]:grid min-[1317px]:grid-cols-[240px_minmax(0,1fr)] min-[1317px]:items-center min-[1317px]:gap-0 min-[1317px]:rounded-[24px] min-[1317px]:border min-[1317px]:border-[#D6E8C8]/80 min-[1317px]:bg-white/92 min-[1317px]:px-5 min-[1317px]:py-3 min-[1317px]:shadow-[0_18px_48px_rgba(23,59,108,0.12)] min-[1317px]:backdrop-blur-xl ${headerEnterClass}`}
            style={{
              animation:
                "navDropIn 880ms cubic-bezier(0.22,1,0.36,1) 100ms both",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-[360px] bg-[#DCEBCF]/72 min-[1317px]:block"
              style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }}
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 150 92"
              className="pointer-events-none absolute bottom-[-10px] right-[206px] hidden h-[74px] w-[120px] text-[#9FC164]/34 min-[1317px]:block"
              fill="none"
            >
              <path
                d="M16 76C40 40 79 21 133 14C100 49 65 70 16 76Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M18 75C56 62 92 39 131 15M47 64 38 43M65 54 56 31M82 43 75 24M101 31 94 19"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
            </svg>
            <Link
              href="/"
              className="relative z-10 shrink-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] min-[1317px]:pl-2"
              aria-label="Sri Chaitanya Schools Home"
            >
              <div className="flex items-center gap-3 min-[1317px]:px-1 min-[1317px]:py-1">
                <Image
                  src="/logos/logo_transparent_fixed.png"
                  alt="Sri Chaitanya Schools logo"
                  width={92}
                  height={92}
                  priority
                  className="h-[58px] w-auto"
                />
                <div className="flex min-w-[220px] flex-col">
                  <span
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className={`whitespace-nowrap text-[18px] font-extrabold tracking-[-0.04em] transition-colors duration-500 sm:text-[20px] ${logoTitleClass}`}
                  >
                    Sri Chaitanya
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className={`mt-0.5 text-[11px] font-medium tracking-[-0.01em] transition-colors duration-500 sm:text-[12px] ${logoSubtitleClass}`}
                  >
                    Madhapur, Hyderabad
                  </span>
                </div>
              </div>
            </Link>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
              className={`relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_6px_18px_rgba(23,59,108,0.10)] transition-all min-[1317px]:hidden ${
                headerIsSolid
                  ? "border-[#4F4CB0] bg-[#E9EFF9] text-[#4F4CB0] hover:border-[#4F4CB0] hover:bg-[#E9EFF9]"
                  : "border-[#E9EFF9]/35 bg-[#E9EFF9]/10 text-[#E9EFF9] backdrop-blur-md hover:border-[#E9EFF9]/60 hover:bg-[#E9EFF9]/16"
              }`}
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-[2px] w-5 rounded-full bg-current" />
                <span className="block h-[2px] w-4 rounded-full bg-current" />
                <span className="block h-[2px] w-5 rounded-full bg-current" />
              </span>
            </button>

            <div className="relative z-10 hidden min-w-0 flex-1 flex-col items-end min-[1317px]:flex">
              <div className="flex w-full items-center justify-end gap-2">
                <nav
                  aria-label="Primary"
                  className="flex items-center justify-end gap-1"
                >
                  {navLinks.map((item, index) => (
                    <div
                      key={item.label}
                      className="group relative flex items-center"
                    >
                      <Link
                        href={item.href}
                        className={`px-[10px] text-[15px] font-semibold leading-none tracking-[-0.01em] transition-colors duration-300 hover:text-[#214F3B] ${headerTextClass}`}
                      >
                        {item.label}
                      </Link>
                      {item.submenu ? (
                        <div className="pointer-events-none absolute left-0 top-full z-30 pt-[16px] opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                          <div className="min-w-[250px] rounded-[18px] border border-[#4F4CB0] bg-[#E9EFF9] py-4 shadow-[0_22px_55px_rgba(23,59,108,0.14)]">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem}
                                href={getSubmenuHref(subItem)}
                                className="block px-8 py-3 text-[15px] font-medium text-[#173B6C] transition-colors hover:bg-[#E9EFF9] hover:text-[#4F4CB0]"
                              >
                                {subItem}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : null}
                      {index < navLinks.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="mx-[7px] h-[4px] w-[4px] rounded-full bg-[#9FC164]/70"
                        />
                      ) : null}
                    </div>
                  ))}
                </nav>
                <Link
                  href="/"
                  aria-label="Search"
                  className="ml-[14px] inline-flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#8EA995]/70 bg-white/82 text-[#12372B] shadow-[0_10px_22px_rgba(23,59,108,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#214F3B] hover:text-[#214F3B]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="m20 20-4.2-4.2M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                    />
                  </svg>
                </Link>
                <Link
                  href="/"
                  className="group relative !text-white z-10 ml-[8px] inline-flex min-h-[48px] min-w-[170px] items-center justify-center overflow-hidden rounded-full bg-[#214F3B] px-6 py-3 text-[13px] font-extrabold uppercase leading-none tracking-[0.04em] shadow-[0_14px_28px_rgba(33,79,59,0.26)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:!text-white hover:shadow-[0_18px_34px_rgba(33,79,59,0.32)]"
                >
                  <span className="absolute inset-0 bg-[linear-gradient(135deg,#214F3B_0%,#173B2D_62%,#9FC164_100%)] opacity-0 transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100" />
                  <span className="absolute inset-x-5 top-[7px] h-[1px] bg-[#E9EFF9]/60 opacity-70 transition-opacity duration-400 group-hover:opacity-100" />
                  <span className="absolute -left-[38%] top-[-15%] h-[130%] w-[22%] rotate-[18deg] bg-[linear-gradient(90deg,rgba(233,239,249,0)_0%,rgba(233,239,249,0.18)_22%,rgba(233,239,249,0.72)_50%,rgba(233,239,249,0.18)_78%,rgba(233,239,249,0)_100%)] opacity-0 blur-[1px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:left-[118%] group-hover:opacity-100" />
                  <span className="relative z-10 inline-flex items-center gap-4">
                    <span>APPLY NOW</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 group-hover:scale-110"
                    >
                      <path
                        d="M3.75 10h12.5M11.25 5.5 16.25 10l-5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`fixed inset-0 z-40 bg-[#173B6C]/45 transition-opacity duration-300 min-[1317px]:hidden ${
              isMenuOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
            onClick={closeMenu}
          />

          <aside
            aria-label="Mobile navigation"
            className={`fixed inset-y-0 left-0 z-50 flex w-[377px] max-w-[88vw] flex-col bg-[#E9EFF9] shadow-[0_12px_40px_rgba(23,59,108,0.18)] transition-transform duration-300 min-[1317px]:hidden ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-[#4F4CB0] px-5 py-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-3"
                aria-label="Sri Chaitanya Schools Home"
              >
                <Image
                  src="/logos/logo_transparent_fixed.png"
                  alt="Sri Chaitanya Schools logo"
                  width={92}
                  height={92}
                  className="h-11 w-auto"
                />
                <div className="flex flex-col">
                  <span
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className="text-[16px] font-extrabold tracking-[-0.04em] text-[#173B6C]"
                  >
                    Sri Chaitanya
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className="mt-0.5 text-[10px] font-medium tracking-[-0.01em] text-[#9FC164]"
                  >
                    Madhapur, Hyderabad
                  </span>
                </div>
              </Link>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#4F4CB0] bg-[#E9EFF9] text-[#4F4CB0] transition-all hover:border-[#4F4CB0] hover:bg-[#E9EFF9]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  className="h-4.5 w-4.5"
                >
                  <path d="M6 6 18 18" />
                  <path d="M18 6 6 18" />
                </svg>
              </button>
            </div>

            <nav
              aria-label="Primary mobile"
              className="flex flex-col px-5 py-4 text-[15px] font-semibold text-[#173B6C]"
            >
              {navLinks.map((item) =>
                item.submenu ? (
                  <div key={item.label} className="border-b border-[#4F4CB0]">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileDropdown((current) =>
                          current === item.label ? null : item.label,
                        )
                      }
                      className="flex w-full items-center justify-between py-3 text-left font-semibold text-[#4F4CB0]"
                    >
                      <span>{item.label}</span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E9EFF9] text-[#4F4CB0]">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={`h-4 w-4 transition-transform ${
                            openMobileDropdown === item.label
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        >
                          <path d="m6 14 6-6 6 6" />
                        </svg>
                      </span>
                    </button>

                    {openMobileDropdown === item.label ? (
                      <div className="bg-[#E9EFF9] pb-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem}
                            href={getSubmenuHref(subItem)}
                            onClick={closeMenu}
                            className="block px-6 py-3 text-[15px] font-medium text-[#173B6C] transition-colors hover:text-[#4F4CB0]"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="border-b border-[#4F4CB0] py-3 transition-colors hover:text-[#4F4CB0]"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="px-5 pb-5 pt-2">
              <Link
                href="/"
                onClick={closeMenu}
                className="group relative inline-flex min-h-[46px] w-full items-center justify-center overflow-hidden rounded-[6px] bg-[#4F4CB0] px-6 py-3 text-[13px] font-extrabold uppercase tracking-[0.04em] !text-[#173B6C] shadow-[0_14px_28px_rgba(79,76,176,0.26)] transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:!text-white"
              >
                <span className="absolute inset-0 bg-[#173B6C]/55 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-origin:left_center] scale-x-0 group-hover:scale-x-100" />
                <span className="relative z-10 inline-flex items-center gap-4">
                  <span>APPLY NOW</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M3.75 10h12.5M11.25 5.5 16.25 10l-5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </aside>
        </div>

        {isUnderMaintenance ? (
          <div className="overflow-hidden border-t border-[#173B6C] bg-[#173B6C] py-2.5">
            <div className="flex w-max min-w-full animate-[marquee_26s_linear_infinite] whitespace-nowrap">
              <div className="flex shrink-0 items-center gap-12 pr-12 text-[15px] font-semibold tracking-[0.01em] text-[#4F4CB0]">
                <span>{announcementMessage}</span>
                <span className="text-[#E9EFF9]/50">|</span>
              </div>
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center gap-12 pr-12 text-[15px] font-semibold tracking-[0.01em] text-[#4F4CB0]"
              >
                <span>{announcementMessage}</span>
                <span className="text-[#E9EFF9]/50">|</span>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <section className="home-hero-section pt-8 max-[600px]:pt-0 min-[1317px]:pt-0">
        <div className="relative w-full overflow-hidden">
          <picture className="home-hero-media block">
            <source
              media="(max-width: 600px)"
              srcSet="/mobile-header.png?v=20260508-1"
            />
            <img
              src="/header-new.png?v=20260508-1"
              alt="Sri Chaitanya header banner"
              loading="eager"
              className="home-hero-image block h-auto w-full"
            />
          </picture>
          <div className="absolute inset-0 z-[2] flex w-full items-start">
            <div className="home-hero-content-frame px-5 pt-[14%] sm:px-8 sm:pt-[13%] lg:px-12 lg:pt-[12%] xl:px-16 xl:pt-[10.5%]">
              <div className="home-hero-copy ml-4 max-w-[560px] sm:ml-8 lg:ml-12 xl:max-w-[640px]">
                <p
                  data-section-reveal
                  className="home-hero-eyebrow section-reveal-up inline-flex items-center gap-1.5 rounded-full border border-[#E9EFF9]/70 bg-[#E9EFF9]/50 px-2 py-1 text-[6px] font-bold uppercase tracking-[0.24em] text-[#173B6C] shadow-[0_10px_24px_rgba(23,59,108,0.08)] backdrop-blur-[6px] sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[8px] md:text-[9px] lg:gap-3 lg:px-4 lg:py-2 lg:text-[12px]"
                  style={{ animationDelay: "80ms" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4F4CB0] lg:h-2 lg:w-2" />
                  Future-Ready Learning
                </p>
                <h1
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                  className="home-hero-title mt-3 max-w-[620px] text-[23px] font-light leading-[1.08] tracking-[-0.06em] text-[#173B6C] sm:mt-4 sm:text-[30px] md:text-[32px] lg:mt-5 lg:text-[54px] xl:text-[54px]"
                >
                  <span
                    className="block"
                    style={{
                      animation:
                        "heroLineReveal 880ms cubic-bezier(0.16,1,0.3,1) 120ms both",
                    }}
                  >
                    Shaping bright
                  </span>
                  <span
                    className="block font-extrabold text-[#173B6C]"
                    style={{
                      animation:
                        "heroLineReveal 920ms cubic-bezier(0.16,1,0.3,1) 260ms both",
                    }}
                  >
                    futures with
                  </span>
                  <span
                    className="block font-extrabold text-[#173B6C]"
                    style={{
                      animation:
                        "heroLineReveal 920ms cubic-bezier(0.16,1,0.3,1) 400ms both",
                    }}
                  >
                    academic excellence
                  </span>
                </h1>
                <p
                  className="home-hero-description mt-3 max-w-[245px] text-[9px] leading-[1.5] text-[#9FC164] sm:mt-4 sm:max-w-[360px] sm:text-[13px] sm:leading-[1.6] lg:mt-6 lg:max-w-[520px] lg:text-[18px] lg:leading-7"
                  style={{
                    animation:
                      "heroTextReveal 980ms cubic-bezier(0.22,1,0.36,1) 520ms both",
                  }}
                >
                  Discover a nurturing learning environment designed to help
                  every student grow with confidence, discipline, and purpose.
                </p>
                <Link
                  href="/"
                  className="home-hero-action group relative mt-4 inline-flex min-h-[42px] min-w-[188px] items-center justify-between gap-3 overflow-hidden rounded-[14px] border border-white/75 bg-white px-3 py-2 !text-[#173B6C] shadow-[0_10px_24px_rgba(23,59,108,0.14),inset_0_1px_0_rgba(233,239,249,0.9)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#4F4CB0]/45 hover:shadow-[0_16px_34px_rgba(23,59,108,0.20)] sm:mt-5 sm:min-h-[50px] sm:min-w-[230px] sm:px-4 sm:py-2.5 lg:mt-8 lg:min-h-[58px] lg:min-w-[264px] lg:rounded-[18px] lg:px-5 lg:py-3"
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4F4CB0] text-white shadow-[0_6px_14px_rgba(79,76,176,0.32)] transition-transform duration-300 group-hover:scale-105 sm:h-8 sm:w-8 lg:h-9 lg:w-9">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 sm:h-4.5 sm:w-4.5 lg:h-5 lg:w-5"
                    >
                      <path
                        d="M16.6 3.8 3.8 9.6c-.7.3-.7 1.2.1 1.4l4 1 1.1 4c.2.7 1.1.8 1.4.1l5.8-12.8c.2-.4-.2-.8-.6-.6Z"
                        fill="currentColor"
                      />
                      <path
                        d="m8.2 11.8 3.9-3.9"
                        stroke="#E9EFF9"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="flex min-w-0 flex-1 items-center justify-start text-left">
                    <span className="whitespace-nowrap text-[10px] font-extrabold uppercase leading-none tracking-[0.04em] text-[#173B6C] sm:text-[13px] lg:text-[15px]">
                      Admission 2026-2027
                    </span>
                  </span>
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#173B6C] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#E9EFF9] sm:h-7 sm:w-7 lg:h-8 lg:w-8">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    >
                      <path
                        d="M4 10h11.5M11 5.5 15.5 10 11 14.5"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-0">
        <div className="px-3 pb-0 pt-8 sm:px-5 sm:pb-0 sm:pt-10 lg:px-8 lg:pb-0 lg:pt-12">
          <div className="mx-auto w-full max-w-[1320px]">
            <div className="relative overflow-hidden rounded-[24px] bg-transparent px-4 pb-0 pt-4 sm:rounded-[26px] sm:px-5 sm:pb-0 sm:pt-5">

              <div className="relative aspect-[1920/500] overflow-hidden rounded-[18px] bg-transparent shadow-[0_18px_44px_rgba(23,59,108,0.14)] sm:rounded-[20px]">
                <div
                  className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
                  style={{
                    transform: `translate3d(-${admissionsBannerIndex * 100}%, 0, 0)`,
                  }}
                >
                  {admissionsBannerSlides.map((slide, index) => (
                    <div
                      key={slide.src}
                      aria-hidden={index !== admissionsBannerIndex}
                      className="relative h-full min-w-full flex-none"
                    >
                      {slide.type === "image" ? (
                        <Image
                          src={slide.src}
                          alt={`Admissions banner ${index + 1}`}
                          width={slide.width}
                          height={slide.height}
                          sizes="100vw"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <video
                          ref={(element) => {
                            admissionsBannerVideoRefs.current[index] = element;
                          }}
                          src={slide.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-3">
                {admissionsBannerSlides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    aria-label={`Go to banner slide ${index + 1}`}
                    onClick={() => setAdmissionsBannerIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === admissionsBannerIndex
                        ? "h-[6px] w-7 bg-[#4F4CB0]"
                        : "h-[6px] w-[6px] bg-[#E9EFF9]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LegacyStatsSection />

      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_50%_0,#fff_0%_48%,#eaffc4_100%)] px-2 pb-24 pt-8 sm:px-2.5 sm:pb-24 sm:pt-12 lg:px-3 lg:pb-28 lg:pt-14">
        <div className="relative mx-auto w-full max-w-[1510px]">
          <div
            data-section-reveal
            ref={featuredCitiesSectionRef}
            className="section-reveal-up"
            style={{ animationDelay: "180ms" }}
          >
            <h3
              data-section-reveal
              style={{ fontFamily: "var(--font-righteous), Righteous, sans-serif" }}
              className="section-reveal-up mb-8 bg-[linear-gradient(135deg,#a9ff14_0%,#348aff_34%,#1c1b3f_64%,#0b54cf_100%)] bg-clip-text text-center text-[28px] font-normal tracking-[0] text-transparent sm:mb-10 sm:text-[36px]"
            >
              Explore Admission Details in Your Famous Cities
            </h3>

            <div className="flex items-center justify-center gap-3 sm:gap-5">
              <button
                type="button"
                aria-label="Previous city"
                className="hidden h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-[#4F4CB0]/28 bg-white/72 text-[#4F4CB0] shadow-[0_16px_36px_rgba(79,76,176,0.14)] transition-all duration-300 hover:-translate-x-1 hover:border-[#4F4CB0]/55 hover:bg-white xl:inline-flex"
                onClick={handleFeaturedCityPrev}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M14.5 6 8.5 12l6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="grid min-w-0 flex-1 grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 xl:grid-cols-7">
                {visibleFeaturedCities.map((city, index) => {
                  const isFeaturedCityActive =
                    city.name === activeFeaturedCityName;

                  return (
                    <button
                      type="button"
                      key={`${city.name}-${featuredCityStartIndex}-${index}`}
                      onMouseEnter={() => setActiveFeaturedCityName(city.name)}
                      onFocus={() => setActiveFeaturedCityName(city.name)}
                      onClick={() => handleOpenAdmissionModal(city.name)}
                      className={`city-carousel-card group relative flex min-h-[164px] flex-col items-center justify-between overflow-hidden rounded-[22px] border bg-white/72 px-4 py-5 text-center shadow-[0_24px_54px_rgba(107,147,214,0.10)] backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#4F4CB0]/50 hover:bg-white sm:min-h-[210px] ${
                        featuredCitiesVisible
                          ? "translate-y-0 scale-100 opacity-100"
                          : "translate-y-6 scale-[0.96] opacity-0"
                      } ${
                        isFeaturedCityActive
                          ? "border-[#4F4CB0]/85"
                          : "border-[#6B93D6]/32"
                      }`}
                      style={
                        {
                          "--city-card-delay": `${index * 70}ms`,
                          "--city-card-x":
                            featuredCitySlideDirection === "next"
                              ? "28px"
                              : "-28px",
                          transitionDelay: `${120 + index * 70}ms`,
                        } as CSSProperties
                      }
                    >
                      <div
                        className={`h-[86px] w-[94px] transition-all duration-500 group-hover:scale-105 sm:h-[108px] sm:w-[112px] ${
                          isFeaturedCityActive
                            ? "text-[#4F4CB0]"
                            : "text-[#9FC164]"
                        }`}
                      >
                        <CityMonumentIcon city={city.name} />
                      </div>
                      <span
                        className={`text-[15px] font-extrabold transition-colors sm:text-[18px] ${
                          isFeaturedCityActive
                            ? "text-[#4F4CB0]"
                            : "text-[#2B3648]"
                        }`}
                      >
                        {city.name}
                      </span>
                      <span className="flex h-4 items-center justify-center gap-2">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isFeaturedCityActive
                              ? "bg-[#4F4CB0]"
                              : "bg-[#4F4CB0]/75"
                          }`}
                        />
                        <span
                          className={`h-1.5 rounded-full transition-all ${
                            isFeaturedCityActive
                              ? "w-8 bg-[#4F4CB0]"
                              : "w-0 bg-[#4F4CB0]/0"
                          }`}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                aria-label="Next city"
                className="hidden h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-[#4F4CB0]/28 bg-white/72 text-[#4F4CB0] shadow-[0_16px_36px_rgba(79,76,176,0.14)] transition-all duration-300 hover:translate-x-1 hover:border-[#4F4CB0]/55 hover:bg-white xl:inline-flex"
                onClick={handleFeaturedCityNext}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="m9.5 6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%_52%,#3c85ff57_100%)] px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-[72px] lg:px-8 lg:pb-24 lg:pt-20">
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-dots absolute left-4 top-10 hidden h-[118px] w-[150px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(0deg)",
              "--decor-x": "-18px",
              "--decor-y": "-16px",
              "--decor-opacity": "0.62",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-arc absolute -right-[90px] -top-[94px] hidden h-[268px] w-[430px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(18deg)",
              "--decor-start-rotate": "30deg",
              "--decor-x": "24px",
              "--decor-y": "-28px",
              "--decor-opacity": "0.82",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-diamond absolute right-[5%] top-[72px] hidden h-[96px] w-[96px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(45deg)",
              "--decor-start-rotate": "25deg",
              "--decor-x": "18px",
              "--decor-y": "-12px",
              "--decor-opacity": "0.6",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-slab absolute -left-[132px] bottom-[-76px] hidden h-[210px] w-[330px] sm:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(24deg)",
              "--decor-start-rotate": "10deg",
              "--decor-x": "-24px",
              "--decor-y": "30px",
              "--decor-opacity": "0.64",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-ring absolute -left-[34px] bottom-[62px] hidden h-[184px] w-[150px] sm:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(-12deg)",
              "--decor-start-rotate": "-28deg",
              "--decor-x": "-20px",
              "--decor-y": "22px",
              "--decor-opacity": "0.78",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[94px] right-4 hidden h-[130px] w-[126px] opacity-50 lg:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(107,147,214,0.32) 2.5px, transparent 3px)",
            backgroundSize: "20px 20px",
          }}
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="absolute left-0 top-[245px] hidden h-[220px] w-full text-[#9FC164]/12 lg:block"
        >
          <path
            d="M-40 12C210 170 375 160 610 130C844 101 1033 151 1480 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
          />
          <path
            d="M-20 52C226 206 395 197 622 164C864 129 1041 180 1480 42"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          />
        </svg>

        <div className="relative mx-auto w-full max-w-[1510px]">
          <div className="mx-auto max-w-[1030px] text-center">


            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
              className="legacy-heading-wave wave-reveal-heading mt-5 text-[34px] font-extrabold leading-[1.08] tracking-[0] text-[#101A5D] sm:text-[48px] lg:text-[57px]"
            >
              <span>
                Experience Global Education Across{" "}
                <span className="relative inline-block pb-2 text-[#D99A00]">
                  States
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 120 18"
                    className="legacy-shape-underline absolute -bottom-2 left-1/2 h-5 w-[116%] -translate-x-1/2 text-[#4F4CB0]"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M5 12C36 6 80 5 116 8"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                    <path
                      d="M38 16C62 12 92 11 112 13"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="3.4"
                    />
                  </svg>
                </span>
              </span>
            </h2>

            <svg
              aria-hidden="true"
              viewBox="0 0 118 12"
              className="mx-auto mt-7 block h-3 w-[118px] text-[#4F4CB0]"
            >
              <path
                d="M0 6H44"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <circle cx="59" cy="6" r="5" fill="currentColor" />
              <path
                d="M74 6H118"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>

            <p
              data-section-reveal
              className="legacy-copy-reveal legacy-delay-4 mx-auto mt-5 max-w-[760px] text-[15px] font-semibold leading-7 text-[#7280A3] sm:text-[17px] sm:leading-8"
            >
              Discover collaborative programs, cultural exposure, research
              pathways, and future-ready learning experiences that connect
              students across regions.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-[1510px] flex-col gap-3 lg:min-h-[390px] lg:flex-row lg:items-stretch lg:gap-4">
            {(() => {
              const panelIcons: Record<string, string> = {
                Collaborations: "handshake",
                "Language and Culture": "globe",
                "International Research Projects": "people",
                "Global Faculty": "cap",
                "Career Pathways": "briefcase",
              };
              const panelColors: Record<string, string> = {
                Collaborations: "#9FC164",
                "Language and Culture": "#4F4CB0",
                "International Research Projects": "#9FC164",
                "Global Faculty": "#4F4CB0",
                "Career Pathways": "#4F4CB0",
              };

              return (
                <>
                  {aboutExperiencePillars.map((pillar, index) => {
                    const color = panelColors[pillar.label] ?? "#4F4CB0";
                    const isActive = index === activeAboutPillarIndex;

                    return (
                      <button
                        key={pillar.label}
                        type="button"
                        onMouseEnter={() => activateAboutPillar(index, 70)}
                        onFocus={() => activateAboutPillar(index)}
                        onClick={() => activateAboutPillar(index)}
                        className={`group relative overflow-hidden rounded-[22px] border bg-white/86 text-left shadow-[0_24px_58px_rgba(107,147,214,0.16)] outline-none backdrop-blur-sm transition-[flex,flex-basis,flex-grow,opacity,transform,border-color,box-shadow,min-height,width] duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:ring-2 focus-visible:ring-[#4F4CB0]/40 ${
                          isActive
                            ? "min-h-[318px] border-white p-0 sm:min-h-[390px] lg:flex-[1_1_1120px]"
                            : "min-h-[96px] p-4 lg:flex-[0_0_82px] lg:px-3 lg:py-4"
                        } ${
                          aboutPillarsIntroVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-7 opacity-0"
                        }`}
                        style={{
                          borderColor: isActive ? "#FFFFFF" : `${color}30`,
                          transitionDelay: `${index * 70}ms`,
                        }}
                        aria-pressed={isActive}
                      >
                        <div
                          className={`absolute inset-0 transition-[opacity,transform,filter] duration-[760ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isActive
                              ? "scale-100 opacity-100 blur-0"
                              : "scale-[1.025] opacity-0 blur-[2px]"
                          }`}
                        >
                          <Image
                            key={pillar.image}
                            src={pillar.image}
                            alt={pillar.title}
                            fill
                            sizes="(max-width: 1023px) 100vw, 78vw"
                            className="rounded-[18px] object-cover"
                            style={{
                              animation: isActive
                                ? "panelMediaReveal 680ms cubic-bezier(0.22,1,0.36,1) both"
                                : undefined,
                            }}
                            priority={index === 0}
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-[18px] border-[10px] border-white" />
                          <div className="absolute inset-0 rounded-[18px] bg-[linear-gradient(180deg,rgba(16,26,93,0)_70%,rgba(16,26,93,0.08)_100%)]" />
                        </div>

                        <div
                          className={`relative z-10 flex h-full min-h-[96px] items-center gap-4 transition-all duration-500 lg:min-h-[330px] lg:flex-col lg:justify-between ${
                            isActive
                              ? "pointer-events-none translate-y-4 opacity-0"
                              : "translate-y-0 opacity-100"
                          }`}
                        >
                          <span
                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[7px] border-white shadow-[0_12px_26px_rgba(16,26,93,0.14)]"
                            style={{
                              backgroundColor: color,
                              color:
                                pillar.label === "Language and Culture"
                                  ? "#101A5D"
                                  : "#FFFFFF",
                            }}
                          >
                            <AboutExperienceIcon
                              icon={panelIcons[pillar.label] ?? "globe"}
                            />
                          </span>
                          <span
                            className="hidden h-px w-9 lg:block"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-[16px] font-extrabold leading-tight text-[#101A5D] lg:[writing-mode:vertical-rl] lg:rotate-180 lg:text-[19px]">
                            {pillar.label.replace(" Projects", " Research")}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </>
              );
            })()}
          </div>


        </div>
      </section>

      {isAdmissionModalOpen ? (
        <div
          data-lenis-prevent
          onClick={handleCloseAdmissionModal}
          className={`fixed inset-0 z-[80] flex items-center justify-center px-4 py-6 backdrop-blur-[4px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isAdmissionModalClosing
              ? "bg-[#173B6C]/0 opacity-0"
              : "bg-[#173B6C]/58 opacity-100"
          }`}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className={`relative w-full max-w-[980px] overflow-hidden rounded-[28px] bg-[#E9EFF9] shadow-[0_28px_90px_rgba(23,59,108,0.28)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isAdmissionModalClosing
                ? "translate-y-6 scale-[0.94] opacity-0"
                : "translate-y-0 scale-100 opacity-100"
            }`}
          >
            <button
              type="button"
              aria-label="Close admission form"
              onClick={handleCloseAdmissionModal}
              className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#4F4CB0] bg-[#E9EFF9] text-[#173B6C] transition-colors hover:bg-[#E9EFF9]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="m6 6 8 8M14 6l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div
              className={`border-b border-[#4F4CB0] px-6 py-6 text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-8 ${
                isAdmissionModalClosing
                  ? "translate-y-2 opacity-0"
                  : "translate-y-0 opacity-100 delay-75"
              }`}
            >
              <h3
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                className="text-[28px] font-medium tracking-[-0.03em] text-[#173B6C]"
              >
                Admissions open
              </h3>
              <p className="mt-2 text-[14px] text-[#9FC164]">
                Enquire for admission details in {admissionForm.city}.
              </p>
            </div>

            <form
              onSubmit={(event) => event.preventDefault()}
              className={`grid gap-5 px-6 py-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:grid-cols-2 sm:px-8 sm:py-8 ${
                isAdmissionModalClosing
                  ? "translate-y-3 opacity-0"
                  : "translate-y-0 opacity-100 delay-150"
              }`}
            >
              <label className="block">
                <span className="mb-2 block text-[15px] font-medium text-[#9FC164]">
                  Parent Name*
                </span>
                <input
                  type="text"
                  value={admissionForm.parentName}
                  onChange={(event) =>
                    handleAdmissionFormChange("parentName", event.target.value)
                  }
                  className="h-12 w-full rounded-[16px] border border-[#4F4CB0] px-4 text-[15px] text-[#173B6C] outline-none transition-colors focus:border-[#4F4CB0]"
                />
              </label>

              <div className="block">
                <span className="mb-2 block text-[15px] font-medium text-[#9FC164]">
                  Mobile*
                </span>
                <div className="grid grid-cols-[108px_minmax(0,1fr)] gap-3">
                  <input
                    type="text"
                    value={admissionForm.countryCode}
                    readOnly
                    aria-label="Country code"
                    className="h-12 rounded-[16px] border border-[#4F4CB0] px-4 text-[15px] text-[#173B6C] outline-none transition-colors focus:border-[#4F4CB0]"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile No"
                    value={admissionForm.mobile}
                    onChange={(event) =>
                      handleAdmissionFormChange("mobile", event.target.value)
                    }
                    className="h-12 rounded-[16px] border border-[#4F4CB0] px-4 text-[15px] text-[#173B6C] outline-none transition-colors focus:border-[#4F4CB0]"
                  />
                </div>
              </div>

              <label className="block">
                <span className="mb-2 block text-[15px] font-medium text-[#9FC164]">
                  Email ID
                </span>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={admissionForm.email}
                  onChange={(event) =>
                    handleAdmissionFormChange("email", event.target.value)
                  }
                  className="h-12 w-full rounded-[16px] border border-[#4F4CB0] px-4 text-[15px] text-[#173B6C] outline-none transition-colors focus:border-[#4F4CB0]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[15px] font-medium text-[#9FC164]">
                  Academic Year*
                </span>
                <select
                  value={admissionForm.academicYear}
                  onChange={(event) =>
                    handleAdmissionFormChange("academicYear", event.target.value)
                  }
                  className="h-12 w-full rounded-[16px] border border-[#4F4CB0] bg-[#E9EFF9] px-4 text-[15px] font-medium text-[#173B6C] outline-none transition-colors focus:border-[#4F4CB0]"
                >
                  {academicYearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[15px] font-medium text-[#9FC164]">
                  City*
                </span>
                <select
                  value={admissionForm.city}
                  onChange={(event) => {
                    const nextCity = event.target.value;
                    const nextBranches = admissionBranchesByCity[nextCity] ?? [];

                    setAdmissionForm((prev) => ({
                      ...prev,
                      city: nextCity,
                      branchName: nextBranches[0] ?? "",
                    }));
                  }}
                  className="h-12 w-full rounded-[16px] border border-[#4F4CB0] bg-[#E9EFF9] px-4 text-[15px] font-medium text-[#173B6C] outline-none transition-colors focus:border-[#4F4CB0]"
                >
                  {featuredCities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[15px] font-medium text-[#9FC164]">
                  Branch Name*
                </span>
                <select
                  value={admissionForm.branchName}
                  onChange={(event) =>
                    handleAdmissionFormChange("branchName", event.target.value)
                  }
                  className="h-12 w-full rounded-[16px] border border-[#4F4CB0] bg-[#E9EFF9] px-4 text-[15px] font-medium text-[#173B6C] outline-none transition-colors focus:border-[#4F4CB0]"
                >
                  {selectedCityBranches.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </label>

              <div className="sm:col-span-2 flex justify-end pt-2">
                <button
                  type="submit"
                  className="inline-flex min-h-[54px] min-w-[220px] items-center justify-center rounded-[14px] bg-[#4F4CB0] px-8 text-[18px] font-bold text-[#E9EFF9] transition-colors duration-300 hover:bg-[#9FC164]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <section
        ref={studentStoriesSectionRef}
        className="relative isolate bg-[#ffffff] px-4 py-14 text-[#101A5D] sm:px-6 sm:py-18 lg:h-[var(--student-stories-scroll-height,220vh)] lg:px-8 lg:py-0"
      >
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-dots absolute right-[12%] top-7 hidden h-[118px] w-[136px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(0deg)",
              "--decor-x": "18px",
              "--decor-y": "-18px",
              "--decor-opacity": "0.5",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-ribbon absolute -right-[130px] top-[92px] hidden h-[86px] w-[350px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(14deg)",
              "--decor-start-rotate": "0deg",
              "--decor-x": "26px",
              "--decor-y": "-18px",
              "--decor-opacity": "0.72",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-arc absolute -right-[38px] -top-[86px] hidden h-[214px] w-[310px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(-22deg)",
              "--decor-start-rotate": "-8deg",
              "--decor-x": "20px",
              "--decor-y": "-24px",
              "--decor-opacity": "0.78",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-leaf absolute -left-[112px] bottom-[-112px] hidden h-[270px] w-[210px] sm:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(-26deg)",
              "--decor-start-rotate": "-10deg",
              "--decor-x": "-28px",
              "--decor-y": "34px",
              "--decor-opacity": "0.74",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-diamond absolute left-[44px] bottom-[38px] hidden h-[72px] w-[72px] sm:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(45deg)",
              "--decor-start-rotate": "20deg",
              "--decor-x": "-18px",
              "--decor-y": "22px",
              "--decor-opacity": "0.55",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          className="absolute bottom-8 right-8 hidden h-[108px] w-[128px] opacity-52 lg:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(107,147,214,0.38) 2.2px, transparent 2.8px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1510px] lg:sticky lg:top-[88px] lg:flex lg:min-h-[calc(100vh-88px)] lg:flex-col lg:justify-center lg:py-10">
          <div className="max-w-[900px]">
            <p
              data-section-reveal
              className="section-reveal-up inline-flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#4F4CB0] sm:text-[13px]"
            >
              Students Speak
              <span className="h-px w-9 bg-[#4F4CB0]" />
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-[#4F4CB0]"
              >
                <path d="m12 1.8 2.8 6 6.5.8-4.8 4.5 1.3 6.4-5.8-3.2-5.8 3.2 1.3-6.4-4.8-4.5 6.5-.8L12 1.8Z" />
              </svg>
              <span className="h-px w-16 bg-[#4F4CB0]" />
            </p>
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
              className="wave-reveal-heading mt-4 text-[34px] font-extrabold leading-[1.04] tracking-[0] text-[#101A5D] sm:text-[46px] lg:text-[57px]"
            >
              <span>Pioneering</span>{" "}
              <span className="font-medium text-[#4F4CB0]">Success Stories</span>
            </h2>
            <p
              data-section-reveal
              className="section-reveal-up mt-4 max-w-[720px] text-[15px] font-medium leading-7 text-[#7280A3] sm:text-[16px] sm:leading-8"
              style={{ animationDelay: "120ms" }}
            >
              Inspiring journeys from students who turned curiosity,
              dedication, and mentorship into achievements across academics,
              sports, and beyond.
            </p>
          </div>

          <div className="relative mt-8 overflow-hidden lg:mt-9">
            <button
              type="button"
              onClick={() => cycleStudentStories(-1)}
              aria-label="Previous student story"
              className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#4F4CB0]/28 bg-white text-[#4F4CB0] shadow-[0_16px_34px_rgba(79,76,176,0.16)] transition-all hover:-translate-x-[55%] hover:border-[#4F4CB0]/55 xl:inline-flex"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="M14.5 6 8.5 12l6 6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => cycleStudentStories(1)}
              aria-label="Next student story"
              className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#4F4CB0]/28 bg-white text-[#4F4CB0] shadow-[0_16px_34px_rgba(79,76,176,0.16)] transition-all hover:translate-x-[55%] hover:border-[#4F4CB0]/55 xl:inline-flex"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="m9.5 6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              ref={storyCarouselRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth will-change-transform [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible lg:scroll-auto xl:gap-7"
            >
              {studentStories.map((story, index) => (
                <article
                  key={`${story.name}-${index}`}
                  className="group relative min-w-full shrink-0 snap-start overflow-hidden rounded-[18px] bg-white shadow-[0_28px_70px_rgba(107,147,214,0.16)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 xl:min-w-[calc((100%_-_28px)/2)]"
                >
                  <div className="relative w-full">
                    <div className="relative h-[230px] w-full overflow-hidden sm:h-[260px] lg:h-[285px]">
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        sizes="(max-width: 1279px) 100vw, 48vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                      />
                      <div className="absolute left-0 top-0 flex h-[58px] w-[68px] items-center justify-center rounded-br-[20px] bg-[#4F4CB0] text-white shadow-[0_16px_30px_rgba(79,76,176,0.18)]">
                        <StudentStoryBadgeIcon index={index} />
                      </div>
                    </div>

                    <div className="relative bg-white px-5 pb-6 pt-6 text-[#101A5D] sm:px-8">
                      <div
                        aria-hidden="true"
                        className="absolute right-8 top-4 h-[86px] w-[110px] opacity-24"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, rgba(159,193,100,0.45) 1.6px, transparent 2.2px)",
                          backgroundSize: "12px 12px",
                        }}
                      />
                      <div className="relative z-10 grid min-h-[118px] grid-cols-[74px_minmax(0,1fr)_56px] items-center gap-4">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#9FC164]/18 text-[#4F4CB0] shadow-[0_16px_32px_rgba(79,76,176,0.14)]">
                          <StudentStoryBadgeIcon index={index + 1} />
                        </span>

                        <div>
                          <h3
                            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
                            className="max-w-[430px] text-[22px] font-extrabold leading-[1.18] sm:text-[26px]"
                          >
                            {story.quoteTitle}
                          </h3>
                          <span className="mt-4 block h-px w-9 bg-[#4F4CB0]" />
                          <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.13em] text-[#7280A3] sm:text-[13px]">
                            <span className="font-extrabold text-[#4F4CB0]">
                              {story.name}
                            </span>
                            <span className="mx-3 text-[#7280A3]/70">|</span>
                            {story.role}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setActiveStoryIndex(
                              Math.min(
                                index,
                                Math.max(
                                  studentStories.length - storyCardsPerView,
                                  0,
                                ),
                              ),
                            )
                          }
                          aria-label={`View ${story.name} story`}
                          className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all sm:h-14 sm:w-14 ${
                            index === activeStoryIndex
                              ? "border-[#4F4CB0] bg-[#4F4CB0] text-white"
                              : "border-[#4F4CB0] bg-white text-[#4F4CB0] hover:bg-[#4F4CB0] hover:text-white"
                          }`}
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-5 w-5"
                          >
                            <path
                              d="M5 12h14m-6-6 6 6-6 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              {Array.from({
                length: Math.max(studentStories.length - storyCardsPerView + 1, 1),
              }).map((_, index) => (
                <button
                  key={`story-dot-${index}`}
                  type="button"
                  onClick={() => setActiveStoryIndex(index)}
                  aria-label={`Go to student stories ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === activeStoryIndex
                      ? "w-5 bg-[#4F4CB0]"
                      : "w-2 bg-[#9FC164]/24 hover:bg-[#4F4CB0]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#a1ff0054_100%)] px-4 pb-18 pt-12 text-[#101A5D] sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-18">
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-dots absolute left-6 top-[86px] hidden h-[118px] w-[150px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(0deg)",
              "--decor-x": "-18px",
              "--decor-y": "-14px",
              "--decor-opacity": "0.58",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-diamond absolute -right-[64px] -top-[64px] hidden h-[220px] w-[220px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(45deg)",
              "--decor-start-rotate": "25deg",
              "--decor-x": "22px",
              "--decor-y": "-24px",
              "--decor-opacity": "0.55",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-ring absolute right-[44px] top-[92px] hidden h-[154px] w-[238px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(-18deg)",
              "--decor-start-rotate": "-4deg",
              "--decor-x": "20px",
              "--decor-y": "-16px",
              "--decor-opacity": "0.72",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-slab absolute -left-[112px] bottom-[-92px] hidden h-[210px] w-[294px] sm:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(-18deg)",
              "--decor-start-rotate": "-32deg",
              "--decor-x": "-22px",
              "--decor-y": "32px",
              "--decor-opacity": "0.7",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-arc absolute -left-[46px] bottom-[8px] hidden h-[188px] w-[160px] sm:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(28deg)",
              "--decor-start-rotate": "8deg",
              "--decor-x": "-16px",
              "--decor-y": "24px",
              "--decor-opacity": "0.82",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          className="absolute right-7 top-[43%] hidden h-[126px] w-[132px] opacity-50 lg:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(159,193,100,0.35) 2.3px, transparent 2.9px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1510px]">
          <div
            data-section-reveal
            className="section-reveal-up mx-auto max-w-[900px] text-center"
          >
            <p className="inline-flex items-center gap-4 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#4F4CB0] sm:text-[13px]">
              <span className="h-px w-10 bg-[#4F4CB0]" />
              Campus
              <span className="inline-flex text-[#4F4CB0]">
                <CampusMomentIcon icon="spark" />
              </span>
              Moments
              <span className="h-px w-10 bg-[#4F4CB0]" />
            </p>
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
              className="legacy-heading-wave wave-reveal-heading mt-5 text-[34px] font-extrabold leading-[1.08] tracking-[0] text-[#101A5D] sm:text-[48px] lg:text-[57px]"
            >
              <span className="text-[#4F4CB0]">A Glimpse Into{" "}</span>
              <span className="font-extrabold text-[#101A5D]" style={{margin:"0 0 0 7px"}}>
                Campus{" "}
                <span className="relative inline-block">
                  Life
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 120 18"
                    className="legacy-shape-underline absolute -bottom-3 left-1/2 h-5 w-[120%] -translate-x-1/2 text-[#D99A00]"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M5 12C36 6 80 5 116 8"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                    <path
                      d="M38 16C62 12 92 11 112 13"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="3.4"
                    />
                  </svg>
                </span>
              </span>
            </h2>
            <p
              data-section-reveal
              className="campus-description-reveal mx-auto mt-5 max-w-[680px] text-[15px] font-medium leading-7 text-[#7280A3] sm:text-[16px]"
              style={{ animationDelay: "140ms" }}
            >
              Experience a vibrant, safe and inspiring environment shaped by
              academics, arts, sports, and everyday student life.
            </p>
          </div>

          <div
            ref={campusGalleryRef}
            className="mx-auto mt-10 grid max-w-[1280px] gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {campusGalleryItems.map((item, index) => (
              <article
                key={item.title}
                className={`campus-card-reveal group relative overflow-hidden rounded-[18px] border border-[#9FC164]/10 bg-white shadow-[0_24px_60px_rgba(107,147,214,0.14)] transition-transform duration-500 hover:-translate-y-1 ${
                  campusGalleryVisible ? "is-visible" : ""
                }`}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="relative aspect-[16/7.2] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div
                  className={`section-reveal-up relative flex items-center justify-between gap-4 px-4 py-4 sm:px-5 ${
                    campusGalleryVisible ? "is-visible" : ""
                  }`}
                  style={{ animationDelay: `${index * 90 + 120}ms` }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute right-4 top-3 h-[70px] w-[90px] opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(159,193,100,0.48) 1.5px, transparent 2.2px)",
                      backgroundSize: "11px 11px",
                    }}
                  />
                  <div className="relative z-10 flex min-w-0 items-center gap-4">
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#9FC164]/22 bg-[#9FC164]/12 text-[#4F4CB0] shadow-[0_12px_26px_rgba(79,76,176,0.12)]">
                      <CampusMomentIcon icon={item.icon} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#4F4CB0]">
                        {item.category}
                      </p>
                      <h3
                        style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
                        className="truncate text-[17px] font-extrabold text-[#101A5D] sm:text-[20px]"
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#4F4CB0]/38 bg-white text-[#4F4CB0] transition-all duration-300 group-hover:bg-[#4F4CB0] group-hover:text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      <path
                        d="M5 12h14m-6-6 6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex h-13 min-w-[260px] items-center justify-center gap-4 rounded-full border border-[#4F4CB0]/70 bg-white/50 px-8 text-[15px] font-extrabold !text-[#4F4CB0] shadow-[0_14px_34px_rgba(79,76,176,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Explore More Moments
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#F9FBFF_0%,#E9EFF9_54%,#F8FBFF_100%)] px-3 py-12 text-[#173B6C] sm:px-5 sm:py-16 lg:px-6 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_4%,rgba(107,147,214,0.22)_0%,rgba(107,147,214,0)_25%),radial-gradient(circle_at_85%_10%,rgba(216,197,150,0.24)_0%,rgba(216,197,150,0)_24%),linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(233,239,249,0.86)_100%)]" />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-dots absolute left-3 top-8 hidden h-[150px] w-[170px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(0deg)",
              "--decor-x": "-14px",
              "--decor-y": "-14px",
              "--decor-opacity": "0.72",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-ribbon absolute -right-[120px] -top-10 hidden h-[112px] w-[420px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(14deg)",
              "--decor-start-rotate": "2deg",
              "--decor-x": "18px",
              "--decor-y": "-18px",
              "--decor-opacity": "0.76",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-ring absolute -left-[120px] top-[92px] hidden h-[330px] w-[220px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(-16deg)",
              "--decor-start-rotate": "0deg",
              "--decor-x": "-24px",
              "--decor-y": "18px",
              "--decor-opacity": "0.7",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-slab absolute -right-[96px] bottom-[64px] hidden h-[210px] w-[300px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(-24deg)",
              "--decor-start-rotate": "-6deg",
              "--decor-x": "26px",
              "--decor-y": "22px",
              "--decor-opacity": "0.56",
            } as CSSProperties
          }
        />

        <div className="relative z-10 mx-auto w-full max-w-[1510px]">
          <div className="mx-auto max-w-[920px] text-center">
            <p
              data-section-reveal
              className="section-reveal-up inline-flex items-center justify-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#D99A00] sm:text-[13px]"
            >
              <span className="h-px w-9 bg-[#D99A00]" />
              <BranchNetworkIcon icon="pin" className="h-5 w-5" />
              Our Network
              <span className="h-px w-9 bg-[#D99A00]" />
            </p>
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
              className="legacy-heading-wave wave-reveal-heading mt-4 text-[34px] font-extrabold leading-[1.08] tracking-[0] text-[#101A5D] sm:text-[46px] lg:text-[57px]"
            >
              <span>
                Branch{" "}
                <span className="relative inline-block text-[#D99A00]">
                  Network
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 150 18"
                    className="legacy-shape-underline absolute -bottom-3 left-1/2 h-5 w-[104%] -translate-x-1/2 text-[#D99A00]"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M7 13C42 4 100 4 143 9"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M51 15c24-4 50-4 74-1"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      opacity="0.65"
                    />
                  </svg>
                </span>
              </span>
            </h2>
            <p
              data-section-reveal
              className="section-reveal-up mx-auto mt-5 max-w-[740px] text-[15px] leading-7 text-[#173B6C]/78 sm:text-[16px] sm:leading-8"
              style={{ animationDelay: "120ms" }}
            >
              Find Sri Chaitanya campuses by board, state, city, and branch.
              Discover schools, colleges, and coaching centers near you.
            </p>
          </div>

          <div
            aria-hidden="true"
            data-section-reveal
            className="section-reveal-right absolute right-[4%] top-8 hidden h-[92px] w-[116px] text-[#D99A00] drop-shadow-[0_16px_20px_rgba(23,59,108,0.16)] xl:block"
            style={{ animationDelay: "180ms" }}
          >
            <svg viewBox="0 0 160 130" fill="none" className="h-full w-full">
              <path d="M22 39 62 22l38 18 38-16v68l-38 16-38-18-40 17V39Z" fill="#E9EFF9" stroke="#6B93D6" strokeWidth="4" />
              <path d="M62 22v68M100 40v68M34 54l16-7M74 47l14 6M112 50l13-5M34 74l18-8M74 67l14 5M112 70l13-5" stroke="#9FC164" strokeWidth="3" strokeLinecap="round" />
              <path d="M112 7c15 0 26 11 26 25 0 22-26 47-26 47S86 54 86 32c0-14 11-25 26-25Z" fill="#D99A00" />
              <circle cx="112" cy="32" r="9" fill="#fff" />
            </svg>
          </div>

          <div
            data-section-reveal
            className="section-reveal-up mt-8 rounded-[22px] border border-white/80 bg-white/78 p-3 shadow-[0_22px_55px_rgba(23,59,108,0.13)] backdrop-blur-md"
            style={{ animationDelay: "160ms" }}
          >
            <div className="grid gap-3 lg:grid-cols-[repeat(4,minmax(0,1fr))_210px]">
              {branchFilterControls.map((control) => (
                <label
                  key={control.label}
                  className="relative flex min-h-[74px] items-center gap-4 rounded-[15px] border border-[#DCE7F8] bg-white px-4 shadow-[0_12px_26px_rgba(23,59,108,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6B93D6]/60 hover:shadow-[0_18px_34px_rgba(23,59,108,0.12)]"
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] text-white shadow-[0_10px_20px_rgba(23,59,108,0.16)]"
                    style={{ backgroundColor: control.accent }}
                  >
                    <BranchNetworkIcon icon={control.icon} className="h-6 w-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[12px] font-semibold text-[#173B6C]/62">
                      {control.label}
                    </span>
                    <select
                      defaultValue={control.value}
                      className="mt-1 w-full appearance-none bg-transparent pr-7 text-[15px] font-extrabold text-[#173B6C] outline-none"
                    >
                      {control.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </span>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#173B6C]">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
              ))}

              <button
                type="button"
                className="inline-flex min-h-[74px] items-center justify-center gap-3 whitespace-nowrap rounded-[15px] bg-[#003A8C] px-5 text-[15px] font-extrabold text-white shadow-[0_16px_30px_rgba(0,58,140,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#002D70]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <path d="m21 21-4.2-4.2M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Search Branches
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-[minmax(0,1fr)_500px]">
            <article
              data-section-reveal
              className="section-reveal-left overflow-hidden rounded-[24px] border-[10px] border-white bg-white shadow-[0_24px_55px_rgba(23,59,108,0.16)]"
              style={{ animationDelay: "220ms" }}
            >
              <div className="relative h-[360px] overflow-hidden rounded-[14px] sm:h-[450px] lg:h-[510px]">
                <iframe
                  title="Sri Chaitanya branches map demo"
                  src="https://www.google.com/maps?q=Hyderabad,+Telangana&z=11&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_44%_50%,rgba(217,154,0,0.12)_0%,rgba(217,154,0,0)_20%)]" />
\
                <button
                  type="button"
                  className="absolute bottom-6 left-5 inline-flex h-11 items-center gap-2 rounded-[12px] bg-white px-4 text-[13px] font-extrabold text-[#003A8C] shadow-[0_12px_24px_rgba(23,59,108,0.16)]"
                >
                  <BranchNetworkIcon icon="pin" className="h-4 w-4" />
                  Locate Me
                </button>
                <div className="absolute bottom-5 right-5 overflow-hidden rounded-[12px] bg-white shadow-[0_12px_24px_rgba(23,59,108,0.16)]">
                  <button type="button" aria-label="Zoom in" className="flex h-11 w-11 items-center justify-center text-[25px] font-semibold text-[#003A8C]">
                    +
                  </button>
                  <span className="block h-px bg-[#E9EFF9]" />
                  <button type="button" aria-label="Zoom out" className="flex h-11 w-11 items-center justify-center text-[25px] font-semibold text-[#003A8C]">
                    -
                  </button>
                </div>
              </div>
            </article>

            <aside
              data-section-reveal
              className="section-reveal-right rounded-[24px] border border-white/85 bg-white/80 p-4 text-[#173B6C] shadow-[0_24px_55px_rgba(23,59,108,0.14)] backdrop-blur-md sm:p-5"
              style={{ animationDelay: "260ms" }}
            >
              <div
                data-section-reveal
                className="section-reveal-up grid grid-cols-[1fr_1fr_1.18fr] gap-2 rounded-[16px] bg-[#E9EFF9]/80 p-2"
                style={{ animationDelay: "300ms" }}
              >
                {branchNetworkTabs.map((tab, index) => (
                  <button
                    key={tab.label}
                    type="button"
                    className={`inline-flex min-h-[58px] items-center justify-center gap-1.5 rounded-[12px] px-2 text-center text-[11px] font-extrabold leading-tight transition-all duration-300 ${
                      index === 0
                        ? "bg-[#003A8C] text-white shadow-[0_12px_22px_rgba(0,58,140,0.24)]"
                        : "bg-white/70 text-[#003A8C] hover:bg-white"
                    }`}
                  >
                    <BranchNetworkIcon icon={tab.icon} className="h-5 w-5 shrink-0" />
                    <span>
                      <span className="whitespace-nowrap">{tab.label}</span>
                      <span className={`block text-[10px] font-bold ${index === 0 ? "text-white/78" : "text-[#173B6C]/55"}`}>
                        ({tab.count})
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              <div
                data-lenis-prevent
                className="mt-4 max-h-[388px] space-y-3 overflow-y-auto pr-1"
              >
                {branchLocations.slice(0, 4).map((branch, index) => (
                  <article
                    key={branch.name}
                    data-section-reveal
                    className="section-reveal-up group rounded-[16px] border border-[#DCE7F8] bg-white p-3 shadow-[0_12px_26px_rgba(23,59,108,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D99A00]/45 hover:shadow-[0_18px_34px_rgba(23,59,108,0.12)]"
                    style={{ animationDelay: `${340 + index * 75}ms` }}
                  >
                    <div className="flex items-start gap-3 text-left">
                      <div className="relative h-[72px] w-[82px] shrink-0 overflow-hidden rounded-[14px]">
                        <Image
                          src={branch.image}
                          alt={branch.name}
                          fill
                          sizes="82px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[15px] font-extrabold leading-snug text-[#173B6C]">
                          {branch.name}
                        </h3>
                        <p className="mt-1.5 flex max-w-[300px] gap-1.5 text-[11px] font-medium leading-5 text-[#173B6C]/70">
                          <BranchNetworkIcon icon="pin" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#003A8C]" />
                          {branch.address}
                        </p>
                        <p className="mt-1.5 text-[11px] font-extrabold leading-none text-[#D99A00]">
                          Rating {branch.rating}
                          <span className="ml-1 font-semibold text-[#173B6C]/55">
                            ({branch.reviews} reviews)
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-label={`View ${branch.name}`}
                        className="flex h-10 w-10 shrink-0 self-center items-center justify-center rounded-full bg-[#E9EFF9] text-[#003A8C] transition-colors duration-300 group-hover:bg-[#003A8C] group-hover:text-white"
                      >
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                          <path d="m9.5 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#eaffc6_0%,#fff_100%)] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-dots absolute left-8 top-16 hidden h-[116px] w-[140px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(0deg)",
              "--decor-x": "-16px",
              "--decor-y": "-14px",
              "--decor-opacity": "0.5",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-leaf absolute -right-[104px] -top-[126px] hidden h-[286px] w-[236px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(20deg)",
              "--decor-start-rotate": "4deg",
              "--decor-x": "24px",
              "--decor-y": "-28px",
              "--decor-opacity": "0.62",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-arc absolute -right-[22px] -top-[58px] hidden h-[220px] w-[318px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(-14deg)",
              "--decor-start-rotate": "-28deg",
              "--decor-x": "20px",
              "--decor-y": "-18px",
              "--decor-opacity": "0.76",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-diamond absolute -left-[68px] bottom-[-46px] hidden h-[150px] w-[150px] sm:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(45deg)",
              "--decor-start-rotate": "20deg",
              "--decor-x": "-20px",
              "--decor-y": "24px",
              "--decor-opacity": "0.55",
            } as CSSProperties
          }
        />
        <div
          aria-hidden="true"
          data-section-reveal
          className="section-decor decor-dots absolute bottom-5 right-8 hidden h-[116px] w-[140px] lg:block"
          style={
            {
              "--decor-final-transform": "translate3d(0,0,0) rotate(0deg)",
              "--decor-x": "16px",
              "--decor-y": "18px",
              "--decor-opacity": "0.5",
            } as CSSProperties
          }
        />

        <div className="relative z-10 mx-auto w-full max-w-[1320px]">
          <div className="mx-auto max-w-[980px] text-center">
            <p className="inline-flex items-center justify-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.24em] text-[#4F4CB0] sm:text-[13px]">
              <span className="h-px w-8 bg-[#4F4CB0]" />
              <span className="text-[#4F4CB0]">{"\u2605"}</span>
              Stay Connected
              <span className="text-[#4F4CB0]">{"\u2605"}</span>
              <span className="h-px w-8 bg-[#4F4CB0]" />
            </p>
            <h2
              data-wave-reveal
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
              className="wave-reveal-heading mt-4 text-[34px] font-extrabold leading-[1.08] tracking-[0] text-[#101A5D] sm:text-[46px] lg:text-[57px]"
            >
              <span>Latest </span>
              <span className="text-[#4F4CB0]" style={{margin:"0 7px 0 7px"}}> Social Media </span>
              <span>News</span>
            </h2>
            <p
              data-section-reveal
              className="section-reveal-up mx-auto mt-5 max-w-[700px] text-[15px] font-medium leading-7 text-[#5F6B85] sm:text-[16px]"
            >
              Catch the newest highlights from our social channels, including
              student achievements, campus events, academic milestones, and
              everyday stories from Sri Chaitanya life.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-[1120px] gap-6 lg:grid-cols-3">
            {socialNewsItems.map((item, index) => (
              <article
                key={`${item.platform}-${item.title}`}
                data-section-reveal
                className="section-reveal-up group relative overflow-hidden rounded-[14px] bg-white shadow-[0_24px_60px_rgba(107,147,214,0.13)] transition-transform duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <span
                  className={`absolute left-0 top-0 z-10 flex h-[62px] w-[70px] items-center justify-center rounded-br-[18px] text-white shadow-[0_16px_30px_rgba(16,26,93,0.14)] ${
                    index === 1 ? "bg-[#4F4CB0]" : "bg-[#173B6C]"
                  }`}
                >
                  <SocialNewsIcon index={index} />
                </span>
                <div className="relative h-[188px] w-full overflow-hidden sm:h-[224px] lg:aspect-[16/9] lg:h-auto">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>

                <div className="relative p-5 lg:p-6">
                  <div
                    aria-hidden="true"
                    className={`absolute bottom-5 right-5 h-[54px] w-[58px] rounded-full opacity-70 ${
                      index === 1 ? "bg-[#4F4CB0]/10" : "bg-[#173B6C]/8"
                    }`}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute bottom-7 right-8 h-[44px] w-[38px] opacity-55"
                    style={{
                      backgroundImage: `radial-gradient(circle, ${
                        index === 1 ? "rgba(79,76,176,0.7)" : "rgba(23,59,108,0.65)"
                      } 1.4px, transparent 2px)`,
                      backgroundSize: "9px 9px",
                    }}
                  />
                  <p className={`text-[11px] font-extrabold uppercase tracking-[0.18em] sm:text-[12px] ${
                    index === 1 ? "text-[#4F4CB0]" : "text-[#173B6C]"
                  }`}>
                    Sri Chaitanya Schools
                  </p>
                  <h3
                    style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
                    className="mt-3 text-[19px] font-extrabold leading-[1.22] text-[#101A5D] sm:text-[21px]"
                  >
                    {item.title}
                  </h3>
                  <span className="mt-4 block h-px w-8 bg-[#4F4CB0]" />
                  <p className="mt-4 text-[13px] font-medium leading-6 text-[#5F6B85] lg:text-[14px] lg:leading-7">
                    {item.description}
                  </p>
                  <Link
                    href="/"
                    className="relative z-10 mt-4 inline-flex items-center gap-3 text-[13px] font-extrabold text-[#173B6C] transition-colors hover:text-[#4F4CB0] lg:text-[14px]"
                  >
                    View Update
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path
                        d="M5 12h14m-6-6 6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {socialNewsItems.map((item, index) => (
              <span
                key={`social-dot-${item.platform}`}
                className={`h-2 rounded-full ${
                  index === 0 ? "w-5 bg-[#173B6C]" : "w-2 bg-[#173B6C]/14"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="mt-8 bg-[#E9EFF9] px-3 pb-16 sm:mt-10 sm:px-5 sm:pb-20 lg:mt-12 lg:px-8 lg:pb-24">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="relative aspect-[1465/386] overflow-hidden rounded-[22px] bg-transparent shadow-[0_22px_54px_rgba(23,59,108,0.14)] sm:rounded-[24px]">
            <Image
              src="/belowbanner.png"
              alt="Sri Chaitanya admission banner"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <FooterGallery />

      <Footer>
        <div className="footer-wave-divider pointer-events-none absolute inset-x-0 top-[-6px] z-20 h-[122px]">
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 122"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <defs>
              <filter id="footerWaveGlow" x="-8%" y="-80%" width="116%" height="260%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="1 0 0 0 0.82 0 1 0 0 0.93 0 0 1 0 1 0 0 0 0.78 0"
                />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="footerGoldGlow" x="-8%" y="-120%" width="116%" height="340%">
                <feGaussianBlur stdDeviation="4.5" result="goldBlur" />
                <feColorMatrix
                  in="goldBlur"
                  type="matrix"
                  values="1 0 0 0 0.62 0 1 0 0 0.76 0 0 1 0 0.39 0 0 0 0.72 0"
                />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient
                id="footerWaveShimmerGradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="1440"
                y1="0"
                y2="0"
              >
                <stop offset="0%" stopColor="#E9EFF9" stopOpacity="0" />
                <stop offset="100%" stopColor="#E9EFF9" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0 49C214 35 352 83 544 78C702 74 810 43 958 31C1137 17 1262 33 1440 48V122H0Z"
              className="footer-wave-ambient"
              fill="#0b3d7700"
              opacity="0.34"
            />
            <path
              d="M0 70C220 43 356 93 552 94C724 95 823 57 982 45C1151 33 1265 47 1440 62V122H0Z"
              className="footer-wave-fill"
              fill="#061522"
            />
            <path
              d="M0 43C214 31 352 75 544 70C702 66 810 38 958 27C1137 13 1262 28 1440 43"
              className="footer-wave-gold"
              fill="none"
              filter="url(#footerGoldGlow)"
              stroke="#9FC164"
              strokeLinecap="round"
              strokeWidth="8"
            />
            <path
              d="M0 43C214 31 352 75 544 70C702 66 810 38 958 27C1137 13 1262 28 1440 43"
              className="footer-wave-shimmer"
              fill="none"
              stroke="url(#footerWaveShimmerGradient)"
              strokeLinecap="round"
              strokeWidth="5"
            />
            <path
              d="M0 58C220 36 367 87 560 88C730 89 822 53 982 42C1150 30 1268 43 1440 57"
              className="footer-wave-glow"
              fill="none"
              filter="url(#footerWaveGlow)"
              opacity="1"
              stroke="#E9EFF9"
              strokeLinecap="round"
              strokeWidth="4"
            />
          </svg>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(233,239,249,0.028)_1px,transparent_1px)] [background-size:295px_100%]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,21,34,0)_0%,rgba(0,8,16,0.58)_100%)]" />

        <div className="relative z-10 w-full px-5 pb-14 pt-32 sm:px-10 sm:pb-16 sm:pt-34 lg:px-12 lg:pt-36 xl:px-14 2xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.72fr_1.15fr_0.95fr] lg:gap-0">
            <div className="w-full lg:pl-10 xl:pl-20">
              <div className="flex items-center gap-4">
                <div className="flex h-[68px] w-[68px] items-center justify-center overflow-hidden rounded-full border border-[#4F4CB0]/65 bg-[#061522] shadow-[0_0_0_5px_rgba(79,76,176,0.16)]">
                  <Image
                    src="/logos/logo_transparent_fixed.png"
                    alt="Sri Chaitanya Schools logo"
                    width={68}
                    height={68}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                    className="text-[22px] font-extrabold tracking-[-0.035em] text-[#E9EFF9]"
                  >
                    Sri Chaitanya
                  </h2>
                  <p className="mt-1 text-[14px] font-extrabold text-[#4F4CB0]">
                    Madhapur, Hyderabad
                  </p>
                </div>
              </div>
              <div className="mt-5 h-[2px] w-9 bg-gradient-to-r from-[#4F4CB0] to-transparent" />

              <p className="mt-6 w-full text-[15.5px] leading-7 text-[#E9EFF9]/88">
                Transforming education since 1986. Shaping future leaders
                through innovation, excellence, and holistic development across
                156+ branches nationwide.
              </p>

              <div className="mt-6 flex flex-nowrap gap-4">
                {footerSocialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#4F4CB0]/70 bg-[#061522]/40 text-[#4F4CB0] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4F4CB0] hover:text-[#061522]"
                  >
                    <FooterSocialIcon icon={item.icon} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:border-l lg:border-[#E9EFF9]/14 lg:pl-8">
              <h3
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                className="text-[19px] font-extrabold tracking-[-0.03em] text-[#E9EFF9]"
              >
                Quick Links
              </h3>
              <div className="mt-4 h-[2px] w-8 bg-gradient-to-r from-[#4F4CB0] to-transparent" />
              <div className="mt-5 space-y-4">
                {footerQuickLinks.map((item) => (
                  <Link
                    key={item}
                    href="/"
                    className="flex items-center gap-4 text-[14px] font-medium text-[#E9EFF9]/84 transition-colors hover:text-[#4F4CB0]"
                  >
                    <span aria-hidden="true" className="text-[18px] text-[#E9EFF9]/88">
                      &#8250;
                    </span>
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:border-l lg:border-[#E9EFF9]/14 lg:pl-8">
              <h3
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                className="text-[19px] font-extrabold tracking-[-0.03em] text-[#E9EFF9]"
              >
                Nearby Branches
              </h3>
              <div className="mt-4 h-[2px] w-8 bg-gradient-to-r from-[#4F4CB0] to-transparent" />

              <div className="mt-5 flex items-center gap-3 text-[13px] text-[#E9EFF9]/86">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-[#E9EFF9]" fill="none">
                  <path d="M12 21s6-5.15 6-11a6 6 0 0 0-12 0c0 5.85 6 11 6 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 10.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <span>Near Hyderabad</span>
                <span className="rounded-full bg-[#456d00] px-3 py-1 text-[10px] font-extrabold text-[#E9EFF9]">
                  Popular
                </span>
              </div>

              <div className="mt-5 max-w-[316px] overflow-hidden rounded-[12px] border border-[#E9EFF9]/10 bg-[#071A2B]/92 shadow-[inset_0_1px_0_rgba(233,239,249,0.07),0_18px_38px_rgba(0,0,0,0.18)]">
                {footerBranches.map((branch) => (
                  <article
                    key={branch.name}
                    className="border-b border-[#E9EFF9]/8 px-3 py-2.5 last:border-b-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-[44px] w-[56px] shrink-0 overflow-hidden rounded-[7px]">
                        <Image
                          src={branch.image}
                          alt={branch.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-[13.5px] text-[#E9EFF9]">
                          {branch.name}
                        </h4>
                        <p className="mt-1 text-[12.5px] text-[#E9EFF9]/78">
                          {branch.area}
                        </p>
                      </div>
                      <span className="ml-2 shrink-0 text-[13px] font-extrabold text-[#E9EFF9]">
                        <span className="text-[#4F4CB0]">{"\u2605"}</span> {branch.rating}
                      </span>
                    </div>
                  </article>
                ))}
                <Link
                  href="/"
                  className="flex h-[40px] items-center justify-center gap-3 border-t border-[#E9EFF9]/8 text-[13.5px] font-extrabold !text-[#4F4CB0] transition-colors hover:text-[#E9EFF9]"
                >
                  View All Branches
                  <span aria-hidden="true" className="text-[20px] leading-none">
                    &#8594;
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:border-l lg:border-[#E9EFF9]/14 lg:pl-8">
              <h3
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                className="text-[19px] font-extrabold tracking-[-0.03em] text-[#E9EFF9]"
              >
                Categories
              </h3>
              <div className="mt-4 h-[2px] w-8 bg-gradient-to-r from-[#4F4CB0] to-transparent" />
              <div className="mt-6 space-y-5">
                {footerCategories.map((item) => (
                  <Link
                    key={item}
                    href="/"
                    className="flex items-center gap-4 text-[14px] font-medium text-[#E9EFF9]/84 transition-colors hover:text-[#4F4CB0]"
                  >
                    <span aria-hidden="true" className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#4F4CB0]/28 bg-[#061522] text-[#4F4CB0]">
                      <FooterCategoryIcon label={item} />
                    </span>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </main>
  );
}






