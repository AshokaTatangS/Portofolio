"use client";
import { useState } from "react";
import ShimmerButton from "./ShimerButton";
import { FaGraduationCap } from "react-icons/fa";

const educationStages = [
  { id: 1, label: "Junior High School", year: "2016 - 2019", school: "Xaverius 2 Bandarlampung", location: "Bandarlampung" },
  { id: 2, label: "Senior High School", year: "2019 - 2022", school: "Xaverius Bandarlampung", location: "Bandarlampung" },
  { id: 3, label: "University", year: "2022 - Present", school: "Institute Technology of Sumatera", location: "Lampung Selatan" },
];

export default function EducationJourney() {
  const [activeStage, setActiveStage] = useState(educationStages[0]);

  return (
    <div className="text-center my-12">
      <h2 className="text-2xl font-semibold mb-8">My Education Journey</h2>
      <div
        className="relative flex justify-between items-center mx-auto"
        style={{ width: "500px" }}
      >
        {/* Horizontal Line */}
        <div
          className="absolute top-1/2 h-1 bg-gray-300 -z-10"
          style={{ width: "460px", left: "20px", right: "20px" }}
        ></div>

        {educationStages.map((stage) => (
          <ShimmerButton
            key={stage.id}
            onClick={() => setActiveStage(stage)}
            shimmerColor={activeStage.id === stage.id ? "#00f" : "#f00"}
            shimmerDuration="5s"
            borderRadius="300%"
            background={activeStage.id === stage.id ? "rgba(255, 255, 255, 255)" : "rgba(0, 0, 0, 1)"}
            className="w-12 h-12"
          >
            <div className="flex items-center">
              {activeStage.id === stage.id ? (
                <FaGraduationCap className="text-black mr-1" />
              ) : (
                <span className="text-white">{stage.id}</span>
              )}
            </div>
          </ShimmerButton>
        ))}
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold">{activeStage.label}</h3>
        <p className="text-white">{activeStage.year}</p>
        <p className="text-white">{activeStage.school}</p>
        <p className="text-white">{activeStage.location}</p>
      </div>
    </div>
  );
}
