import Tinycards from "./Components/Tinycards/Tinycards";
import './Secondview.css';

const TinycardsData = [  {
    first_part: "Set your",
    second_part: "goal",
    img: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2Fverified.png?alt=media&token=3f802069-5e83-441b-ab1e-76f9e8f0ab9a"
  },
  {
    first_part: "Plan your",
    second_part: "contribution",
    img: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2Fsupport-dollar.png?alt=media&token=37dd0f14-bd58-4b9b-ae59-d2ca8e744cf6"
  },
  {
    first_part: "Watch your",
    second_part: "progress",
    img: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2Fcalendar.png?alt=media&token=b7e3d316-c20f-4271-9ccf-682a83bdf154"
  },
]
interface ISecondviewProps {
    Handlenext: () => void;
    cancel: () => void;
}


const Secontview = ({Handlenext, cancel}: ISecondviewProps) => {
    return (
    <div className="secondview">
        <div className="secondview-header">
            <div className="secondview-text">
                <h1>
                    Ready to reach your <span className="Secondview-highlight">savings</span> goal?
                </h1>
                <h3>Here's how it works:</h3>
            </div>
            
            <div className="secondview-image">
                <img src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FPig.png?alt=media&token=638e9e45-609a-4ca3-8855-4aa84c1483b4" 
                alt="Piggy Bank Illustration"
            />
            </div>
        </div>
            <div className="secondview-cards">
                    {TinycardsData.map((item, index) => (
                    <Tinycards
                    key={index}
                    first_part={item.first_part}
                    second_part={item.second_part}
                    img={item.img}
                    />
                ))}
            </div>
            <div className="secondview-buttons">
                <button className="button-cancel" onClick={cancel}>Cancel</button>
                <button className="button-continue" onClick={Handlenext}>Continue</button>
            </div>
       
    </div>
    )
}

export default Secontview;