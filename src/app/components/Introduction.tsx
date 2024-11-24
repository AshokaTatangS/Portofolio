"use client";
import { useState, useEffect } from "react";
import { TypingAnimation } from "./TypingAnimation";
import RainbowButton from "./Rainbow";

export default function WelcomeSection() {
  const [showIntroduction, setShowIntroduction] = useState(false); 
  const [showStudentInfo, setShowStudentInfo] = useState(false); 

  useEffect(() => {
    const introductionTimeout = setTimeout(() => {
      setShowIntroduction(true);
    }, 1500);

    const studentInfoTimeout = setTimeout(() => {
      setShowStudentInfo(true);
    }, 3000);

    return () => {
      clearTimeout(introductionTimeout);
      clearTimeout(studentInfoTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col text-center justify-center">
      <TypingAnimation
        className="text-4xl font-bold text-black dark:text-white mb-2"
        text="WELCOME"
      />

      <div>
        {showIntroduction && (
          <TypingAnimation
            className="text-gray-300 text-lg"
            text="My name is Ashoka Tatang Solihin."
          />
        )}
        {showStudentInfo && (
          <TypingAnimation
            className="text-gray-300 mb-5 text-lg"
            text="A Student from Institute Technology of Sumatera."
          />
        )}
      </div>

      {/* Menggunakan RainbowButton dengan latar belakang hitam dan teks putih */}
      <RainbowButton className="px-8 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
        Get to know me more
      </RainbowButton>
    </div>
  );
}
