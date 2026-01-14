import React from 'react';
import { CASE_STUDIES } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">実績紹介</h1>
          <p className="mt-4 text-lg text-slate-500">
            トップデンタルがお手伝いさせていただいた、導入事例や開業実績の一部をご紹介します。
          </p>
        </div>
      </div>

      {/* 実績リスト表示エリア */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CASE_STUDIESの中身がある場合に表示する処理 */}
          {CASE_STUDIES && CASE_STUDIES.length > 0 ? (
            CASE_STUDIES.map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">{study.title}</h3>
                <p className="mt-2 text-slate-600">{study.description}</p>
                {/* constants.ts内のCASE_STUDIESの構造に合わせて 
                  study.clientName や study.date なども表示可能です 
                */}
              </div>
            ))
          ) : (
            <p className="text-slate-500 text-center col-span-full">
              現在、実績紹介のコンテンツを準備中です。
            </p>
          )}
        </div>
      </div>
    </div> // ← ここが抜けていました
  ); // ← ここが抜けていました
}; // ← ここが抜けていました

export default Portfolio;
