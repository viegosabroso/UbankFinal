const Form = ({imgSrc,question}: {imgSrc: string, question: string}) => {


    return(
        <>
        <div className="form-container">
            <img src={imgSrc} alt="" />
            <h1 className="question">{question}</h1>
            
        </div>
        </>
    )
};
export default Form;