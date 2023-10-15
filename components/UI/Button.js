import Link from "next/link";
import ArrowLeft from "../Icons/ArrowLeft";

const Button = () => {
  return (
    <button className="p-4 w-36 shadow-lg rounded-md mb-16 dark:text-white dark:bg-gray-700 dark:shadow-2xl">
      <Link href={"/"} className="flex items-center">
        <ArrowLeft />
        Back
      </Link>
    </button>
  );
};

export default Button;
