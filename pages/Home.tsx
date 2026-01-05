import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  // サービスIDに対応する固定の高品質・クリーン画像URL
  const serviceImages: Record<string, string> = {
    equipment: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    materials: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800",
    support: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920"
            alt="Modern Dental Clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d233d]/90 to-[#1A4472]/60 mix-blend-multiply"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              歯科医療の未来を<br />
              支えるパートナー
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
              最新の歯科機器から開業支援、メンテナンス、閉業相談まで。XXデンタルは、先生方の理想の診療環境づくりをトータルでサポートいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-[#1A4472] bg-white hover:bg-[#1A4472]/5 transition-all shadow-lg hover:shadow-xl"
              >
                お問い合わせ・ご相談
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-lg text-white hover:bg-white/10 transition-all"
              >
                サービス詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1A4472] font-semibold tracking-wider uppercase text-sm">Our Mission</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              信頼と実績で応える、医療の現場
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500">
              創業以来、地域医療に貢献する歯科医院様と共に歩んでまいりました。
              単なる販売だけでなく、医院経営のパートナーとして寄り添います。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#1A4472]/10 rounded-lg flex items-center justify-center mb-6">
                 <CheckCircle2 className="w-6 h-6 text-[#1A4472]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">迅速な対応力</h3>
              <p className="text-slate-600">
                機器のトラブルや急な材料不足にも迅速に対応。地域密着型のネットワークで診療を止めないサポート体制を整えています。
              </p>
            </div>
             <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#1A4472]/10 rounded-lg flex items-center justify-center mb-6">
                 <CheckCircle2 className="w-6 h-6 text-[#1A4472]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">豊富な商品知識</h3>
              <p className="text-slate-600">
                メーカー各社の最新機器に精通したスタッフが、先生の診療スタイルや予算に合わせた最適なご提案をいたします。
              </p>
            </div>
             <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#1A4472]/10 rounded-lg flex items-center justify-center mb-6">
                 <CheckCircle2 className="w-6 h-6 text-[#1A4472]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">長期的なサポート</h3>
              <p className="text-slate-600">
                開業前から開業後、そして将来の承継まで。医院のライフサイクルに合わせた長期的なパートナーシップを築きます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#1A4472] font-semibold tracking-wider uppercase text-sm">Services</span>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">事業内容</h2>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-[#1A4472] font-medium hover:text-[#133356] group">
              すべてのサービスを見る
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-slate-200 overflow-hidden relative">
                  <img
                    src={serviceImages[service.id as keyof typeof serviceImages]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <Link to="/services" className="text-[#1A4472] font-medium text-sm flex items-center hover:underline">
                    詳細はこちら
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
           <div className="mt-8 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center text-[#1A4472] font-medium hover:text-[#133356]">
              すべてのサービスを見る
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A4472]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            医院開業・設備導入に関するご相談は<br className="hidden sm:block" />
            お気軽にお問い合わせください
          </h2>
          <p className="text-slate-200 mb-10 text-lg max-w-2xl mx-auto">
            専任の担当者が丁寧にご案内いたします。お見積り、カタログ請求なども承っております。
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#1A4472] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
