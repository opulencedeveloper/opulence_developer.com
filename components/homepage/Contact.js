"use client";
import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Heading from "../UI/Heading";
import emailjs from "@emailjs/browser";
import handleWhatsAppClick from "@/helpers/whatsapp";
import { toast } from "sonner";

const sendMessageHandler = () => {
  handleWhatsAppClick(
    "Hello! 👋 I just visited your portfolio and I'm truly inspired by your skills. I'd love to connect and potentially discuss collaboration opportunities or seek advice in the field. Looking forward to chatting with you further! 🚀",
    "+2348184297165"
  );
};

export default function Contact() {
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const heading = useRef(null);
  const body = useRef(null);
  const contactSection = useRef(null);

  // Handle Form Submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const subject = encodeURIComponent("Reaching out From your Website");
  //   const body = encodeURIComponent(`Hello I'm ${name}. ${message}`);
  //   const mailtoLink = `mailto:opulencedeveloper@gmail.com?subject=${subject}&body=${body}`;
  //   window.location.href = mailtoLink;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log("1")
    if (!formRef.current) return;
    
console.log("2")
    const serviceKey = "service_rkwrql8";
    const emailTemplateId = "template_08fnxef";
    const publicKey = "QDK-arcfAZ4PWrCUp";

    if (!serviceKey || !emailTemplateId || !publicKey) {
      console.error(
        "EmailJS configuration missing: SERVICE_KEY, EMAIL_TEMPLATE_ID, or EMAIL_PUBLIC_KEY is not set."
      );
      return;
    }
    setLoading(true); 
    try {
      await emailjs.sendForm(
        serviceKey,
        emailTemplateId,
        formRef.current,
        publicKey
      );

      toast.success(
        `Thanks ${name} for reaching out! 🙌 I've received your message and will get back to you shortly.`
      );
      formRef.current.reset();
    } catch (error) {
      let errorMessage = "Something went wrong!";

      if (error.code === "ERR_NETWORK") {
        errorMessage = "Network error. Please check your internet connection.";
      } else if (error.code === "ECONNABORTED") {
        errorMessage = "Request timed out. Please try again.";
      } else if (error?.response?.data?.description) {
        errorMessage = error.response.data.description;
      }

      toast.error(errorMessage);
      console.error("Failed to send email:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactSection.current,
      start: "180px bottom",

      // markers: true,
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [contactSection]);

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <section
      id="contact"
      className="my-[10%] overflow-hidden"
      aria-label="contact me"
    >
      <Heading title="Contact" />
      <div
        ref={contactSection}
        className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12"
      >
        <div className="col-span-4">
          <h3
            ref={heading}
            className="max-w-lg translate-y-10 text-heading-3 font-semibold leading-tight opacity-0 2xl:max-w-3xl 2xl:text-7xl"
          >
            Have an awesome idea? Let&apos;s bring it to life.
          </h3>
          <p
            ref={body}
            className="mt-4 max-w-md translate-y-10 text-body-2 text-accent-100 opacity-0 2xl:max-w-2xl 2xl:text-4xl"
          >
            I am currently available for work. I am accepting new projects
            starting from today.
          </p>
          <motion.form
          ref={formRef}
            onSubmit={handleSubmit}
            name="contact"
            autoComplete="off"
            // eslint-disable-next-line react/no-unknown-property
            className="mt-10 font-grotesk"
            method="POST"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              <motion.div 
                className="relative z-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 2xl:text-body-2"
                >
                  Your name
                </label>
              </motion.div>
              <motion.div 
                className="relative z-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: -5 }}
              >
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="text"
                  name="email"
                  id="email"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 2xl:text-body-2"
                >
                  Your email
                </label>
              </motion.div>
              <motion.div 
                className="relative z-0 sm:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.01 }}
              >
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  id="message"
                  name="message"
                  rows="5"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 2xl:text-body-2"
                >
                  Your message
                </label>
              </motion.div>
            </div>
         <motion.button
  type="submit"
  className="transition-all button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.7, duration: 0.5 }}
  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(209, 209, 199, 0.3)" }}
  whileTap={{ scale: 0.95 }}
>
  {loading ? (
    <div className="spinner" />
  ) : (
    <span className="relative">
      <span className="group-hover:text-accent-400">Send Message</span>
    </span>
  )}
</motion.button>


          </motion.form>
        </div>
        <motion.div 
          className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h4 className="text-body-1 2xl:text-4xl font-semibold">
              Contact Details
            </h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <motion.a
                href="mailto:hello@huyng.xyz"
                className="group relative w-fit cursor-pointer"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span>opulencedeveloper@gmail.com</span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-[0.12em] rounded-full bg-secondary-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.button
                onClick={sendMessageHandler}
                className="group relative w-fit cursor-pointer shake-infinite"
                whileHover={{ x: 5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span>Click to whatsapp me</span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-[0.12em] rounded-full bg-secondary-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h4 className="text-body-1 2xl:text-4xl font-semibold">
              My Digital Spaces
            </h4>
            <div className="space-y-3 text-body-2 2xl:text-3xl">
              {/* <a
                href="https://bento.me/huyng"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="simple-icons:bento" color="#666" />
                <div className="relative">
                  <span>Bento</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a> */}
              <motion.a
                href="https://github.com/opulencedeveloper"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ type: "keyframes", duration: 0.5, ease: "easeInOut" }}
                >
                  <Icon icon="mdi:github" color="#666" />
                </motion.div>
                <div className="relative">
                  <span>Github</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 h-[0.10em] rounded-full bg-secondary-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/opulencedeveloper"
                className="group group flex w-fit items-center space-x-2"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ type: "keyframes", duration: 0.5, ease: "easeInOut" }}
                >
                  <Icon icon="mdi:linkedin" color="#666" />
                </motion.div>
                <div className="relative">
                  <span>LinkedIn</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 h-[0.12em] rounded-full bg-secondary-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.a>
              <motion.a
                href="https://twitter.com/KudosLucky"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ type: "keyframes", duration: 0.5, ease: "easeInOut" }}
                >
                  <Icon icon="mdi:twitter" color="#666" />
                </motion.div>
                <div className="relative">
                  <span>Twitter(X)</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 h-[0.10em] rounded-full bg-secondary-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/victor.opulence"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ type: "keyframes", duration: 0.5, ease: "easeInOut" }}
                >
                  <Icon icon="mdi:facebook" color="#666" />
                </motion.div>
                <div className="relative">
                  <span>Facebook</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 h-[0.10em] rounded-full bg-secondary-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">Location</h4>
            <motion.div 
              className="space-y-2 text-body-2 2xl:text-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.p
                animate={{ 
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                PortHarcourt, Nigeria <br></br>
                {time}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
