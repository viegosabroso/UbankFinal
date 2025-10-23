
import { useEffect, useState } from "react";
import { UseContextIncomes } from "../Hooks/Usecontext";
import {  updateUserData } from "../Services/Userdata";
import UseDashboard from "../Hooks/DashboardHooks";
interface IncomesProps {
    IncomeName: string;
    IncomeAmount: number;
    IncomeDate: string;
}

export const UseIncomes = () =>{

    
    const { handleLogout } = UseDashboard() as { username: string; handleLogout: () => Promise<void>; };

    
const {incomesdata,ExpenseData} = UseContextIncomes();


const [incomes, setIncomes] = useState<IncomesProps[]>([]);
const [TotalIncomes, setTotalIncomes] = useState<number>(0);
const [TotalExpenses, setTotalExpenses] = useState<number>(0);
const [TotalMinorExpenses, setTotalMinorExpenses] = useState<number>(0);
const [expenses, setExpenses] = useState<ExpenseData[]>([]);
const [minorExpenses, setMinorExpenses] = useState<ExpenseData[]>([]);
const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);
const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
const [CategoriesData, setCategoriesData] = useState<any>([]);

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
CategoryImg:"https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FFIestas.png?alt=media&token=744b99b4-8fe4-4e50-9fae-4f6292806d7d"

},
{
CategoryName: "Other Expenses",
CategoryAmount: 0,
CategoryImg:"https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FMErcado.png?alt=media&token=fa267137-875d-461c-b19f-d3f32bddebfa"

}
]


const categoriesexpensesadd = (expenses: ExpenseData[]) => {

const categories = Category.map((category) => {
    const filterbycategory = expenses.filter((expense) => expense.ExpensesCategory === category.CategoryName);
    const categoryamount = filterbycategory.map((expense) => expense.ExpensesAmount).reduce((acc, curr) => acc + curr, 0);
    return {
        ...category,
         CategoryAmount: categoryamount,
    }
})
        
return categories;
}

useEffect(() => {
console.log(incomesdata);

setIncomes(incomesdata)
setExpenses(ExpenseData)

setCategoriesData(categoriesexpensesadd(ExpenseData));
MinorExpensesselector(ExpenseData);

}, [incomesdata,ExpenseData]);


const MinorExpensesselector = (expenses: ExpenseData[]) => {

    
const filterbyfood= expenses.filter((expense) => expense.ExpensesCategory === "Food" && expense.ExpensesAmount < 4000);
const filterbytransport= expenses.filter((expense) => expense.ExpensesCategory === "Transportation" && expense.ExpensesAmount > 10000);

const Minorexpenses = [...filterbyfood,...filterbytransport]
setMinorExpenses(Minorexpenses);
console.log(Minorexpenses);
}

useEffect(() => {
 console.log(incomes);
 console.log(expenses);
 
 
 
 const getincomesamount = remainingIncomes.map((income) => income.IncomeAmount).reduce((acc, curr) => acc + curr, 0);
 const getexpensesamount = remainingExpenses.map((expense) => expense.ExpensesAmount).reduce((acc, curr) => acc + curr, 0);
const getminorexpensesamount = minorExpenses.map((expense: ExpenseData) => expense.ExpensesAmount).reduce((acc: number, curr: number) => acc + curr, 0);
 console.log(getincomesamount);
 setTotalExpenses(getexpensesamount);
 setTotalIncomes(getincomesamount);
 setTotalMinorExpenses(getminorexpensesamount);
 
 
}, [incomes,expenses]);



const handleIncomeSubmit = (data: { incomeName: string; amount: number; date: string }) => {
    console.log("upload");

    const newIncomes = [
        ...incomes,
        {
            IncomeName: data.incomeName,
            IncomeAmount: data.amount,
            IncomeDate: data.date,
        },
    ];
    setIncomes(newIncomes);
    updateUserData({ Incomes: newIncomes });
    console.log("Datos del formulario:", data);
    setIsIncomeModalOpen(false);
};

     interface ExpenseData {
        ExpensesName: string;
        ExpensesAmount: number;
        ExpensesDate: string;
        ExpensesCategory: string;
      }
      
     
  

      const handleExpenseSubmit = (data: ExpenseData) => {
          
          setExpenses((prevExpenses) => [...prevExpenses, data]);
        const newExpenses = [...expenses, {
            ExpensesName: data.ExpensesName,
            ExpensesAmount: data.ExpensesAmount,
            ExpensesDate: data.ExpensesDate,
            ExpensesCategory: data.ExpensesCategory,
        }]
        updateUserData({ Expenses: newExpenses });
        console.log("Nuevo gasto agregado:", data);
        setIsExpenseModalOpen(false);
      };


    
      const [, ...remainingIncomes] = incomes;
      const [, ...remainingExpenses] = expenses;


      return ({
        handleExpenseSubmit,
        handleIncomeSubmit,
        incomes,
        expenses,
        minorExpenses,
        TotalIncomes,
        TotalExpenses,
        TotalMinorExpenses,
        CategoriesData,
        setCategoriesData,
        isIncomeModalOpen,
        setIsIncomeModalOpen,
        isExpenseModalOpen,
        setIsExpenseModalOpen,
        handleLogout,
        remainingExpenses,
        remainingIncomes,
        categoriesexpensesadd,

    })
    }