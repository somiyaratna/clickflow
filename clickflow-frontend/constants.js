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
