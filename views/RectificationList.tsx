import React, { useState } from 'react';
import { MOCK_RECTIFICATIONS } from '../constants';
import { Filter, Search, ChevronDown, Camera } from 'lucide-react';

export const RectificationList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'待整改' | '待审核' | '整改完成'>('待整改');

  const filteredList = activeTab === '待整改' 
    ? MOCK_RECTIFICATIONS 
    : MOCK_RECTIFICATIONS.filter(i => i.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Filters */}
      <div className="bg-white sticky top-0 z-10">
          <div className="flex border-b border-gray-100">
            {['待整改', '待审核', '整改完成'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`flex-1 py-3 text-sm font-medium relative ${
                        activeTab === tab ? 'text-blue-600' : 'text-gray-500'
                    }`}
                >
                    {tab}
                    {activeTab === tab && (
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full" />
                    )}
                </button>
            ))}
          </div>
          <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-500 bg-gray-50">
             <div className="flex items-center space-x-1">
                <span>筛选:</span>
                <span className="bg-white border border-gray-200 px-2 py-0.5 rounded-full flex items-center">
                    本月 <ChevronDown size={10} className="ml-1"/>
                </span>
                <span className="bg-white border border-gray-200 px-2 py-0.5 rounded-full flex items-center">
                    来源 <ChevronDown size={10} className="ml-1"/>
                </span>
             </div>
             <div>共 {filteredList.length} 条</div>
          </div>
      </div>

      {/* List */}
      <div className="p-4 space-y-3">
        {filteredList.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm relative overflow-hidden">
                <div className={`absolute top-0 right-0 px-2 py-1 text-[10px] font-bold rounded-bl-lg ${
                    item.status === '待整改' ? 'bg-red-100 text-red-600' : 
                    item.status === '待审核' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                }`}>
                    {item.status}
                </div>

                <div className="flex items-start space-x-3">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                         {item.imageUrl ? (
                             <img src={item.imageUrl} alt="issue" className="w-full h-full object-cover rounded-lg" />
                         ) : (
                             <Camera size={20} className="text-gray-400" />
                         )}
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
                        <div className="flex items-center text-xs text-gray-500 space-x-2 mb-1">
                            <span className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">{item.storeName}</span>
                            <span>{item.source}</span>
                        </div>
                        <div className="text-xs text-gray-400">{item.date}</div>
                    </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-50 flex justify-end space-x-2">
                    <button className="text-xs text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg">查看详情</button>
                    {item.status === '待整改' && (
                        <button className="text-xs text-white bg-blue-600 px-3 py-1.5 rounded-lg shadow-sm shadow-blue-200">去整改</button>
                    )}
                    {item.status === '待审核' && (
                        <button className="text-xs text-white bg-orange-500 px-3 py-1.5 rounded-lg shadow-sm shadow-orange-200">去审核</button>
                    )}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};