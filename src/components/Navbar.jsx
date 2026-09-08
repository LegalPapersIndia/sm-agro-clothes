// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const NAV_LINKS = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Agro", path: "/agro" },
//   { label: "Clothes", path: "/clothes" },
//   { label: "Contact", path: "/contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setIsOpen(false);
//   }, [location.pathname]);

//   return (
//     <header
//       className={`sticky top-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-[#1F1D1B]/95 backdrop-blur-md shadow-lg shadow-black/10"
//           : "bg-[#1F1D1B]"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo — text-based placeholder, swap for image logo later */}
//           <Link to="/" className="flex flex-col leading-none group">
//             <span className="font-serif text-xl md:text-2xl font-semibold text-[#F1EBE1] tracking-wide">
//               SM<span className="text-[#B8935A]">.</span>
//             </span>
//             <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-[#B8935A] mt-0.5">
//               Agro &amp; Clothes
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-10">
//             {NAV_LINKS.map((link) => {
//               const isActive = location.pathname === link.path;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className="relative text-sm tracking-wide text-[#F1EBE1]/80 hover:text-[#F1EBE1] transition-colors duration-300 py-2"
//                 >
//                   {link.label}
//                   <span
//                     className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-[#B8935A] transition-all duration-300 ${
//                       isActive ? "w-full" : "w-0 group-hover:w-full"
//                     }`}
//                   ></span>
//                   {isActive && (
//                     <motion.span
//                       layoutId="nav-underline"
//                       className="absolute left-0 -bottom-0.5 h-[1.5px] w-full bg-[#B8935A]"
//                       transition={{ duration: 0.3 }}
//                     />
//                   )}
//                 </Link>
//               );
//             })}
//             <Link
//               to="/contact"
//               className="border border-[#B8935A] text-[#B8935A] hover:bg-[#B8935A] hover:text-[#1F1D1B] px-5 py-2 rounded-sm text-sm tracking-wide transition-all duration-300"
//             >
//               Get in Touch
//             </Link>
//           </nav>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-[#F1EBE1] p-2"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.nav
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.35, ease: "easeInOut" }}
//             className="md:hidden overflow-hidden bg-[#1F1D1B] border-t border-white/10"
//           >
//             <div className="flex flex-col px-6 py-6 gap-1">
//               {NAV_LINKS.map((link, index) => (
//                 <motion.div
//                   key={link.path}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.08, duration: 0.3 }}
//                 >
//                   <Link
//                     to={link.path}
//                     className={`block py-3 text-base tracking-wide border-b border-white/5 transition-colors duration-300 ${
//                       location.pathname === link.path
//                         ? "text-[#B8935A]"
//                         : "text-[#F1EBE1]/80 hover:text-[#F1EBE1]"
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 </motion.div>
//               ))}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.3 }}
//               >
//                 <Link
//                   to="/contact"
//                   className="inline-block mt-4 border border-[#B8935A] text-[#B8935A] px-5 py-2.5 rounded-sm text-sm tracking-wide"
//                 >
//                   Get in Touch
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;



import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// PLACEHOLDER — replace with client's actual logo file if the name differs
import logo from "../assets/logo1.png";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Agro", path: "/agro" },
  { label: "Clothes", path: "/clothes" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1F1D1B]/95 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-[#1F1D1B]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {/* Logo */}
<Link to="/" className="flex items-center gap-3 group">
  <div className="bg-[#F1EBE1] rounded-lg px-3 py-1.5 shadow-md">
    <img
      src={logo}
      alt="SM Agro and Clothes Industries"
      className="h-9 md:h-11 w-auto object-contain"
    />
  </div>
  <div className="hidden sm:flex flex-col leading-none">
    <span className="text-[#F1EBE1] text-sm md:text-base font-serif font-semibold tracking-wide">
      Agro &amp; Clothes
    </span>
    <span className="text-[#B8935A] text-[10px] md:text-xs tracking-[0.25em] uppercase">
      Industries
    </span>
  </div>
</Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-sm tracking-wide text-[#F1EBE1]/80 hover:text-[#F1EBE1] transition-colors duration-300 py-2"
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-[#B8935A] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-0.5 h-[1.5px] w-full bg-[#B8935A]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="border border-[#B8935A] text-[#B8935A] hover:bg-[#B8935A] hover:text-[#1F1D1B] px-5 py-2 rounded-sm text-sm tracking-wide transition-all duration-300"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#F1EBE1] p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#1F1D1B] border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-3 text-base tracking-wide border-b border-white/5 transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-[#B8935A]"
                        : "text-[#F1EBE1]/80 hover:text-[#F1EBE1]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.3 }}
              >
                <Link
                  to="/contact"
                  className="inline-block mt-4 border border-[#B8935A] text-[#B8935A] px-5 py-2.5 rounded-sm text-sm tracking-wide"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;