import './TypeExpenses.css';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#B7C7FF', '#EFF8C0', '#FFBB28', '#8644DB', '#FF4081', '#795548', '#9E9E9E', '#FFCC99'];

type ExpenseData = {
    CategoryName: string;
    CategoryAmount: number;
};

const TypeExpensesWheel = ({ data }: { data: ExpenseData[] }) => {
    console.log(data);

    const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
        if (active && payload && payload.length) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: "#fff",
                        padding: "5px",
                        borderRadius: "5px",
                        border: "1px solid #ccc"
                    }}
                >
                    <p className="label">{`${payload[0].payload.CategoryName}: $${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="monthly-budget">
            <div className="IconImage" style={{ display: "flex", flexDirection: "row" }}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FExpensesIcon.png?alt=media&token=7d512b2b-ae50-4ad1-a596-c09ff45f8498"
                    alt="Icon"
                    className="Icon1"
                    height={40}
                />
                <div className="ExpensesText-wheel">
                    <h2>Expenses</h2>
                    <p>Your expenses this month</p>
                </div>
            </div>

            <div className="circular-chart">
                <PieChart width={220} height={220}>
                    <Pie
                        data={data}
                        outerRadius={90}
                        innerRadius={50}
                        paddingAngle={0}
                        dataKey="CategoryAmount"
                    >
                        {data.map((entry, index) => (
                            <Cell  fill={COLORS[index % COLORS.length]} key={`cell-${entry}`} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </div>
        </div>
    );
};

export default TypeExpensesWheel;


