import { ArrowDownIcon, ArrowLeftIcon } from "@heroicons/react/outline";
import style from "../styles/Page.module.css";
export default function Header({ title, question }) {
  return (
    <div className={`${style.page_animation} mx-5 lg:mx-10 py-16`}>
      <h1 className="text-green-500 text-lg tracking-wide pb-5">{question}</h1>
      <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-white">
        {title}
      </p>
      <div className="flex justify-end mt-10">
        <ArrowDownIcon className="w-6 h-6 lg:h-8 lg:w-8 text-slate-500 animate-bounce cursor-pointer lg:hover:text-slate-50 transition duration-300 ease-out " />
      </div>
    </div>
  );
}
