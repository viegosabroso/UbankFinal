import './Incomespage.css'
import Incomescard from "./Components/Incomescard/Incomescard";
import MinorExpense from "./Components/MinorExpense/MinorExpense";
import MonthlyBudget from "./Components/MonthlyBudget/MonthlyBudget";
import IncomesExpenses from "./Components/IncomesExpense/IncomesExpense";
import IncomeForm from "./Components/IncomesForm/IncomeForm";
import IncomesMinorexpenses from "./Components/IncomesMinorexpense/IncomesMinorexpense";
import Motivation from "./Components/Advertisement/Motivation";
import ExpenseForm from "./Components/ExpensesForm/ExpensesForm";
import Expensescard from "./Components/Expenses/Expenses";
import TypeExpensesWheel from "./Components/TypeExpensesPie/TypeExpensesPie";
import Sidebar from "../../components/Sidebar/Sidebar";
import CategoriesCards from "./Components/Categoriescards/CategoriesCards";
import img1 from "../../assets/icon-income.webp"
import img2 from "../../assets/incomemoney.webp"
import { UseIncomes } from "../../Hooks/Useincomes";







const Incomes = () => {

    

    const { handleExpenseSubmit, 
        remainingExpenses,
        remainingIncomes,
        handleIncomeSubmit,
        expenses,
        minorExpenses,
        TotalIncomes,
        TotalExpenses,
        TotalMinorExpenses,
        CategoriesData,
        isIncomeModalOpen,
        setIsIncomeModalOpen,
        categoriesexpensesadd,
        isExpenseModalOpen,
        setIsExpenseModalOpen,
        handleLogout, } = UseIncomes()

    

    return (
        <div className="incomes-main-container">
            <Sidebar onLogout={handleLogout} />
            <section className='info-section'>
                <div className='text-content'>
                    <h1 className="main-title">Incomes and Expenses</h1>
                    <p >Here you can enter your income and expenses to have control over them.</p>
                </div>
                <div className='body-content'>
                    <div>
                        {isIncomeModalOpen && (
                            <div className="modal-overlay">
                                <div className="modal-content">
                                    <button className="close-button" onClick={() => setIsIncomeModalOpen(false)}>X</button>
                                    <IncomeForm onSubmit={handleIncomeSubmit} />
                                </div>
                            </div>
                        )}
                    </div>
                    {isExpenseModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <button className="close-button" onClick={() => setIsExpenseModalOpen(false)}>
                                    X
                                </button>
                                <ExpenseForm onSubmit={handleExpenseSubmit} />
                            </div>
                        </div>
                    )}

                    <div className="Firstrow-container">
                        <div className="incomes-container">
                            <div className="header2">
                                <div className="icon" style={{ backgroundColor: '#D7F177' }}> <img src={img1} alt="income-info" width={14} /></div>
                                <h1>Incomes</h1>
                                <img className="add-income" onClick={() => setIsIncomeModalOpen(true)} src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FAddbutton.png?alt=media&token=54634ae9-a33a-4abe-8827-f698b40714c4" alt="" height={45} width={45} />
                            </div>
                            <p>Your incomes this month</p>

                            <div className="incomescard-container-scroll">


                                {remainingIncomes.length === 0 ? <h3>No incomes added yet</h3> :

                                    remainingIncomes.map((income, index) => (
                                        <Incomescard key={index} IncomeTitle={income.IncomeName} IncomeAmount={income.IncomeAmount} IncomeDate={income.IncomeDate} Incomesimg={img2} />
                                    ))


                                }
                            </div>

                            <h3 className="total-incomes">Total: ${TotalIncomes.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</h3>


                        </div>
                        <div className="Bargraph-container">

                            <div>
                                {
                                    

                                <IncomesExpenses incomeAmount={TotalIncomes} expenseAmount={TotalExpenses} />
                                }
                            </div>
                            <div>

                                <IncomesMinorexpenses incomeAmount={TotalIncomes} minorexpense={TotalMinorExpenses} />
                            </div>
                        </div>
                        <div>
                            <Motivation />
                        </div>
                    </div>
                    <div className="Secondrow-container">

                        <MonthlyBudget budgetAmount={TotalIncomes} expensesAmount={TotalExpenses} minorExpensesAmount={TotalMinorExpenses} />
                        <div className="Minor-expense-container">
                            <h1>Minor Expenses</h1>
                            <div className="minor-expense-scroll-container">

                                {
                                    minorExpenses.length === 0 ? <h3>No minor expenses detected yet</h3> :
                                        minorExpenses.map((expense: any, index: any) => (
                                            <MinorExpense key={index} ExpenseAmount={expense.ExpensesAmount} ExpenseDate={expense.ExpensesDate} ExpenseName={expense.ExpensesName} Expensetype={expense.ExpensesCategory} />
                                        ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="Thirdrow-container">

                        <div className="expensescards-container">

                            <div className="categories-container">
                                
                                    <TypeExpensesWheel data={CategoriesData} />   
                                


                                
                                <div className="categories-scroll-container">

                                    {
                                        categoriesexpensesadd(expenses).map((category, index) => (
                                            <CategoriesCards key={index} TypeExpenses={category.CategoryName} TypeAmount={category.CategoryAmount} TypeImg={category.CategoryImg} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="Expensescontainer-all">
                                <div className="containerheader-expenses">
                                    <div>

                                        <h1>Your expenses by category</h1>
                                
                                    </div>
                                    <div className="Addexpenses-container">

                                         

                                        <img className="add-expenses" onClick={() => setIsExpenseModalOpen(true)} src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FAddbutton.png?alt=media&token=54634ae9-a33a-4abe-8827-f698b40714c4" alt="" height={50} width={50} />
                                    </div>
                                </div>
                                <div className="expensescard-container-scroll">

                                    {
                                        remainingExpenses.length === 0 ? <h3>No expenses added yet</h3> :

                                            remainingExpenses.map((expense, index) => (
                                                <Expensescard key={index} ExpensesTitle={expense.ExpensesName} ExpensesAmount={expense.ExpensesAmount} ExpensesDate={expense.ExpensesDate} ExpensesType={expense.ExpensesCategory} Expensesimg="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FGroup%201000006371.png?alt=media&token=229de619-a0ec-42ce-87fa-1c9d321440b1" />
                                            ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </section>
        </div>

    )
};

export default Incomes;