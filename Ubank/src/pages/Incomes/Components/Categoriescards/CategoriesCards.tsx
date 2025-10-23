import './CategoriesCards.css'

interface CategoriesCardsProps {
    TypeExpenses: string,
    TypeAmount: number,
    TypeImg: string
}



const CategoriesCards = ({TypeExpenses, TypeAmount, TypeImg}: CategoriesCardsProps) => {


    return (
        
        <div className="categories-cards">
                 <img src={TypeImg} alt="card-img" className='cardType-img' height={40} />
            <div className="Typeexpensecard">
                 <h3>{TypeExpenses}</h3>
                 <p>${TypeAmount}</p>
            </div>
        </div>
    )
}

export default CategoriesCards  