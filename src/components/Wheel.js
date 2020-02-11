import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import "../App.css";
import SpinButton from "./SpinButton";

import { ItemContext } from "../contexts/ItemContext";

// STYLES
const StyledChartWrapper = styled.div`
  position: relative;
  height: 95vh;
  max-height: 720px;
  background: #fff;
`;
const StyledSpinDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 999;
`;
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
        fontSize={16}
      >
        {`${item[index].item} (${(percent * 100).toFixed(0)}%)`}
      </text>
    );
  };

  return (
    <>
      <StyledChartWrapper>
        <StyledSpinDiv>{item.length ? <SpinButton /> : null}</StyledSpinDiv>
        <ResponsiveContainer width="99%" height="99%">
          <PieChart>
            <Pie
              data={item}
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
              dataKey="times"
              isAnimationActive={true}
            >
              {item.map((el, index) => (
                <Cell key={`cell-${index}`} fill={el.background} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </StyledChartWrapper>
    </>
  );
}
