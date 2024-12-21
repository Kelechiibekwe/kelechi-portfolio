"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  // Handler for sending an email via mailto
  const handleEmailClick = () => {
    window.open("mailto:kelechiibekwe@outlook.com", "_blank");
  };

  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={handleEmailClick}
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10"
      >
        Email Me{" "}
        <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </div>
  );
}