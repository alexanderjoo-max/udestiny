export type Lang = "en" | "th" | "zh";

export const LANGS: { id: Lang; label: string }[] = [
  { id: "en", label: "English" },
  { id: "th", label: "ไทย" },
  { id: "zh", label: "中文" },
];

type Copy = {
  nav: {
    services: string;
    about: string;
    partners: string;
    contact: string;
    cta: string;
    ctaShort: string;
  };
  splash: { waiting: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  wobazi: {
    kicker: string;
    title: string;
    lead: string;
    cta: string;
  };
  about: {
    kicker: string;
    items: { n: string; title: string; body: string }[];
    tagline: string;
  };
  services: {
    kicker: string;
    title: string;
    items: { seal: string; title: string; body: string }[];
  };
  partners: { kicker: string; title: string };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    emailLabel: string;
    line: string;
  };
  footer: {
    blurb: string;
    contact: string;
    about: string;
    wobazi: string;
    copy: string;
  };
};

export const copy: Record<Lang, Copy> = {
  en: {
    nav: {
      services: "Our services",
      about: "About",
      partners: "Partners",
      contact: "Contact",
      cta: "Talk on LINE",
      ctaShort: "LINE",
    },
    splash: { waiting: "Opening the chart…" },
    hero: {
      eyebrow: "U Destiny",
      title: "Decode Inner,\nPerform Outer",
      lead: "Understand yourself from within so you can bring your full potential into the outside world.",
    },
    wobazi: {
      kicker: "Also from U Destiny",
      title: "Plot your BaZi chart",
      lead: "Wobazi is Master Alice’s Four Pillars reading — free, no account needed.",
      cta: "Open Wobazi",
    },
    about: {
      kicker: "U Destiny",
      items: [
        {
          n: "1",
          title: "The Companion",
          body: "A thoughtful companion by your side every day, offering guidance, understanding you, and staying with you through every moment.",
        },
        {
          n: "2",
          title: "Decode Inner, Perform Outer",
          body: "Understand yourself from within so you can bring your full potential into the outside world.",
        },
        {
          n: "3",
          title: "Positive Energy",
          body: "We want you to feel positive energy every day, living with more confidence, balance, and happiness.",
        },
      ],
      tagline: "Your daily guide to a better you",
    },
    services: {
      kicker: "The work",
      title: "Our services",
      items: [
        {
          seal: "面",
          title: "Face Reading",
          body: "The physiognomy of the face tells of fortune and destiny — money, work, and love.",
        },
        {
          seal: "隐",
          title: "Secret Character",
          body: "Meet the hidden character of the month, and the energy it asks you to use.",
        },
        {
          seal: "纸",
          title: "Lucky Wallpaper",
          body: "Enhance auspiciousness according to the elements — work, popularity, fortune, fewer obstacles.",
        },
        {
          seal: "数",
          title: "Lucky Number",
          body: "Personalized lucky numbers for phones, plates, and LINE IDs.",
        },
        {
          seal: "问",
          title: "5 Fortune Questions",
          body: "A daily horoscope beside you for 365 days: career, finance, love, tips, and advice.",
        },
        {
          seal: "言",
          title: "Daily Quote",
          body: "Daily advice to keep you close to what — and who — matters.",
        },
        {
          seal: "爱",
          title: "Love Horoscope",
          body: "Monthly love fortune, with blessings and practices to keep love fresh.",
        },
        {
          seal: "周",
          title: "Weekly Character",
          body: "What you will meet this week, and the character that carries you through it.",
        },
        {
          seal: "日",
          title: "Lucky Day",
          body: "Days to start a job, a business, a car, a contract.",
        },
        {
          seal: "宅",
          title: "Bazi",
          body: "Feng Shui tips and advice for home, office, factory, and company.",
        },
        {
          seal: "护",
          title: "Mutelulu Amulet",
          body: "Scented candles, stones, lucky bracelets, and other spiritual tools.",
        },
        {
          seal: "文",
          title: "Mutelulu Content",
          body: "Articles for the spiritually curious.",
        },
      ],
    },
    partners: { kicker: "With", title: "Our Partners" },
    contact: {
      kicker: "Reach us",
      title: "Contact us",
      lead: "Write, call on LINE, or find U Destiny on the channels you already use.",
      emailLabel: "E-mail",
      line: "LINE",
    },
    footer: {
      blurb: "An AI-powered self-understanding platform. Your daily guide to a better you.",
      contact: "Contact us",
      about: "About us",
      wobazi: "Also on Wobazi",
      copy: "Copyright By UDestiny, All Rights Reserved.",
    },
  },
  th: {
    nav: {
      services: "บริการของเรา",
      about: "เกี่ยวกับเรา",
      partners: "พาร์ทเนอร์",
      contact: "ติดต่อเรา",
      cta: "คุยทาง LINE",
      ctaShort: "LINE",
    },
    splash: { waiting: "กำลังเปิดดวง…" },
    hero: {
      eyebrow: "U Destiny",
      title: "Decode Inner,\nPerform Outer",
      lead: "เข้าใจตัวเองจากข้างใน เพื่อแสดงศักยภาพออกมาอย่างเต็มที่ในโลกภายนอก",
    },
    wobazi: {
      kicker: "จาก U Destiny",
      title: "จัดแผนภูมิปาจื้อของคุณ",
      lead: "Wobazi คือการอ่านสี่เสาของมาสเตอร์อลิซ — ฟรี ไม่ต้องมีบัญชี",
      cta: "เปิด Wobazi",
    },
    about: {
      kicker: "U Destiny",
      items: [
        {
          n: "1",
          title: "The Companion",
          body: "เพื่อนคู่คิดที่อยู่กับคุณทุกวัน ให้คำแนะนำ เข้าใจคุณ และอยู่เคียงข้างในทุกช่วงเวลา",
        },
        {
          n: "2",
          title: "Decode Inner, Perform Outer",
          body: "เข้าใจตัวเองจากข้างใน เพื่อแสดงศักยภาพออกมาอย่างเต็มที่ในโลกภายนอก",
        },
        {
          n: "3",
          title: "Positive Energy",
          body: "อยากให้คุณมีพลังบวกทุกวัน ใช้ชีวิตอย่างมั่นใจ สมดุล และมีความสุขมากขึ้น",
        },
      ],
      tagline: "Your daily guide to a better you",
    },
    services: {
      kicker: "งานของเรา",
      title: "บริการของเรา",
      items: [
        {
          seal: "面",
          title: "โหงวเฮ้ง",
          body: "โหงวเฮ้ง ใบหน้าบอกวาสนา ชะตาชีวิต — การเงิน การงาน ความรัก",
        },
        {
          seal: "隐",
          title: "คาแรกเตอร์ที่ซ่อนในตัวคุณ",
          body: "พบคาแรกเตอร์ที่ซ่อนในตัวคุณ และพลังบวกที่พร้อมผลักดันให้ก้าวผ่านทุกอย่าง",
        },
        {
          seal: "纸",
          title: "วอลเปเปอร์มงคล",
          body: "เสริมมงคลตามธาตุ สำหรับเพิ่มโอกาสงาน เสริมเมตตา กระตุ้นโชคลาภ แคล้วคลาดอุปสรรค",
        },
        {
          seal: "数",
          title: "เลขมงคลประจำตัว",
          body: "แนะนำเลขดีเสริมดวงเฉพาะคุณ ทั้งเบอร์โทร เลขทะเบียนรถ และเลขเสริมหลังไลน์",
        },
        {
          seal: "问",
          title: "คำถามดวง 5 คำถาม",
          body: "ดวงประจำวัน เหมือนมีซินแสอยู่ข้างตัว 365 วัน — การงาน การเงิน ความรัก เคล็ดเสริมดวง",
        },
        {
          seal: "言",
          title: "คำพลังบวกประจำวัน",
          body: "คำแนะนำประจำวัน ให้คุณใกล้ชิดกับสิ่งที่สำคัญ",
        },
        {
          seal: "爱",
          title: "ดวงความรัก",
          body: "ดวงความรักประจำเดือน พร้อมเคล็ดและคาถาสายมูเสริมรัก",
        },
        {
          seal: "周",
          title: "คาแรกเตอร์ประจำสัปดาห์",
          body: "ดวงรายสัปดาห์ — คุณจะพบอะไรบ้างในสัปดาห์นี้",
        },
        {
          seal: "日",
          title: "ฤกษ์ดี",
          body: "วันเริ่มงานใหม่ วันเริ่มธุรกิจ วันออกรถ วันเซ็นสัญญา",
        },
        {
          seal: "宅",
          title: "เคล็ดลับฮวงจุ้ย",
          body: "เคล็ดลับฮวงจุ้ยและทิปต่างๆ สำหรับบ้าน ออฟฟิศ โรงงาน บริษัท",
        },
        {
          seal: "护",
          title: "สินค้าและบริการ",
          body: "สินค้าและบริการสายมู เช่น เทียนหอม หิน กำไลมงคล",
        },
        {
          seal: "文",
          title: "บทความสายมู",
          body: "สายมูต้องมา — บทความมูเตลูๆ",
        },
      ],
    },
    partners: { kicker: "ด้วยกัน", title: "พาร์ทเนอร์ของเรา" },
    contact: {
      kicker: "ถึงเรา",
      title: "ติดต่อเรา",
      lead: "เขียนอีเมล คุยทาง LINE หรือหา U Destiny ในช่องทางที่คุณใช้อยู่",
      emailLabel: "E-mail",
      line: "LINE",
    },
    footer: {
      blurb: "แพลตฟอร์ม AI เพื่อเข้าใจตัวเอง ไกด์รายวันสู่ตัวคุณที่ดีกว่า",
      contact: "ติดต่อเรา",
      about: "เกี่ยวกับเรา",
      wobazi: "ดูดวงบน Wobazi",
      copy: "Copyright By UDestiny, All Rights Reserved.",
    },
  },
  zh: {
    nav: {
      services: "我们的服务",
      about: "关于",
      partners: "合作伙伴",
      contact: "联系我们",
      cta: "用 LINE 聊",
      ctaShort: "LINE",
    },
    splash: { waiting: "正在开盘…" },
    hero: {
      eyebrow: "U Destiny",
      title: "Decode Inner,\nPerform Outer",
      lead: "从内在理解自己，才能把全部潜能带到外面的世界。",
    },
    wobazi: {
      kicker: "同样来自 U Destiny",
      title: "排出你的八字命盘",
      lead: "Wobazi 是 Master Alice 的四柱解读 — 免费，无需账号。",
      cta: "打开 Wobazi",
    },
    about: {
      kicker: "U Destiny",
      items: [
        {
          n: "1",
          title: "The Companion",
          body: "一位体贴的伴侣，每天在你身边给予指引、理解你，并陪伴你度过每一刻。",
        },
        {
          n: "2",
          title: "Decode Inner, Perform Outer",
          body: "从内在理解自己，才能把全部潜能带到外面的世界。",
        },
        {
          n: "3",
          title: "Positive Energy",
          body: "希望你每天都能感到正向的能量，更自信、更平衡、更幸福地生活。",
        },
      ],
      tagline: "Your daily guide to a better you",
    },
    services: {
      kicker: "馆务",
      title: "我们的服务",
      items: [
        {
          seal: "面",
          title: "面相",
          body: "面相说出命运 — 财运、事业、感情。",
        },
        {
          seal: "隐",
          title: "隐藏性格",
          body: "认识这个月藏在你身上的性格，以及它要你使用的能量。",
        },
        {
          seal: "纸",
          title: "吉祥壁纸",
          body: "按五行增强吉气 — 工作、人缘、财运，少些障碍。",
        },
        {
          seal: "数",
          title: "幸运数字",
          body: "为你量身的吉数：电话、车牌、LINE 尾号。",
        },
        {
          seal: "问",
          title: "五问运势",
          body: "365 天的每日运势：事业、财运、感情、tips 与建议。",
        },
        {
          seal: "言",
          title: "每日金句",
          body: "每日一句，让你靠近真正重要的人与事。",
        },
        {
          seal: "爱",
          title: "爱情运势",
          body: "每月情缘，以及让爱保持新鲜的祝福与做法。",
        },
        {
          seal: "周",
          title: "本周性格",
          body: "这一周你会遇见什么，以及带你走过去的性格。",
        },
        {
          seal: "日",
          title: "吉日",
          body: "开工、开业、购车、签约的好日子。",
        },
        {
          seal: "宅",
          title: "八字 · 风水",
          body: "家、办公室、工厂、公司的风水提示。",
        },
        {
          seal: "护",
          title: "护身与器物",
          body: "香薰蜡烛、水晶、手链等灵性用品。",
        },
        {
          seal: "文",
          title: "文章",
          body: "写给对灵性好奇的人。",
        },
      ],
    },
    partners: { kicker: "同行", title: "我们的合作伙伴" },
    contact: {
      kicker: "找到我们",
      title: "联系我们",
      lead: "写信、用 LINE，或在你已经在用的渠道找到 U Destiny。",
      emailLabel: "E-mail",
      line: "LINE",
    },
    footer: {
      blurb: "以 AI 理解自己。每日指南，成为更好的自己。",
      contact: "联系我们",
      about: "关于我们",
      wobazi: "也可在 Wobazi 排盘",
      copy: "Copyright By UDestiny, All Rights Reserved.",
    },
  },
};

