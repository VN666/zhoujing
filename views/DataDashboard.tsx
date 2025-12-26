import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChevronRight } from 'lucide-react';

const DATA = [
  { name: '门店自检', value: 97, color: '#3b82f6' },
  { name: '视频巡检', value: 85, color: '#8b5cf6' },
  { name: '督查巡检', value: 92, color: '#f59e0b' },
];

const ISSUE_DATA = [
  { name: '仪容仪表', value: 1.2 },
  { name: '后厨卫生', value: 1.0 },
  { name: '食品效期', value: 0.8 },
  { name: '服务态度', value: 0.5 },
];

export const DataDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white p-4 mb-2">
         <h2 className="font-bold text-lg text-gray-800 mb-4">数据看板</h2>
         
         {/* Top Stats Cards */}
         <div className="grid grid-cols-3 gap-2 mb-6">
            {DATA.map((item) => (
                <div key={item.name} className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">{item.name}</div>
                    <div className="text-xl font-bold" style={{ color: item.color }}>{item.value}%</div>
                    <div className="text-[10px] text-gray-400 mt-1">合格率</div>
                </div>
            ))}
         </div>

         {/* Chart 1: Completion Rates */}
         <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-sm text-gray-700">各项合格率对比</h3>
                <span className="text-xs text-gray-400">近30天</span>
            </div>
            <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={DATA} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb"/>
                        <XAxis type="number" domain={[0, 100]} hide />
                        <YAxis dataKey="name" type="category" width={60} tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                        <Tooltip cursor={{fill: 'transparent'}} />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                            {DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
         </div>
      </div>

      {/* Top Issues Section */}
      <div className="bg-white p-4">
        <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-sm text-gray-700">问题率排名 TOP5</h3>
            <button className="text-xs text-gray-400 flex items-center">
                查看全部 <ChevronRight size={12} />
            </button>
        </div>
        
        <div className="space-y-4">
            {ISSUE_DATA.map((issue, idx) => (
                <div key={issue.name}>
                    <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-gray-700">{idx + 1}. {issue.name}</span>
                        <span className="text-red-500 font-bold">{issue.value}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                        <div 
                            className="bg-red-400 h-2 rounded-full" 
                            style={{ width: `${(issue.value / 1.5) * 100}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};