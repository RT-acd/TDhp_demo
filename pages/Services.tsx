import React from 'react';
import { SERVICES } from '../constants';
import { Stethoscope, Package, Building2, Check, Wrench, Handshake } from 'lucide-react';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-12 h-12 text-[#1A4472]" />;
      case 'Package': return <Package className="w-12 h-12 text-[#1A4472]" />;
      case 'Building2': return <Building2 className="w-12 h-12 text-[#1A4472]" />;
      case 'Wrench': return <Wrench className="w-12 h-12 text-[#1A4472]" />;
      case 'Handshake': return <Handshake className="w-12 h-12 text-[#1A4472]" />;
      default: return <Stethoscope className="w-12 h-12 text-[#1A4472]" />;
    }
  };

  // サービスIDに対応する固定の高品質・クリーン画像URL
  const serviceImages: Record<string, string> = {
    equipment: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    materials: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800",
    support: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    repair: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    closing: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800"
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-[#0d233d] py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">サービス紹介</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            機器の選定から消耗品の供給、そして開業支援まで。<br />
            歯科医院経営に必要なすべてをワンストップでサポートします。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        {SERVICES.map((service, index) => (
          <section key={service.id} id={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src={serviceImages[service.id] || "https://images.unsplash.com/photo-1516549221187-fbc367468652?auto=format&fit=crop&q=80&w=800"} 
                  alt={service.title}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1A4472]/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#1A4472]/5 rounded-xl">
                  {getIcon(service.iconName)}
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
              </div>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">主な取り扱い・サポート内容</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-slate-700">
                      <Check className="w-5 h-5 text-[#1A4472] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">カタログ請求・お見積りはこちら</h2>
          <p className="text-slate-600 mb-8">
            取り扱いメーカーや具体的な製品仕様など、お気軽にお問い合わせください。
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#1A4472] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#133356] transition-colors shadow-lg"
          >
            お問い合わせフォームへ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
