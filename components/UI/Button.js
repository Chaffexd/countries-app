import Link from "next/link";
import ArrowLeft from "../Icons/ArrowLeft";

const Button = () => {
  return (
    <Link href={"/"} className="block w-40">
      <button className="flex items-center p-4 w-36 shadow-lg rounded-md mb-16 dark:text-white dark:bg-gray-700 dark:shadow-2xl">
        <ArrowLeft />
        Back
      </button>
    </Link>
  );
};

export default Button;
