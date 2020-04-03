import React, { PureComponent } from 'react';
import {
    ResponsiveContainer,BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const data = [
  {
    name: 'Lundi', humeur: 2400, amt: 2400,
  },
  {
    name: 'Mardi',  humeur: 1398, amt: 2210,
  },
  {
    name: 'Mercredi',  humeur: -9800, amt: 2290,
  },
  {
    name: 'Jeudi',  humeur: 3908, amt: 2000,
  },
  {
    name: 'Vendredi',  humeur: 4800, amt: 2181,
  },
  {
    name: 'Samedi',  humeur: -3800, amt: 2500,
  },
  {
    name: 'Dimanche',  humeur: 4300, amt: 2100,
  },
];

export default class Humeur extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q68cz43w/';

  render() {
    return (
    <ResponsiveContainer>
      <BarChart
        width={200}
        height={100}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize={10}/>
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="humeur" barSize={20} fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
