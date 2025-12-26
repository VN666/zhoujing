import React from 'react';
import { useApp } from '../contexts/AppContext';
import { MOCK_INSPECTIONS } from '../constants';
import { AlertCircle, CheckCircle2, Clock, ChevronRight, PlayCircle, ClipboardCheck, User } from 'lucide-react';
import { UserRole } from '../types';

export const Home: React.FC = () => {
  const { role } = useApp();

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Announcement Banner */}
      <div className="bg-orange-100 px-4 py-3 flex items-start space-x-3 mb-2">
        <AlertCircle size={18} className="text-orange-500 mt-0.5 shrink-0" />
        <div>
          <h3 className="text-sm font-semibold text-orange-800">大扫除提醒</h3>
          <p className="text-xs text-orange-700 mt-0.5">今日需执行大扫除任务，请认真执行并拍照上传。</p>
        </div>
      </div>

      <div className="px-4 space-y-4">
        {/* Quick Actions / Status Cards */}
        <div className="grid grid-cols-3 gap-3">
            <QuickActionCard 
                label="待自检" 
                count={2} 
                color="blue" 
                subtitle="未执行任务"
            />
            <QuickActionCard 
                label="未点评" 
                count={5} 
                color="orange" 
                subtitle="待处理报告"
            />
            <QuickActionCard 
                label="不合格项" 
                count={12} 
                color="red" 
                subtitle="TOP10问题"
            />
        </div>

        {/* Create Task Button (Managers Only) */}
        {(role === UserRole.REGIONAL_MANAGER || role === UserRole.AREA_MANAGER) && (
          <button className="w-full bg-white border-2 border-dashed border-blue-300 text-blue-600 py-3 rounded-xl flex items-center justify-center space-x-2 font-medium active:bg-blue-50 transition-colors">
            <span className="text-xl">+</span>
            <span>创建巡检 / 视频巡检任务</span>
          </button>
        )}

        {/* Task Tabs */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex space-x-6 border-b border-gray-100 pb-3 mb-3 overflow-x-auto no-scrollbar">
            {['待巡检', '已巡检情况', '问题项TOP10'].map((tab, i) => (
              <button key={tab} className={`shrink-0 text-sm font-medium ${i === 1 ? 'text-blue-600 border-b-2 border-blue-600 pb-2 -mb-3.5' : 'text-gray-500'}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {MOCK_INSPECTIONS.map((task) => (
              <div key={task.id} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    {task.type === '视频' ? <PlayCircle size={16} className="text-purple-500" /> : <ClipboardCheck size={16} className="text-blue-500" />}
                    <h4 className="font-medium text-gray-800 text-sm truncate pr-2">{task.title}</h4>
                  </div>
                  <div className="flex items-center mt-1.5 space-x-3 text-xs text-gray-500">
                     <span className="bg-gray-100 px-1.5 py-0.5 rounded">{task.date}</span>
                     <span>{task.type}任务</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                    {task.status === 'completed' ? (
                        <div className="text-right">
                             <div className="text-lg font-bold text-slate-800">{task.score}<span className="text-xs font-normal text-gray-500">分</span></div>
                             <div className="text-xs text-gray-500 mt-0.5 flex items-center">
                                <span className="text-green-600 font-medium">{task.fixedIssues}</span>
                                <span className="mx-0.5">/</span>
                                <span>{task.totalIssues}</span>
                                <span className="ml-1 scale-75 text-gray-400">已整改</span>
                             </div>
                        </div>
                    ) : (
                        <button className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-full">
                            去执行
                        </button>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shortcuts for Routine Tasks */}
        <div className="bg-white rounded-xl shadow-sm p-4">
             <h3 className="font-bold text-gray-800 mb-3 text-sm">日常管理</h3>
             <div className="grid grid-cols-4 gap-4">
                <ShortcutIcon icon={ClipboardCheck} label="废油台账" color="bg-yellow-100 text-yellow-600" />
                <ShortcutIcon icon={Clock} label="滤芯更换" color="bg-blue-100 text-blue-600" />
                <ShortcutIcon icon={CheckCircle2} label="制冰机" color="bg-cyan-100 text-cyan-600" />
                <ShortcutIcon icon={User} label="健康证" color="bg-green-100 text-green-600" />
             </div>
        </div>
      </div>
    </div>
  );
};

const QuickActionCard: React.FC<{ label: string; count: number; color: string; subtitle: string }> = ({ label, count, color, subtitle }) => {
    const colorClasses = {
        blue: 'text-blue-600',
        orange: 'text-orange-600',
        red: 'text-red-600'
    };
    
    return (
        <div className="bg-white p-3 rounded-xl shadow-sm flex flex-col items-center justify-center text-center py-4">
             <div className={`text-2xl font-bold mb-1 ${colorClasses[color as keyof typeof colorClasses]}`}>{count}</div>
             <div className="text-xs font-bold text-gray-700">{label}</div>
             <div className="text-[10px] text-gray-400 mt-1">{subtitle}</div>
        </div>
    );
}

const ShortcutIcon: React.FC<{ icon: any; label: string; color: string }> = ({ icon: Icon, label, color }) => (
    <div className="flex flex-col items-center space-y-2">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
            <Icon size={24} />
        </div>
        <span className="text-xs text-gray-600">{label}</span>
    </div>
);