

interface ChildComponentProps {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    iconClass?: string; // Optional prop for className
}
  


const Card: React.FC<ChildComponentProps> = ({Icon})=>{

    return(
        <div>
            <Icon />
        </div>
    )
}


export default Card;