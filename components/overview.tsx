"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: 45,
  },
  {
    name: "Feb",
    total: 52,
  },
  {
    name: "Mar",
    total: 61,
  },
  {
    name: "Apr",
    total: 58,
  },
  {
    name: "May",
    total: 65,
  },
  {
    name: "Jun",
    total: 78,
  },
  {
    name: "Jul",
    total: 80,
  },
  {
    name: "Aug",
    total: 75,
  },
  {
    name: "Sep",
    total: 82,
  },
  {
    name: "Oct",
    total: 85,
  },
  {
    name: "Nov",
    total: 91,
  },
  {
    name: "Dec",
    total: 88,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}
