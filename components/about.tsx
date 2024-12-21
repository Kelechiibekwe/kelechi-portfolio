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
    Hey! I’m <span className="font-medium">Kelechi</span>, a software developer
    based in <span className="font-medium">Canada</span> who loves building
    high performance web apps. My tech journey started with a{" "}
    <span className="font-medium">Mechanical Engineering</span> degree, where I
    discovered my passion for tackling complex problems through code.
  </p>

  <p className="mb-3">
    I sharpened my skills further by earning a{" "}
    <span className="font-medium">
      computer science certification from MIT (via edX)
    </span>{" "}
    and attending a bootcamp focused on{" "}
    <span className="font-medium">system design</span> and{" "}
    <span className="font-medium">algorithms</span>.
  </p>

  <p className="mb-3">
    Currently, at <span className="font-medium">TD Group</span>, I work on
    high-impact projects—application server migration, optimizing data processing for 
    large-scale systems and rolling out new features for our customers. When I’m not
    coding at work, I’m exploring the latest technologies, sharing my learnings,
    and building personal projects. Right now, I’m developing a journaling
    application that uses a Language Model (LLM) and embedded vector search for
    semantic understanding.
  </p>
</motion.section>
  );
}
