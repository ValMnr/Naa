import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../screens/Controle.css';
import C from '../screens/images/C.png';
import I from '../screens/images/I.png';
import N from '../screens/images/N.png';
import E from '../screens/images/E.png';
    

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 400 },
  { name: 'Group C', value: 400 },
  { name: 'Group D', value: 400 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
    const cine = ["IMPRÉVISiBILITÉ","CONTRÔLE","NOUVEAUTÉ","ÉGO MENACÉ"]
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text className="bolos" x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {cine[index]}
    </text>
  );
};



export default class CINEBOUT extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (

      <div>
        <div className="bar">
          <h2> Menu CINE </h2>

        </div>


        <div className="Camembert">
          <div className="haut">
            <a href="../screens/Controle.js">
            <img  src={C} alt="" height="110px" width="111px"></img>
            </a>
            <a href="../screens/Imprevisibilite.js">
            <img  src={I} alt="" height="110px"></img>
            </a>
          </div>
          <div className="bas">
          <a href="../screens/Nouveaute.js">
            <img src={N} alt="" height="110px"></img>
            </a>
            <a href="../screens/Ego.js">
            <img src={E} alt="" height="110px"></img>
            </a>
          </div>
      </div>

      </div>
    );
  }
}

/*<PieChart width={100000} height={1200}>
        <Pie
          data={data}
          cx={190}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={110}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>*/