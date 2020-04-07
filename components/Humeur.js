import React, { PureComponent } from 'react';
import {
    ResponsiveContainer,BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import axios from 'axios'
 
 
 
export default class Humeur extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q68cz43w/';
 
  state ={ data : [
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
  ]
  }
 
  constructor (props){
    super(props)
    var data = [];
    var self = this;
 
    axios.get('http://127.0.0.1:3000/api/humor/sessionWeek',  
    {
          params:({
        userId: "5e88dec1cf7202b3d1b66d00",
      })
    })
 
      .then(function (res) {
        var l=res.data.length
          data = [
            {
              name: 'J-7', humeur: res.data[l-7].score, amt: 2400,
            },
            {
              name: 'J-6',  humeur: res.data[l-6].score, amt: 2210,
            },
            {
              name: 'J-5',  humeur: res.data[l-5].score, amt: 2290,
            },
            {
              name: 'J-4',  humeur: res.data[l-4].score, amt: 2000,
            },
            {
              name: 'J-3',  humeur: res.data[l-3].score, amt: 2181,
            },
            {
              name: 'J-2',  humeur: res.data[l-2].score, amt: 2500,
            },
            {
              name: 'Hier',  humeur: res.data[l-1].score, amt: 2100,
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
 
  componentDidMount(){
   
 
  }
 
  render() {
 
    return (
    <ResponsiveContainer>
      <BarChart
        width={200}
        height={100}
        data={this.state.data}
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
        <Bar dataKey="humeur" barSize={20} fill="#2F4F4F" />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}