import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Client's WhatsApp number
const WHATSAPP_NUMBER = "919373534976";

// PLACEHOLDER — replace with real social links once client provides them
const SOCIAL_LINKS = [
  { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
  { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com", label: "LinkedIn" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const text = `New inquiry from website:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    setTimeout(() => {
      setLoading(false);
      setStatus("Redirecting you to WhatsApp...");
      window.open(whatsappUrl, "_blank");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 600);
  };

  const fields = [
    { name: "name", type: "text", placeholder: "Your Name", required: true },
    { name: "email", type: "email", placeholder: "Your Email", required: true },
    { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* LEFT: FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-[#B8935A] uppercase tracking-[0.35em] text-xs sm:text-sm font-medium mb-4">
            Send a Message
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F1D1B] mb-4">
            We'd Love to Hear{" "}
            <span className="text-[#B8935A]">From You</span>
          </h2>
          <p className="text-[#1F1D1B]/60 text-sm sm:text-base mb-8">
            Fill the form and we'll get back to you on WhatsApp right away.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                className="w-full bg-white border border-[#1F1D1B]/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#B8935A]/50 focus:border-[#B8935A]/50 outline-none text-[#1F1D1B] placeholder-[#1F1D1B]/40 transition-all duration-300"
              />
            ))}

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-white border border-[#1F1D1B]/10 px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#B8935A]/50 focus:border-[#B8935A]/50 outline-none text-[#1F1D1B] placeholder-[#1F1D1B]/40 transition-all duration-300"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className={`bg-[#B8935A] hover:bg-[#a67f45] text-[#1F1D1B] px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <MessageCircle size={18} />
              {loading ? "Redirecting..." : "Send via WhatsApp"}
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#B8935A] text-sm mt-2"
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* RIGHT: CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#1F1D1B] rounded-2xl p-8 sm:p-10 hover:border-[#B8935A]/30 border border-transparent transition-all duration-500"
        >
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F1EBE1] mb-6">
            Contact Information
          </h3>
          <p className="text-[#F1EBE1]/60 text-sm mb-8">
            Reach out to us anytime — we're here to help your business grow.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: <MapPin size={18} />,
                label: "Office Address",
                value: "Sr no 8 /B behind sanas school sinhgad road dhayari pune -411041",
              },
              {
                icon: <Mail size={18} />,
                label: "Email",
                value: "santoshmarnenew@gmail.com",
              },
              {
                icon: <Phone size={18} />,
                label: "Mobile",
                value: "+91 93735 34976",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#B8935A]/10 text-[#B8935A] shrink-0">
                  {item.icon}
                </span>
                <p className="text-[#F1EBE1]/70 text-sm">
                  <span className="font-medium block text-[#F1EBE1]">
                    {item.label}
                  </span>
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Social Media */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-sm text-[#F1EBE1]/50 mb-4">Follow Us</p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-[#B8935A]/20 text-[#F1EBE1]/70 hover:text-[#1F1D1B] hover:bg-[#B8935A] hover:border-[#B8935A] transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;