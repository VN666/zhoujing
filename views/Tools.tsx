import React, { useState } from 'react';
import { MOCK_HEALTH_CERTS } from '../constants';
import { Check, AlertTriangle, XCircle, ChevronRight, Upload, Camera } from 'lucide-react';

export const Tools: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'cert' | 'ledger'>('cert');

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-white px-4 pt-4 pb-2">
                <div className="flex space-x-4 border-b border-gray-100">
                    <button 
                        onClick={() => setActiveTab('cert')}
                        className={`pb-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'cert' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}
                    >
                        健康证管理
                    </button>
                    <button 
                         onClick={() => setActiveTab('ledger')}
                         className={`pb-2 text-sm font-medium border-b-2 transition-colors ${activeTab === 'ledger' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}
                    >
                        废油台账
                    </button>
                </div>
            </div>

            <div className="p-4">
                {activeTab === 'cert' ? <HealthCertView /> : <LedgerView />}
            </div>
        </div>
    );
};

const HealthCertView: React.FC = () => {
    return (
        <div className="space-y-3">
            {/* Warning Banner */}
            <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex items-start space-x-2">
                <AlertTriangle size={16} className="text-red-500 mt-0.5" />
                <div>
                    <h4 className="text-xs font-bold text-red-700">证照异常提醒</h4>
                    <p className="text-[10px] text-red-600">目前有 1 人健康证已过期，1 人即将过期，请及时处理。</p>
                </div>
            </div>

            {MOCK_HEALTH_CERTS.map(cert => (
                <div key={cert.id} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                            {cert.name[0]}
                        </div>
                        <div>
                            <div className="font-bold text-gray-800 text-sm">{cert.name}</div>
                            <div className="text-xs text-gray-400">到期日: {cert.expiryDate}</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        {cert.status === 'valid' && <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">有效</span>}
                        {cert.status === 'expiring' && <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">临期</span>}
                        {cert.status === 'expired' && <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">已过期</span>}
                        <ChevronRight size={16} className="text-gray-300" />
                    </div>
                </div>
            ))}
            
            <button className="w-full mt-4 bg-white border border-gray-200 text-gray-600 py-3 rounded-xl flex items-center justify-center space-x-2 font-medium">
                <Upload size={16} />
                <span>批量上传健康证</span>
            </button>
        </div>
    );
}

const LedgerView: React.FC = () => {
    return (
        <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-800 mb-3 text-sm">今日记录</h3>
                <form className="space-y-3">
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">废油产生量 (L)</label>
                        <input type="number" className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0.0" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">处理人</label>
                        <input type="text" className="w-full border border-gray-200 rounded-lg p-2 text-sm" placeholder="姓名" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">回收单位凭证</label>
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-gray-400 h-24">
                            <Camera size={20} />
                            <span className="text-[10px] mt-1">点击拍照上传</span>
                        </div>
                    </div>
                    <button type="button" className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-bold shadow-blue-200 shadow-md">
                        提交记录
                    </button>
                </form>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
                 <h3 className="font-bold text-gray-800 mb-3 text-sm">历史记录</h3>
                 <div className="space-y-2">
                    {[1,2].map(i => (
                        <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                            <div>
                                <div className="text-xs font-bold text-gray-700">2023-09-0{i}</div>
                                <div className="text-[10px] text-gray-400">处理人: 张三</div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-bold text-gray-800">15.5 L</div>
                                <div className="text-[10px] text-green-600">已确认</div>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    );
}