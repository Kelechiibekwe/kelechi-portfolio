"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        Hey, I’m <span className="font-medium">Kelechi</span>, a software developer
        based in <span className="font-medium">Canada</span>. My journey began with
        a <span className="font-medium">Mechanical Engineering</span> degree, where
        I discovered my passion for solving complex design challenges through code.
        After graduation, I earned a{" "}
        <span className="font-medium">
          computer science certification from MIT (via edX)
        </span>{" "}
        and specialized in system design and algorithms. Now, I’m all about building
        high-performance web apps that balance thoughtful design with robust
        engineering.
      </p>

      <p className="mb-3">
        Currently, I’m at <span className="font-medium">TD Group</span>,
        contributing to major projects shaping the future of digital finance. I’m
        proud of how I’ve improved system performance and streamlined processes—
        building solutions that make a real difference.
      </p>

      <p className="mb-3">
        When I’m not coding, I’m exploring new technologies—like a personal
        journaling app powered by an LLM and vector search. Mindfulness and writing
        keep me grounded, and in my free time, I love discovering new vinyl records
        or unwinding with a good book. At the heart of it all, I aim to solve real
        problems, share learnings, and build solutions that genuinely benefit
        people.
      </p>
    </motion.section>
  );
}
