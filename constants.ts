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
  { label: '会社名', value: 'トップデンタル株式会社' },
  { label: '設立', value: '1995年4月1日' },
  { label: '所在地', value: '〒371-0231 群馬県前橋市堀越町823' },
  { label: '事業内容', value: '歯科医療機器・歯科材料の販売、歯科医院開業・承継・閉業支援' },
  { label: '許可証', value: `高度管理医療機器等販売業・貸与業許可証　第F116号
    医薬品販売業許可証　第E043号` },
]
  


// CaseStudy型定義は残したまま、中身を空にします
export const CASE_STUDIES: CaseStudy[] = [];
