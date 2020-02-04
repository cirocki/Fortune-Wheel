import React, { useContext } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

import { ItemContext } from "../contexts/ItemContext";

export default function Wheel() {
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
    <div>
      <ResponsiveContainer width="95%" height="95%">
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
  );
}
