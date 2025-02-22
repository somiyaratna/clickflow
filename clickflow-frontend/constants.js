// LOGOS
import aldiLogo from "./src/assets/aldi.png";
import amazonLogo from "./src/assets/amazon.png";
import bunningsWarehouseLogo from "./src/assets/bunnings-warehouse.png";
import luisaviaromaLogo from "./src/assets/luisaviaroma.png";
import nourishLogo from "./src/assets/nourish.png";
import oneShotLogo from "./src/assets/one-shot.png";
import walmartLogo from "./src/assets/walmart.png";
import whelanLogo from "./src/assets/whelan.png";
import lvlOneImg from "./src/assets/lvl-1.png";
import lvlTwoImg from "./src/assets/lvl-2.png";
import lvlThreeImg from "./src/assets/lvl-3.png";
import lvlFourImg from "./src/assets/lvl-4.png";
import u1 from "./src/assets/u1.png";
import u2 from "./src/assets/u2.jpg";
import u3 from "./src/assets/u3.png";
import u4 from "./src/assets/u4.png";
import u5 from "./src/assets/u5.png";
import u6 from "./src/assets/u6.png";

// SERVICES
import {
  CalendarDays,
  CircleDollarSign,
  Banknote,
  Handshake,
  Info,
  Share2,
  CircleHelp,
  Award,
} from "lucide-react";

// LOGOS
export const logos = [
  aldiLogo,
  amazonLogo,
  bunningsWarehouseLogo,
  luisaviaromaLogo,
  nourishLogo,
  oneShotLogo,
  walmartLogo,
  whelanLogo,
];

export const mvpLevels = [
  {
    level: 1,
    img: lvlOneImg,
    description: ["50$ reset 0.8% commission", "Total tasks are 45/Day"],
  },
  {
    level: 2,
    img: lvlTwoImg,
    description: [
      "100$ reset 1% commission.",
      "500$ reset 1% commission.",
      "Total tasks are 50/Day.",
    ],
  },
  {
    level: 3,
    img: lvlThreeImg,
    description: [
      "1000$ reset 1.2% commission.",
      "3000$ reset 1.2% commission.",
      "Total tasks are 55/Day.",
    ],
  },
  {
    level: 4,
    img: lvlFourImg,
    description: ["5000$ reset 1.4% commission.", "Total tasks are 60/Day."],
  },
];

export const services = [
  { label: "Latest Events", icon: CalendarDays, link: "/events" },
  { label: "Recharge", icon: CircleDollarSign, link: "/recharge" },
  { label: "Withdrawal", icon: Banknote, link: "/withdrawal" },
  { label: "Invitation Code", icon: Share2, link: "/invitation" },
  { label: "Company", icon: Info, link: "/company" },
  { label: "T&C", icon: Handshake, link: "/terms-conditions" },
  { label: "FAQs", icon: CircleHelp, link: "/faqs" },
  { label: "Certificates", icon: Award, link: "/certificates" },
];

export const faqData = [
  {
    question: "What is Organic Traffic and how is it digital?",
    answer:
      "Organic traffic is the lifeblood of any successful online business. It's the traffic that comes from search engines such as Google and Bing, and it's the traffic that's most likely to convert into paying customers.",
  },
  {
    question: "Why we do transaction via USDT?",
    answer:
      "That's due to our merchants and users being located all around the world. If we were to use a single exchange rate, certain merchants or users might face difficulties in making payments from other countries. The most efficient solution to this issue is the use of USDT, which allows merchants to credit commissions into the user's accounts more rapidly.",
  },
  {
    question: "What is SEO and how does it work?",
    answer:
      "Search Engine Optimization (SEO) is the process of optimizing websites and content to improve organic visibility in search engine results pages (SERPs). SEO involves optimizing content, website structure, and other technical components to ensure that search engines can easily understand and index a website. The goal of SEO is to increase organic traffic to a website by improving its visibility in search engine results pages.",
  },
  {
    question: "What are the benefits of SEO?",
    answer:
      "SEO can help to drive more organic traffic to your website, increase brand visibility and awareness, and improve your website’s credibility and reputation. It can also lead to increased website conversions and an increase in overall website performance.",
  },
  {
    question: "How can I optimize my website for SEO?",
    answer:
      "Optimizing your website for SEO involves several key steps, such as creating quality content, optimizing page titles and meta descriptions, optimizing images, and setting up a sitemap. Additionally, it's important to ensure that your website is correctly structured and that it is mobile-friendly. Other important steps include optimizing for local SEO, setting up rich snippets, and utilizing other SEO tools and strategies.",
  },
];

export const amounts = [50, 100, 500, 1000, 3000, 5000];

export const categories = [
  {
    title: "Home Appliances",
    image: u1,
    alt: "TV display",
  },
  {
    title: "Apple",
    image: "https://clickflow.life/static/img/u2.png?height=200&width=300",
    alt: "Smartphones",
  },
  {
    title: "Daily Necessities",
    image: u3,
    alt: "Cleaning supplies",
  },
  {
    title: "Luxury",
    image: u4,
    alt: "Luxury watch",
  },
  {
    title: "Cosmetic",
    image: u5,
    alt: "Beauty product",
  },
  {
    title: "Furniture",
    image: u6,
    alt: "Accent chair",
  },
];
