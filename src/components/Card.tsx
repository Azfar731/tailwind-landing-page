interface ChildComponentProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconClass?: string; // Optional prop for className
}

const Card: React.FC<ChildComponentProps> = ({ Icon }) => {
  return (
    <div className="mt-4 px-6 py-6 bg-white flex flex-col items-center justify-center rounded-lg border-b-4 border-pink-400">
      <div className="p-2 bg-gray-200 rounded-full">
        <Icon className="h-12 w-12 fill-indigo-700"/>
      </div>
      <h3 className="font-bold mt-4" >No Custom CSS</h3>
      <p className="mt-3 text-gray-500 text-sm text-center ">Tailwind's advanced class extraction will leave your project
      free of custom CSS.</p>
    </div>
  );
};

export default Card;
