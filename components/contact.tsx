"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-1 dark:text-white/80">
        I’m always happy to connect, especially as I explore new opportunities.
        Whether you have a question, want to discuss a potential role, or just feel
        like saying hello, my inbox is open. Drop me a message, and I’ll get back 
        to you as soon as possible!

        <br/>
        <br/>
        <SubmitBtn />
      </p>
    </motion.section>
  );
}