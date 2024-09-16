interface ChildComponentProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
}

const Card: React.FC<ChildComponentProps> = ({ Icon, title,body }) => {
  return (
    <div className="mt-4 px-6 py-6 md:w-2/6 md:h-full md:mt-0 bg-white flex flex-col items-center justify-center rounded-lg border-b-4 border-pink-400">
      <div className="p-2 bg-gray-200 rounded-full">
        <Icon className="h-12 w-12 fill-indigo-700"/>
      </div>
      <h3 className="font-bold mt-4" >{title}</h3>
      <p className="mt-3 text-gray-500 text-sm text-center ">{body}</p>
    </div>
  );
};

export default Card;
