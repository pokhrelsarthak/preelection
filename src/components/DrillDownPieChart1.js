import React, { Fragment, useState } from 'react';
import axios from 'axios';
// import './recharts.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// import electiondata from './electiondata.json'
// const colors = [
// '#FF6363','#63C2FF','#FFB563','#63FF94','#A763FF','#FF63F8','#FFCE63','#63FFD6','#FFA663','#63A0FF',
// ];
const colors = [
    '#8A2BE2', // Blue Violet
    '#9932CC', // Dark Orchid
    '#800080', // Purple
    '#BA55D3', // Medium Orchid
    '#DA70D6', // Orchid
    '#9370DB', // Medium Purple
    '#8B008B', // Dark Magenta
    '#9400D3', // Dark Violet
    '#4B0082', // Indigo
    '#6A5ACD'  // Slate Blue
  ];


const DrillDownPieChart1 = (props) => {
  // const edata = electiondata;
  // const [ranges2, setRanges2] = useState([]);
  // const [ranges3, setRanges3] = useState([]);

  const fetchData = (start,end) => {
    axios.get(`http://localhost:8080/election/slice/${start}/${end}`).then((respo) => {
      const response = respo.data;
      const ranges2 = [];
      for (var i of response){
        const rangeName = i.constname;
        const rangeLabel = i.constname;
        ranges2.push({
          name: rangeName,
          value: 1,
          label: rangeLabel
        });
      }
      setPreviousData(data);
      setData(ranges2);
    }).catch(error => {
      console.error('Axios error:', error);
    }) 
  }


  const fetchData2 = (val) =>  {
      axios.get(`http://localhost:8080/election/slicesecond/${val}`)
      .then((response) => {
        console.log('Axios response:', response.data);
        const ranges3 = [];
        const k = response.data;
        for (var i of k) {
          const rangeName = i.pname;
          const rangeLabel = i.cname;
          const valuee = i.totvotes;
          ranges3.push({
            name: rangeName,
            value: valuee,
            label: rangeLabel
          });
        }
        setPreviousData(data);
        setData(ranges3);
      })
      .catch(error => {
        console.error('Axios error:', error);
      });
    }

  // 1st level data
  const ranges = [];
  let startValue = 1;
  const rangeSize = 25;
  const rangeCount = 9;
  for (let i = 0; i < rangeCount; i++) {
    const rangeName = 'Range ' + String.fromCharCode(65 + i);
    const endValue = startValue + rangeSize - 1;
    const rangeLabel = startValue + '-' + endValue;
    ranges.push({
      name: rangeName,
      value: 1,
      label: rangeLabel
    });
    startValue = endValue + 1;
  }

  const [data, setData] = useState(ranges);

  const [previousData, setPreviousData] = useState([]);
  const [level, setLevel] = useState(1);
  // const [subRangeData, setSubRangeData] = useState([]);

  // 2nd and 3rd level data
  const HandleSliceClick = (name) => {
    
    if (level === 1){
      let character = name.substring(6);
      function getRange(character) {
        const ranges = {
          A: { x: 1, y: 25 },
          B: { x: 26, y: 50 },
          C: { x: 51, y: 75 },
          D: { x: 76, y: 100 },
          E: { x: 101, y: 125 },
          F: { x: 126, y: 150 },
          G: { x: 151, y: 175 },
          H: { x: 176, y: 200 },
          I: { x: 201, y: 224 }
        };
      
        return ranges[character];
      }

      if (name === `Range ${character}`) {
        const ran = getRange(character)
        fetchData(ran.x, ran.y);
        // subRangeData = ranges2;
        setLevel(2);
        // setPreviousData(data); // Store the previous data before updating
        // setData(subRangeData);
      }
      props.handleslice();
    }

    else if (level === 2){
      fetchData2(name);
      // subRangeData = ranges3;
      setLevel(3);
      // setPreviousData(data); // Store the previous data before updating
      // setData(subRangeData);
    }
  };

  const handleBackClick = () => {
    if (level === 2){
      setData(ranges); // Resstore the previous data
      setPreviousData([]);
      setLevel(1);
      console.log(level);
      props.handleback();
    }
    if (level === 3){
      setData(previousData);
      setLevel(2);
      // console.log(level);
    }
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, value,label}) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 10; // Distance between slice and label
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const angle = midAngle > 90 && midAngle < 270 ? midAngle + 180 : midAngle; // Adjust label position for slices in the left half of the pie chart

    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <>
      {/* <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {data[index].label}
      </text> */}
      <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={'black'}
          fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={'black'} stroke="none" />
      <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >
          {`${label}`}
      </text>
      </>
    );
  };

  return (
    <Fragment>
      {previousData.length > 0 && (
        <button className="btn btn-secondary mx-2" onClick={handleBackClick} style={{ marginBottom: '10px' }}>
          Back
        </button>
      )}
      <ResponsiveContainer width="100%" height={550}>
        <PieChart>
          <Pie
            data={data}
            label={renderCustomizedLabel}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="55%"
            innerRadius={100}
            outerRadius={180}
            onClick={(data) => HandleSliceClick(data.name)}
            >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Fragment>
  );
};

export default DrillDownPieChart1;
