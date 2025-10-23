

import { PieChart, Pie, Cell } from 'recharts'



const Savingsgraph = () => {


    return (
        <div className="savings-goals1">
                
            <div className="circular-chart1">
                <PieChart width={200} height={200}>
                    <Pie
                        data={[{ name: 'Expenses', value: 100 }, { name: 'Minor Expenses', value: 100 }]}
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
                    <h5>Saving Progress</h5>
                    <h3>${1}</h3>
                </div>
                

                

            </div>
        </div>
    );
}

export default Savingsgraph;
