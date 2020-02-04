import React, { useContext } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import gsap from "gsap";

import { ItemContext } from "../contexts/ItemContext";

export default function Wheel() {
  let x = 1;
  const rotateWheel = () => {
    console.log("rotate");
    x = x + 1;
    gsap.to(".recharts-pie", {
      duration: 3,
      rotation: 1240 * x,
      transformOrigin: "50% 50%"
    });
  };

  const { item } = useContext(ItemContext);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${item[index].item} chance:${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <>
      <div>
        <ResponsiveContainer width="95%">
          <PieChart>
            <Pie
              data={item}
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
              dataKey="times"
              isAnimationActive={false}
            >
              {item.map((el, index) => (
                <Cell key={`cell-${index}`} fill={el.background} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div>
        <button onClick={rotateWheel}>dfg</button>
      </div>
    </>
  );
}
