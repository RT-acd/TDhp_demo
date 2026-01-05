import React from 'react';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">会社概要</h1>
          <p className="mt-4 text-lg text-slate-500">私たちについて、そして私たちの想い。</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* CEO Message */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-[#1A4472] mb-2">代表挨拶</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                歯科医療の発展を通じて、<br />
                人々の健康で豊かな生活に貢献する。
              </h3>
              <div className="prose prose-lg text-slate-600">
                <p className="mb-4">
                  平素は格別のご高配を賜り、厚く御礼申し上げます。
                </p>
                <p className="mb-4">
                  XXデンタルは創業以来、「現場第一主義」を掲げ、歯科医師の先生方、スタッフの皆様と共に歩んでまいりました。
                  歯科医療技術の進歩は目覚ましく、デジタル化や予防歯科の重要性が高まる中で、私たちディーラーに求められる役割も変化しています。
                </p>
                <p className="mb-4">
                  単に物を届けるだけでなく、最新の情報、技術、そして経営のノウハウをお届けすること。
                  それが、これからの私たちに求められる使命だと考えています。
                </p>
                <p>
                  これからも、先生方の最も身近なパートナーとして、信頼に応え続ける企業でありたいと願っております。
                  今後とも一層のご支援、ご愛顧を賜りますようお願い申し上げます。
                </p>
              </div>
              <div className="mt-8">
                <p className="font-bold text-slate-900 text-lg">代表取締役</p>
                <p className="font-serif text-2xl text-slate-900">山田 太郎</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute top-4 left-4 w-full h-full bg-[#1A4472]/10 rounded-lg -z-10"></div>
                <img
                  src="https://picsum.photos/600/800?random=30"
                  alt="CEO Portrait"
                  className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-24 bg-slate-50 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-12 relative inline-block">
            企業理念
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#1A4472]"></span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#1A4472] mb-4">誠実</h3>
              <p className="text-slate-600">
                常にお客様に対し誠実であり、<br />
                信頼関係を第一に行動します。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1A4472] mb-4">挑戦</h3>
              <p className="text-slate-600">
                変化を恐れず、<br />
                新しい価値の創造に挑戦し続けます。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1A4472] mb-4">貢献</h3>
              <p className="text-slate-600">
                歯科医療の発展を通じて、<br />
                地域社会の健康増進に貢献します。
              </p>
            </div>
          </div>
        </section>

        {/* Company Info Table */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-[#1A4472] pl-4">会社概要</h2>
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
            <dl className="divide-y divide-slate-100">
              {COMPANY_INFO.map((item, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-3 p-6 hover:bg-slate-50 transition-colors">
                  <dt className="font-bold text-slate-700 sm:col-span-1">{item.label}</dt>
                  <dd className="mt-1 text-slate-600 sm:mt-0 sm:col-span-2">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
