import { ServiceItem, CaseStudy, CompanyInfo, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'ホーム', path: '/' },
  { label: '会社概要', path: '/about' },
  { label: 'サービス紹介', path: '/services' },
  { label: '実績紹介', path: '/portfolio' },
  { label: 'お問い合わせ', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'equipment',
    title: '歯科機器販売',
    description: '最新のCT、ユニット、マイクロスコープなど、診断精度を高める高度医療機器をご提案します。',
    iconName: 'Stethoscope',
    details: [
      'デジタルレントゲン・CT',
      '歯科用ユニット・チェア',
      'マイクロスコープ・拡大鏡',
      '滅菌・洗浄機器'
    ]
  },
  {
    id: 'materials',
    title: '歯科材料販売',
    description: '日々の診療に不可欠な消耗品から、インプラントなどの専門材料まで幅広く取り扱っています。',
    iconName: 'Package',
    details: [
      '一般消耗品・衛生材料',
      'セメント・印象材',
      'インプラント・骨補填材',
      '予防歯科関連製品'
    ]
  },
  {
    id: 'support',
    title: '開業支援',
    description: '物件選定から資金調達、内装設計、スタッフ採用まで、先生の理想の医院づくりをトータルサポート。',
    iconName: 'Building2',
    details: [
      '診療圏調査・物件選定',
      '事業計画書作成・融資サポート',
      '医院設計・内装デザイン',
      '各種届出・スタッフ研修'
    ]
  },
  {
    id: 'repair',
    title: '機材修理・メンテナンス',
    description: '診療を止めないための迅速な修理対応と、トラブルを未然に防ぐ定期メンテナンスをご提供します。',
    iconName: 'Wrench',
    details: [
      'ユニット・CT等の修理',
      '定期点検・メンテナンス',
      '代替機の貸出',
      'ハンドピース修理'
    ]
  },
  {
    id: 'closing',
    title: '承継・閉業相談',
    description: '長年守り続けてきた医院の「出口戦略」。第三者承継（M&A）や円滑な閉業手続きをサポートします。',
    iconName: 'Handshake',
    details: [
      '医院承継（M&A）仲介',
      '閉業手続きサポート',
      '医療機器の買取・処分',
      '行政への届出代行'
    ]
  }
];

export const COMPANY_INFO: CompanyInfo[] = [
  { label: '会社名', value: 'XXデンタル株式会社' },
  { label: '代表者', value: '代表取締役 山田 太郎' },
  { label: '設立', value: '1995年4月1日' },
  { label: '資本金', value: '5,000万円' },
  { label: '所在地', value: '〒100-0001 東京都千代田区千代田1-1' },
  { label: '従業員数', value: '120名（2023年4月現在）' },
  { label: '事業内容', value: '歯科医療機器の販売・修理・メンテナンス、歯科材料の販売、歯科医院開業・承継・閉業支援' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    clientName: '医療法人社団 さくら歯科クリニック様',
    category: '新規開業 / 機器導入',
    description: '都心部での新規開業において、最新のデジタル機器一式を導入。効率的な動線設計もサポートいたしました。',
    imageUrl: 'https://picsum.photos/800/600?random=10'
  },
  {
    id: '2',
    clientName: '港南デンタルオフィス様',
    category: 'リニューアル / CT導入',
    description: '院内リニューアルに伴い、最新の低被曝CTを導入。診断精度の向上により、患者様への説明力が強化されました。',
    imageUrl: 'https://picsum.photos/800/600?random=11'
  },
  {
    id: '3',
    clientName: 'ひまわり小児歯科様',
    category: '内装デザイン / ユニット増設',
    description: '小児の患者様が怖がらない、温かみのある内装デザインをご提案。ユニット増設に伴う配管工事も実施。',
    imageUrl: 'https://picsum.photos/800/600?random=12'
  }
];
