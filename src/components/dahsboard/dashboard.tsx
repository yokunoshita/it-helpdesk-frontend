import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

import {
    Clock,
    ArrowUpRight,
    AlertCircle,
    CheckCircle2,
} from "lucide-react";

const data = [
    {name: "Mon", tickets: 12},
    {name: "Tue", tickets: 19},
    {name: "Wed", tickets: 3},
    {name: "Thu", tickets: 5},
    {name: "Fri", tickets: 2},
    {name: "Sat", tickets: 3},
];

const dataDummy = [
    {name: "Completed", value: 400, color: "#10b981"},
    {name: "In Progress", value: 300, color: "#3b82f6"},
    {name: "Pending", value: 300, color: "#f59e0b"},
];

export const DaashboardView = () => {
    return(
        <div className="space-y-8 animate-in fade-in duration-500" >
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">Dashboard</h2>
                    <p className="text-slate-500 mt-1">Welcome back to your helpdesk dashboard</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Download Report</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    {label: "Tickets Completed", value:"24", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50"},
                    {label: "Tickets In Progress", value:"08", icon: Clock, color: "text-blue-600", bg: "bg-blue-50"},
                    {label: "Tickets Pending", value:"03", icon: AlertCircle, color: "text-amber-600", bg: "bg-amber-50"},
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rouded-2xl border border-slate-200 shadow-xs hover: shadow-md transition-shadow">
                        <div className="flex item-start justify-between">
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                <stat.icon className="size-6"/>
                            </div>
                            <span className="flex item-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                +12% <ArrowUpRight className="size-3 ml-0.5"/>
                            </span>
                        </div>
                        <div className="mt-4">
                            <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
                            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-6">Weekly Ticket</h3>
                    <div className="h-64 w-full relative min-h-[256px]">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="f1f5f9" />
                                <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{fill: "#94a3b8", fontSize: 12}}
                                />
                                <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{fill: "#94a3b8", fontSize: 12}}
                                />
                                <Tooltip
                                cursor={{fill: "#f8fafc"}}
                                contentStyle={{border: "none", borderRadius: "8px", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"}}
                                />
                                <Bar dataKey="tickets" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-6">Complete Statistic</h3>
                    <div className="h-64 w-full flex items-center relative min-h-[256px">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                            <PieChart>
                                <Pie
                                data={dataDummy}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value">
                                    {dataDummy.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip/>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="space-y-3 pr-8">
                            {dataDummy.map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                                    <span className="text-xs font-medium text-slate-600">{item.name}</span>
                                    <span className="text-xs font-bold text-slate-800 ml-auto">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}