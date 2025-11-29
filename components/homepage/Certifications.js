"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Certifications({ forwardedRef }) {
  return (
    <section ref={forwardedRef} className="my-[10%] relative">
      <div className="mt-20 pt-12 border-t border-secondary-600/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative background elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary-600/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-400/5 rounded-full blur-3xl" />
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl 2xl:text-6xl text-secondary-400 font-bold mb-3 relative z-10">
              Certifications & Credentials
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-secondary-600 to-transparent mb-8" />
          </motion.div>

          <div className="flex flex-col items-center md:items-start relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="group relative w-full max-w-5xl"
            >
              {/* Main card with glassmorphism effect */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary-600/10 via-secondary-600/5 to-secondary-400/10 backdrop-blur-sm border border-secondary-600/20 shadow-2xl transition-all duration-500 hover:border-secondary-600/40 hover:shadow-[0_20px_60px_rgba(140,140,115,0.3)]">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-600/0 via-secondary-400/0 to-secondary-600/0 group-hover:from-secondary-600/10 group-hover:via-secondary-400/5 group-hover:to-secondary-600/10 transition-all duration-700" />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <div className="relative p-8 md:p-10">
                  {/* Badge/Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                    className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary-600/20 to-secondary-400/20 border border-secondary-600/30"
                  >
                    <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span className="text-sm font-semibold text-secondary-600 uppercase tracking-wider">Verified</span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-2xl md:text-3xl 2xl:text-5xl text-secondary-400 font-bold mb-6 leading-tight"
                  >
                    Corporate Affairs Commission
                    <br />
                    <span className="text-secondary-600/80 text-xl md:text-2xl 2xl:text-4xl font-medium">(CAC) Certificate</span>
                  </motion.h3>

                  {/* Certificate Image Container */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative group/image overflow-hidden rounded-xl bg-gradient-to-br from-secondary-600/10 to-secondary-400/5 p-4 border border-secondary-600/20 shadow-inner"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-600/20 via-transparent to-secondary-400/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 blur-xl" />
                    
                    <div className="relative z-10">
                      <Image
                        src="/assets/images/cac-cert.png"
                        alt="Corporate Affairs Commission (CAC) Certificate - OpulenceDeveloper"
                        className="rounded-lg shadow-2xl border-2 border-secondary-600/30 group-hover/image:border-secondary-600/50 transition-all duration-500 max-w-full h-auto w-full"
                        width={800}
                        height={600}
                        loading="lazy"
                      />
                    </div>

                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-600/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-6 flex items-start gap-3"
                  >
                    <div className="mt-1.5">
                      <svg className="w-5 h-5 text-secondary-600/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg 2xl:text-2xl text-secondary-600/80 leading-relaxed">
                      Limited Liability Company (LLC) registered with the{" "}
                      <span className="font-semibold text-secondary-600">Corporate Affairs Commission of Nigeria</span>
                      . This certification validates the legal registration and operational status of the business.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

