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
            XXデンタルがお手伝いさせていただいた、導入事例や開業実績の一部をご紹介します。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <article key={study.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="h-56 overflow-hidden">
                <img
                  src={study.imageUrl}
                  alt={study.clientName}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#1A4472]/5 text-[#1A4472] text-xs font-semibold rounded-full">
                    {study.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  {study.clientName}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {study.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
