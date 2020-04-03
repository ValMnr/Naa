import React, { PureComponent } from 'react';
import {
    ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: 'Estime de soi', A: 120,  fullMark: 150,
  },
  {
    subject: 'Sérénité', A: 98,  fullMark: 150,
  },
  {
    subject: 'Confiance', A: 86,  fullMark: 150,
  },
  {
    subject: 'Assurance', A: 99,  fullMark: 150,
  },
  {
    subject: 'Prise de risque', A: 85,  fullMark: 150,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';

  render() {
    return (
    <ResponsiveContainer>
        <RadarChart cx={200} cy={80} outerRadius={50} width={100} height={100} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" fontSize={10} />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#2F4F4F" fill="#2F4F4F" fillOpacity={0.6} />
        </RadarChart>
    </ResponsiveContainer>
    );
  }
}
