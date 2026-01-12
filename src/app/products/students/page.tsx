"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroStudents from "@/app/components/students/HeroStudents";
import WeOffersStudent from "@/app/components/ProductComponents/WeOffersStudent";
import StudentInsuranceComparison from "@/app/components/students/StudentInsuranceComparison";

export default function Students() {
  return (
   <section>
    <HeroStudents/>
    <WeOffersStudent/>
    <StudentInsuranceComparison/>
   </section>
  );
}
