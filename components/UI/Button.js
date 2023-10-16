"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ArrowLeft from "../Icons/ArrowLeft";

const Button = () => {
  return (
    <Link href={"/"} className="block w-40">
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex items-center p-4 w-36 shadow-lg rounded-md mb-16 dark:text-white dark:bg-gray-700 dark:shadow-2xl">
        <ArrowLeft />
        Back
      </motion.button>
    </Link>
  );
};

export default Button;
