import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react'; // Loader2 を追加

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    type: '資料請求',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // 送信中状態を追加

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ★ ステップ1でコピーした「ウェブアプリのURL」をここに貼り付けてください
    const GAS_URL = 'https://script.google.com/macros/s/AKfycbxCQPMK7cBPUHPIuwrIewdpwndQJqItakOuLMJQf4IgIwz0K0XLS6znGVgR6dCttQbbxg/exec';

    try {
      await fetch(GAS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      // 送信成功時
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Error:', error);
      alert('送信に失敗しました。ネットワーク環境を確認し、再度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-4">
        <div className="bg-white p-10 rounded-2xl shadow-lg max-w-lg w-full text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">送信完了</h2>
          <p className="text-slate-600 mb-8">
            お問い合わせありがとうございます。<br />
            担当者より通常3営業日以内にご連絡させていただきます。
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-[#1A4472] font-medium hover:underline"
          >
            フォームに戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">お問い合わせ</h1>
          <p className="text-slate-600">
            製品に関するご質問、お見積もりのご依頼など、<br />
            お気軽にお問い合わせください。
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  value={formState.type}
                  onChange={handleChange}
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-[#1A4472] focus:ring-[#1A4472] sm:text-sm p-3 border"
                >
                  <option>資料請求</option>
                  <option>お見積もり依頼</option>
                  <option>機器の修理・メンテナンス</option>
                  <option>開業支援について</option>
                  <option>閉業・承継について</option>
                  <option>その他</option>
                </select>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  お名前（医院名） <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-[#1A4472] focus:ring-[#1A4472] sm:text-sm p-3 border"
                  placeholder="例：山田 太郎 / XX歯科医院"
                />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formState.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-[#1A4472] focus:ring-[#1A4472] sm:text-sm p-3 border"
                  placeholder="例：03-1234-5678"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-[#1A4472] focus:ring-[#1A4472] sm:text-sm p-3 border"
                  placeholder="例：sample@example.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border-slate-300 shadow-sm focus:border-[#1A4472] focus:ring-[#1A4472] sm:text-sm p-3 border"
                  placeholder="ご質問やご要望を詳しくご記入ください。"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting} // 送信中は連打できないように
                className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white transition-colors ${
                  isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#1A4472] hover:bg-[#133356]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    送信中...
                  </>
                ) : (
                  '送信する'
                )}
              </button>
            </div>
            
            <p className="text-xs text-slate-500 text-center mt-4">
              ご入力いただいた個人情報は、お問い合わせへの回答のみに利用いたします。
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
