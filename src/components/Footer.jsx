// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import { MapPin, Mail, Phone } from "lucide-react";

// const NAV_LINKS = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Agro", path: "/agro" },
//   { label: "Clothes", path: "/clothes" },
//   { label: "Contact", path: "/contact" },
// ];

// // PLACEHOLDER — replace with real social links once client provides them
// const SOCIAL_LINKS = [
//   { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
//   { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
//   { icon: <FaLinkedinIn />, url: "https://linkedin.com", label: "LinkedIn" },
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-[#1F1D1B] text-[#F1EBE1] border-t border-[#B8935A]/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
//           {/* Brand */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="sm:col-span-2 md:col-span-1"
//           >
//             <span className="font-serif text-2xl font-semibold tracking-wide">
//               SM<span className="text-[#B8935A]">.</span>
//             </span>
//             <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8935A] mt-1 mb-4">
//               Agro &amp; Clothes
//             </p>
//             <p className="text-sm text-[#F1EBE1]/60 leading-relaxed max-w-xs">
//               SM Agro and Clothes Industries OPC Pvt Ltd — bridging quality
//               agriculture and premium textile craftsmanship.
//             </p>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#B8935A] mb-5">
//               Quick Links
//             </h4>
//             <ul className="flex flex-col gap-3">
//               {NAV_LINKS.map((link) => (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     className="text-sm text-[#F1EBE1]/70 hover:text-[#B8935A] transition-colors duration-300"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#B8935A] mb-5">
//               Contact
//             </h4>
//             <ul className="flex flex-col gap-4">
//               <li className="flex items-start gap-3">
//                 <MapPin size={16} className="text-[#B8935A] mt-0.5 shrink-0" />
//                 <span className="text-sm text-[#F1EBE1]/70">
//                   {/* PLACEHOLDER — confirm address with client */}
//                   Address to be confirmed
//                 </span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Mail size={16} className="text-[#B8935A] mt-0.5 shrink-0" />
//                 <span className="text-sm text-[#F1EBE1]/70">
//                   santoshmarnenew@gmail.com
//                 </span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Phone size={16} className="text-[#B8935A] mt-0.5 shrink-0" />
//                 <span className="text-sm text-[#F1EBE1]/70">
//                   +91 93735 34976
//                 </span>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Social */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#B8935A] mb-5">
//               Follow Us
//             </h4>
//             <div className="flex gap-3">
//               {SOCIAL_LINKS.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   whileHover={{ y: -4, scale: 1.08 }}
//                   className="w-10 h-10 flex items-center justify-center rounded-full border border-[#B8935A]/30 text-[#F1EBE1]/70 hover:text-[#1F1D1B] hover:bg-[#B8935A] hover:border-[#B8935A] transition-all duration-300"
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Divider */}
//         <div className="h-px bg-gradient-to-r from-transparent via-[#B8935A]/30 to-transparent my-10"></div>

//         {/* Bottom bar */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F1EBE1]/50">
//           <p>
//             &copy; {new Date().getFullYear()} SM Agro and Clothes Industries
//             OPC Pvt Ltd. All rights reserved.
//           </p>
//           <div className="flex gap-6">
//             <Link to="/privacy" className="hover:text-[#B8935A] transition-colors duration-300">
//               Privacy Policy
//             </Link>
//             <Link to="/terms" className="hover:text-[#B8935A] transition-colors duration-300">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";

// Same logo used in Navbar
import logo from "../assets/logo1.png";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Agro", path: "/agro" },
  { label: "Clothes", path: "/clothes" },
  { label: "Contact", path: "/contact" },
];

// PLACEHOLDER — replace with real social links once client provides them
const SOCIAL_LINKS = [
  { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
  { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-[#1F1D1B] text-[#F1EBE1] border-t border-[#B8935A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          {/* Brand */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="sm:col-span-2 md:col-span-1"
>
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-[#F1EBE1] rounded-lg px-3 py-1.5 shadow-md">
      <img
        src={logo}
        alt="SM Agro and Clothes Industries"
        className="h-9 w-auto object-contain"
      />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-[#F1EBE1] text-base font-serif font-semibold tracking-wide">
        Agro &amp; Clothes
      </span>
      <span className="text-[#B8935A] text-[10px] tracking-[0.25em] uppercase mt-0.5">
        Industries
      </span>
    </div>
  </div>
  <p className="text-sm text-[#F1EBE1]/60 leading-relaxed max-w-xs">
    SM Agro and Clothes Industries OPC Pvt Ltd — bridging quality
    agriculture and premium textile craftsmanship.
  </p>
</motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#B8935A] mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#F1EBE1]/70 hover:text-[#B8935A] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#B8935A] mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#B8935A] mt-0.5 shrink-0" />
                <span className="text-sm text-[#F1EBE1]/70">
                  {/* PLACEHOLDER — confirm address with client */}
                  Address to be confirmed
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#B8935A] mt-0.5 shrink-0" />
                <span className="text-sm text-[#F1EBE1]/70">
                  santoshmarnenew@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#B8935A] mt-0.5 shrink-0" />
                <span className="text-sm text-[#F1EBE1]/70">
                  +91 93735 34976
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#B8935A] mb-5">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.08 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#B8935A]/30 text-[#F1EBE1]/70 hover:text-[#1F1D1B] hover:bg-[#B8935A] hover:border-[#B8935A] transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#B8935A]/30 to-transparent my-10"></div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F1EBE1]/50">
          <p>
            &copy; {new Date().getFullYear()} SM Agro and Clothes Industries
            OPC Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[#B8935A] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#B8935A] transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;