export const STEMS = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"] as const;
export const BRANCHES = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"] as const;

export const PILLAR_META = [
  { hanzi: "年", en: "Year", pinyin: "Nián", about: "Ancestry · the energy you carry" },
  { hanzi: "月", en: "Month", pinyin: "Yuè", about: "Climate · the season that shaped you" },
  { hanzi: "日", en: "Day", pinyin: "Rì", about: "You · the character that is the self" },
  { hanzi: "时", en: "Hour", pinyin: "Shí", about: "Inner world · what you build after 40" },
] as const;

export const PARTNERS = [
  { alt: "VANAPAN", src: "https://udestiny-cms-u58935.vm.elestio.app/assets/3807c131-4119-4703-a8c5-dcb71dbb75ca" },
  { alt: "Tops Care", src: "https://udestiny-cms-u58935.vm.elestio.app/assets/f4edfb8d-4b0f-4cc5-be76-642a8aef3207" },
  { alt: "Smart me", src: "https://udestiny-cms-u58935.vm.elestio.app/assets/6462d946-0ff7-487f-9b36-605bb1c0c653" },
  { alt: "Tops Vita", src: "https://udestiny-cms-u58935.vm.elestio.app/assets/1695f501-711f-4ac0-8c81-a89847e2ba2b" },
  { alt: "AIS", src: "https://udestiny-cms-u58935.vm.elestio.app/assets/4eee5298-8aba-44bf-a4d6-ee51bbefa47a" },
  { alt: "PET'N ME", src: "https://udestiny-cms-u58935.vm.elestio.app/assets/0ccb8d12-8c5f-4ed3-b456-c84dd2da7487" },
  { alt: "CATS", src: "https://udestiny-cms-u58935.vm.elestio.app/assets/bc5235a2-a9b8-4965-b47c-a71be9594609" },
  { alt: "SPARK", src: "https://udestiny-cms-u58935.vm.elestio.app/assets/1a32fccc-64a6-4112-b091-fdfd6c69c936" },
  { alt: "SYNCS", src: "https://udestiny-cms-u58935.vm.elestio.app/assets/f5e12d2e-3c3e-4975-b8fc-57b9cacb8d39" },
  { alt: "ANDALA", src: "https://udestiny-cms-u58935.vm.elestio.app/assets/3bcff061-eaf6-4913-b616-1e0c47ca9e00" },
];

export const SOCIALS = [
  { id: "facebook", name: "Facebook", href: "https://www.facebook.com/UdestinyAi" },
  { id: "instagram", name: "Instagram", href: "https://www.instagram.com/udestinyai/" },
  { id: "line", name: "LINE", href: "https://lin.ee/iI4t8Bj" },
  { id: "whatsapp", name: "WhatsApp", href: "https://chat.whatsapp.com/CqiLt1JMmPA98qyM1nzE29" },
  { id: "telegram", name: "Telegram", href: "https://t.me/+OxWWwoXC_8AwZjk1" },
  { id: "tiktok", name: "TikTok", href: "https://www.tiktok.com/@udestinyai" },
  { id: "youtube", name: "YouTube", href: "https://www.youtube.com/@UDestiny" },
] as const;
