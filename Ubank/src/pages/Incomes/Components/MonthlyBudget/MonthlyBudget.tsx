import './MonthlyBudget.css';

import { PieChart, Pie, Cell } from 'recharts'


interface MonthlyBudgetProps {
    budgetAmount: number;
    expensesAmount: number;
    minorExpensesAmount: number;

}

const MonthlyBudget = ({ budgetAmount, expensesAmount, minorExpensesAmount }: MonthlyBudgetProps) => {


    return (
        <div className="monthly-budget1">

            <div className="IconImage" style={{ display: "flex", flexDirection: "row", marginLeft:"-50px", marginTop: "10px"}} >
                <img src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FExpensesIcon.png?alt=media&token=7d512b2b-ae50-4ad1-a596-c09ff45f8498" alt="Icon" className="Icon1" height={29} /> 
                <h2>Budget and M. Expenses</h2> 
                
            </div>
                <p className='description-montly'>Your minor expenses this month</p>
            <div className="circular-chart1">
                <PieChart width={200} height={200}>
                    <Pie
                        data={[{ name: 'Expenses', value: expensesAmount }, { name: 'Minor Expenses', value: minorExpensesAmount }]}
                        outerRadius={100}
                        innerRadius={80}
                        paddingAngle={0}
                        dataKey={"value"}

                    >
                        <Cell fill="#B7C7FF" />
                        <Cell fill="#FF7008" />
                    </Pie>
                </PieChart>
                <div className="blue">
                    <h5>Monthly Budget</h5>
                    <h3>${budgetAmount.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</h3>
                </div>





            </div>


            <div className="DataDown" >
                <div className="expenses-summary">
                    <p>Expenses: {expensesAmount.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                    <p>Minor expenses: {minorExpensesAmount.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                </div>
            </div>
        </div>
    );
}

export default MonthlyBudget;
