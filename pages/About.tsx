import React from 'react';
import { COMPANY_INFO } from '../constants';

// CEOメッセージの内容をここで定義します。
// バッククォート（`）で囲むことで、エディタ上での改行がそのまま画面に反映されます。
const CEO_MESSAGE = `平素は格別のご高配を賜り、厚く御礼申し上げます。

トップデンタルは創業以来、「現場第一主義」を掲げ、
群馬県を中心に歯科医師の先生方、スタッフの皆様と共に歩んでまいりました。
歯科医療技術の進歩は目覚ましく、デジタル化や予防歯科の重要性が高まる中で、
私たちディーラーに求められる役割も変化しています。

地元で40年、現場に出向いてきたからこそわかることを、お届けする。
それが、これからの私たちに求められる使命だと考えています。

これからも、先生方の最も身近なパートナーとして、信頼に応え続ける企業でありたいと願っております。
今後とも一層のご支援、ご愛顧を賜りますようお願い申し上げます。`;

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
        {/* CEO Message セクション */}
        <section className="mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1A4472] mb-2">Message</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-10 leading-relaxed">
              歯科医療の発展を通じて、<br />
              人々の健康で豊かな生活に貢献する。
            </h3>
            
            {/* whitespace-pre-line: 改行を反映
              text-left: 長文なので読みやすくするために左揃え
              mx-auto: 中央に配置
            */}
            <div className="prose prose-lg text-slate-600 mx-auto whitespace-pre-line text-left">
              {CEO_MESSAGE}
            </div>

            <div className="mt-12 text-right">
              <p className="font-bold text-slate-900 text-lg"></p>
              <p className="font-serif text-3xl text-slate-900 mt-2"></p>
            </div>
          </div>
        </section>

        {/* Company Info Table セクション */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-[#1A4472] pl-4">企業情報</h2>
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
            <dl className="divide-y divide-slate-100">
              {COMPANY_INFO.map((item, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-3 p-6 hover:bg-slate-50 transition-colors">
                  <dt className="font-bold text-slate-700 sm:col-span-1">{item.label}</dt>
                  {/* whitespace-pre-line を付与しているため、constants.ts 側の改行が反映されます */}
                  <dd className="mt-1 text-slate-600 sm:mt-0 sm:col-span-2 whitespace-pre-line">
                    {item.value}
                  </dd>
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
