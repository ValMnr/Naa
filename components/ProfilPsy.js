import React, { PureComponent } from 'react';
import {
    ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';

  state = {
    data : [
      {
        subject: 'Estime de soi', A: 130,  fullMark: 150,
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
    ]

  }
  constructor(props) {
    super(props);

    var data = [];
    var self = this;

    fetch('http://127.0.0.1:3000/api/CINE/spider',  
    {
      
      method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
        userId: "5e88dec1cf7202b3d1b66d00",
      })
    })

    .then((response) => response.json())

      .then(function (res) {
        console.log("res"+res);
          data = [
            {
              subject: 'Estime de soi', A: res.score[0],  fullMark: 150,
            },
            {
              subject: 'Sérénité', A: res.score[1],  fullMark: 150,
            },
            {
              subject: 'Confiance', A: res.score[2],  fullMark: 150,
            },
            {
              subject: 'Assurance', A: res.score[3],  fullMark: 150,
            },
            {
              subject: 'Prise de risque', A: res.score[4],  fullMark: 150,
            },
          ]

      }).then(function () {
        console.log("caca")
        self.setState({ data: data });

      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    
    return (
      
    <ResponsiveContainer>
      
        <RadarChart cx={200} cy={80} outerRadius={50} width={100} height={100} data={this.state.data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" fontSize={10} />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#2F4F4F" fill="#2F4F4F" fillOpacity={0.6} />
        </RadarChart>
    </ResponsiveContainer>
    );
  }
}
