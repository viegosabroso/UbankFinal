import UseSavings from "../../../../Hooks/Usesavings";
import CategoriesCards from "../../../Incomes/Components/Categoriescards/CategoriesCards";
import Savingsgraph from "./Components/Chartsaving/Chartsaving";
import SavingCard from "./Components/Savingcard/SavingCard";
import { useEffect } from "react";

import './Savingdash.css'
import { useNavigate } from "react-router-dom";
const Category = [{
    CategoryName: "Rent or Housing",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FRenta.png?alt=media&token=86a9bd6b-fcd8-4205-b848-91c29a276dfc"
},
{
    CategoryName: "Food",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FMErcado.png?alt=media&token=fa267137-875d-461c-b19f-d3f32bddebfa"
},
{
    CategoryName: "Transportation",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FTransporte.png?alt=media&token=b00644a4-35bb-405a-9d2d-79b98f0d8c1b"
},
{
    CategoryName: "Entertainment",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FEntretenimiento.png?alt=media&token=36c0ff91-3af4-4651-b8c4-a2ca8692916f"
},
{
    CategoryName: "Education",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FEstudios.png?alt=media&token=6bd3aec7-cab0-4637-9515-e876abb60b4d"

},
{
    CategoryName: "Health",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FSalud.png?alt=media&token=86725444-72ee-48be-940f-b081c7f5e82c"

},
{
    CategoryName: "Sports",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FDeportes.png?alt=media&token=60c64004-71f6-41a8-a0c4-5e3c9f06cb0d"
},
{
    CategoryName: "Clothing",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FRopa.png?alt=media&token=27f6a2e8-b38b-4670-971b-612b0350435e"

},
{
    CategoryName: "Technology",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FTecnologia.png?alt=media&token=74b766cd-4cfd-4b9f-817b-124833548a71"
},
{
    CategoryName: "Social Events",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FFIestas.png?alt=media&token=744b99b4-8fe4-4e50-9fae-4f6292806d7d"

},
{
    CategoryName: "Other Expenses",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FMErcado.png?alt=media&token=fa267137-875d-461c-b19f-d3f32bddebfa"

}
]
const SavingDash = () => {
    useEffect(() => {
        const showsavingsdash = () => {
          if(savings.length > 0){
            setSavingIndex(3);
          }
        }
        showsavingsdash();
      }, []);

    const { savings } = UseSavings()

    console.log(savings);

    const navigate = useNavigate();

    const Gotodetail = (id:any) => {
        navigate(`/SavingsDetail/${id}`);
    }

    const {setSavingIndex} = UseSavings()

    //volver a renderizar las tarjetas de saving
   
    const savingcards =() =>{
        return (
        savings.slice(1).map ((saving, index) => (

            <SavingCard key={index} id={index} GotoDetail={()=>Gotodetail(index)} Categoryimg="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FRenta.png?alt=media&token=86a9bd6b-fcd8-4205-b848-91c29a276dfc" SavingTitle={saving.goalName} savingFrequency={saving.category} Savingmax={saving.goalAmount} Percentagesaved={1}  />
        )))
    }
    useEffect(() => {
        

        savingcards();
        
    }, [savings]);
    
    return (
        <div className="Container-savingdash">
                <div>
                    <div className="container-graphic-and-categories">
                        <div className="container-graphic">
                        <Savingsgraph />
                        </div>
                        <div className="container-categories-categoriesscroll">

                        </div>
                        <div className="tittle-and-scrollcategories">
                        <h3 className="tittle-categories-scroll">Category</h3>
                        <div className="categories-scroll-container">
                        {
                            Category.map((category, index) => (
                                <CategoriesCards key={index} TypeImg={category.CategoryImg} TypeExpenses={category.CategoryName} TypeAmount={category.CategoryAmount} />
                            ))
                        }
                        </div>
                        </div>
                    </div>
                    <div className="container-text-and-buttontoadd">
                    <div>
                    <h1>Your goals</h1>
                    <p className="text-small-remember">Remember to add all your savings contributions to this category to track your progress and stay motivated.</p>
                    </div>
                    <div>
                    <img className="add-expenses" src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FAddbutton.png?alt=media&token=54634ae9-a33a-4abe-8827-f698b40714c4" alt="" height={50} width={50} onClick={()=> setSavingIndex(2)} />
                    </div>
                    </div>
                    <div className="savings-cards">
                        {
                            savingcards()
                        }

                    </div>
                </div>
            </div>
    )
}

export default SavingDash;