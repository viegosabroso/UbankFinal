import './Tinycards.css';


interface TinycardsProps {
    first_part: string;
    second_part: string;
    img: string;
  }
  
  const Tinycards = ({ first_part, second_part, img }: TinycardsProps) => {
    return (
      <div className="tinycards">
        <img src={img} alt={`${first_part} icon`} />
        <h2>{first_part} <span className="highlighted">{second_part}</span></h2>
      </div>
    );
  };

export default Tinycards;