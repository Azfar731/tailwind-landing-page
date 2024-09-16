import Card from "./Card";
import CssSVG from "../assets/svgs/css-icon.svg?react";
export default function MainContent() {
  return (
    <div className="bg-gray-200 px-4 py-4">
      <div>
        <div className="mt-10 py-1 border-b border-indigo-700">
          <h2 className="text-indigo-700 text-xl font-bold">How it Works</h2>
        </div>
        <p className="mt-4 text-gray-500 text-sm">
          Tailwind is designed for rapid development of modern applications. At
          its core, it is a robust mobile-first design system built with
          developer experience in mind. After using Tailwind CSS, you will find
          it difficult to go back to use anything else. Learn all about it in
          this all-inclusive course.
        </p>
      </div>
      <div>
        <div className="mt-8 py-1 border-b border-indigo-700">
          <h2 className="text-indigo-700 text-xl font-bold">Advantages</h2>
        </div>
        <Card Icon={CssSVG} />
      </div>
    </div>
  );
}
