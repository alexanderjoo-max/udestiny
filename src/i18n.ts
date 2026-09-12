export type Lang = "en" | "th" | "zh";

export const LANGS: { id: Lang; label: string }[] = [
  { id: "en", label: "English" },
  { id: "th", label: "ไทย" },
  { id: "zh", label: "中文" },
];

type Copy = {
  nav: {
    practice: string;
    wobazi: string;
    alice: string;
    elements: string;
    cta: string;
    ctaShort: string;
  };
  splash: { waiting: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    cta: string;
    cta2: string;
    note: string;
  };
  manifesto: { kicker: string; items: { title: string; body: string; hanzi: string }[] };
  practice: {
    kicker: string;
    title: string;
    lead: string;
    items: { hanzi: string; title: string; body: string }[];
  };
  elements: {
    kicker: string;
    title: string;
    lead: string;
    generating: string;
    quote: string;
    quoteAttr: string;
  };
  alice: {
    kicker: string;
    title: string;
    lead: string;
    pillars: { hanzi: string; label: string; theme: string; lines: string[] }[];
  };
  wobazi: {
    kicker: string;
    title: string;
    lead: string;
    points: string[];
    cta: string;
  };
  close: {
    kicker: string;
    title: string;
    lead: string;
    cta: string;
    cta2: string;
  };
  footer: {
    blurb: string;
    house: string;
    products: string;
    bangkok: string;
  };
};

export const copy: Record<Lang, Copy> = {
  en: {
    nav: {
      practice: "Practice",
      wobazi: "Wobazi",
      alice: "Master Alice",
      elements: "Five Elements",
      cta: "Plot your chart",
      ctaShort: "Plot chart",
    },
    splash: { waiting: "Aligning the heavenly stems…" },
    hero: {
      eyebrow: "Ultimate Destiny",
      title: "Your chart was written the moment you arrived.",
      lead: "Eight characters. Four pillars. A two-thousand-year-old art, still startlingly precise — read by Master Alice, and now held in your hand.",
      cta: "Plot your chart",
      cta2: "Sit with Master Alice",
      note: "Free to begin · No account needed",
    },
    manifesto: {
      kicker: "What the chart is for",
      items: [
        {
          hanzi: "识己",
          title: "Know who you truly are.",
          body: "Your nature, your strengths, your blind spots — read from the moment you were born.",
        },
        {
          hanzi: "择时",
          title: "Move when the time is right.",
          body: "See the years that reward your boldest decisions, and the seasons that ask you to wait.",
        },
        {
          hanzi: "知人",
          title: "Find the people you belong with.",
          body: "Discover whose energy harmonizes with yours — in love, in work, in the rooms you share.",
        },
      ],
    },
    practice: {
      kicker: "The house",
      title: "Eastern metaphysics, used.",
      lead: "U Destiny is Master Alice’s Bangkok practice: human potential and organizational development through BaZi and Feng Shui. Come for a reading, or begin with the chart in your pocket.",
      items: [
        {
          hanzi: "八字",
          title: "BaZi · Four Pillars",
          body: "Your exact birth moment converted into eight characters — the blueprint of who you are, and the decades that will carry you.",
        },
        {
          hanzi: "风水",
          title: "Feng Shui · Space & year",
          body: "The rooms, directions, and annual energies that either drain you or quietly work on your behalf.",
        },
        {
          hanzi: "企业",
          title: "Organizations",
          body: "Corporate training and destiny consulting for leaders and teams — timing, talent, and the climate of a company.",
        },
        {
          hanzi: "AI",
          title: "U Destiny · AI astrology",
          body: "The house’s living platform. Wobazi is the BaZi chart you hold; the rest of the reading still happens with Alice.",
        },
      ],
    },
    elements: {
      kicker: "五行",
      title: "Five forces, always in motion.",
      lead: "Everything in a chart belongs to Wood, Fire, Earth, Metal, or Water. Balance — or the lack of it — is the weather of a life.",
      generating: "Generating cycle · each nourishes the next",
      quote:
        "BaZi is a weather forecast, not a prison sentence. The chart shows the terrain — you still choose how to walk it.",
      quoteAttr: "The metaphor masters use",
    },
    alice: {
      kicker: "The reader",
      title: "Master Alice",
      lead: "A Bangkok-based Chinese metaphysics teacher, destiny consultant, and corporate trainer. Wobazi is her BaZi reading. U Destiny is the house around it.",
      pillars: [
        {
          hanzi: "年",
          label: "Year · Roots",
          theme: "Where she comes from",
          lines: [
            "M.A. Communication Arts, Bangkok University",
            "B.A. Mass Communication, Kasetsart University",
            "Marketing studies, Leeds Metropolitan University",
          ],
        },
        {
          hanzi: "月",
          label: "Month · Career",
          theme: "The rooms she worked in",
          lines: [
            "Former marketing communications executive",
            "Huawei · JobsDB · Samsung · Lenovo",
            "Canon · Toshiba · Grab",
          ],
        },
        {
          hanzi: "日",
          label: "Day · Self",
          theme: "The work that is hers",
          lines: [
            "15+ years in BaZi, Feng Shui, face reading, destiny consulting",
            "43+ professional certificates — Hong Kong, Singapore, Malaysia",
            "Certified Thai Birkman practitioner · Sound Healing trainer",
          ],
        },
        {
          hanzi: "时",
          label: "Hour · Legacy",
          theme: "What she leaves in the room",
          lines: [
            "10,000+ students and clients across 35+ countries",
            "Trainer and speaker for 70+ organizations",
            "Wobazi — her reading, in your pocket",
          ],
        },
      ],
    },
    wobazi: {
      kicker: "In your pocket",
      title: "Wobazi is her reading.",
      lead: "Plot your Four Pillars in seconds — solar or lunar birth dates, no account required. Sign in only if you want the chart saved.",
      points: [
        "Your Day Master, element balance, and luck pillars",
        "Today’s fortune, the year ahead, the people who fit",
        "Ask the Oracle — AI guidance drawn from your chart",
      ],
      cta: "Open Wobazi",
    },
    close: {
      kicker: "Begin",
      title: "Your four pillars are waiting.",
      lead: "The chart is one-third of the story. Timing and the rooms you inhabit write the rest. Start with eight characters.",
      cta: "Plot your chart",
      cta2: "Visit Master Alice",
    },
    footer: {
      blurb: "A house of Chinese metaphysics in Bangkok. BaZi, Feng Shui, and AI astrology — from Ultimate Destiny.",
      house: "The house",
      products: "The reading",
      bangkok: "Bangkok",
    },
  },
  th: {
    nav: {
      practice: "ศาสตร์",
      wobazi: "Wobazi",
      alice: "มาสเตอร์อลิซ",
      elements: "ห้าธาตุ",
      cta: "จัดแผนภูมิของคุณ",
      ctaShort: "จัดแผนภูมิ",
    },
    splash: { waiting: "กำลังจัดก้านฟ้า…" },
    hero: {
      eyebrow: "Ultimate Destiny",
      title: "แผนภูมิของคุณถูกเขียนตั้งแต่วินาทีที่คุณมาถึง",
      lead: "แปดตัวอักษร สี่เสา ศาสตร์เก่าแก่สองพันปี ที่ยังแม่นยำจนน่าทึ่ง — อ่านโดยมาสเตอร์อลิซ และอยู่ในมือคุณ",
      cta: "จัดแผนภูมิของคุณ",
      cta2: "พบมาสเตอร์อลิซ",
      note: "เริ่มฟรี · ไม่ต้องมีบัญชี",
    },
    manifesto: {
      kicker: "แผนภูมิมีไว้ทำอะไร",
      items: [
        {
          hanzi: "识己",
          title: "รู้จักตัวเองอย่างแท้จริง",
          body: "นิสัย จุดแข็ง จุดบอด — อ่านได้จากวินาทีที่คุณเกิด",
        },
        {
          hanzi: "择时",
          title: "ขยับเมื่อเวลาเหมาะ",
          body: "เห็นปีที่การตัดสินใจกล้าจะได้รับรางวัล และฤดูที่ควรรอ",
        },
        {
          hanzi: "知人",
          title: "พบคนที่พลังตรงกับคุณ",
          body: "ค้นพบว่าพลังของใครกลมกลืนกับคุณ — ในรัก ในงาน ในห้องที่อยู่ร่วม",
        },
      ],
    },
    practice: {
      kicker: "สำนัก",
      title: "ศาสตร์จีน ที่ใช้ได้จริง",
      lead: "U Destiny คือสำนักของมาสเตอร์อลิซในกรุงเทพฯ — ศักยภาพมนุษย์และการพัฒนาองค์กรด้วยปาจื้อและฮวงจุ้ย มาอ่านดวง หรือเริ่มจากแผนภูมิในกระเป๋า",
      items: [
        {
          hanzi: "八字",
          title: "ปาจื้อ · สี่เสา",
          body: "วินาทีเกิดถูกแปลงเป็นแปดตัวอักษร — แบบแปลนของตัวคุณ และทศวรรษที่จะพาไป",
        },
        {
          hanzi: "风水",
          title: "ฮวงจุ้ย · พื้นที่และปี",
          body: "ห้อง ทิศ และพลังรายปี ที่จะดูดคุณหรือทำงานให้คุณอย่างเงียบ ๆ",
        },
        {
          hanzi: "企业",
          title: "องค์กร",
          body: "อบรมและที่ปรึกษาโชคชะตาสำหรับผู้นำและทีม — จังหวะ พรสวรรค์ และภูมิอากาศของบริษัท",
        },
        {
          hanzi: "AI",
          title: "U Destiny · โหราศาสตร์ AI",
          body: "แพลตฟอร์มของสำนัก Wobazi คือแผนปาจื้อในมือคุณ ส่วนการอ่านยังอยู่กับอลิซ",
        },
      ],
    },
    elements: {
      kicker: "五行",
      title: "ห้าพลัง ที่ไม่เคยนิ่ง",
      lead: "ทุกอย่างในแผนภูมิเป็นไม้ ไฟ ดิน โลหะ หรือน้ำ ความสมดุล — หรือการขาดมัน — คืออากาศของชีวิต",
      generating: "วงจรเกื้อ · แต่ละธาตุหล่อเลี้ยงถัดไป",
      quote:
        "ปาจื้อคือพยากรณ์อากาศ ไม่ใช่คำพิพากษา แผนภูมิชี้ภูมิประเทศ — คุณยังเลือกวิธีเดินเอง",
      quoteAttr: "คำอุปมาที่ซินแสใช้",
    },
    alice: {
      kicker: "ผู้ถอดรหัส",
      title: "มาสเตอร์อลิซ",
      lead: "วิทยากรศาสตร์จีน ที่ปรึกษาโชคชะตา และวิทยากรองค์กรในกรุงเทพฯ Wobazi คือการอ่านปาจื้อของเธอ U Destiny คือสำนักที่โอบมันไว้",
      pillars: [
        {
          hanzi: "年",
          label: "ปี · ราก",
          theme: "ที่มา",
          lines: [
            "ปริญญาโทนิเทศศาสตร์ มหาวิทยาลัยกรุงเทพ",
            "ปริญญาตรีสื่อสารมวลชน มหาวิทยาลัยเกษตรศาสตร์",
            "การตลาด Leeds Metropolitan University",
          ],
        },
        {
          hanzi: "月",
          label: "เดือน · การงาน",
          theme: "ห้องที่เคยทำงาน",
          lines: [
            "อดีตผู้บริหารงานสื่อสารการตลาด",
            "Huawei · JobsDB · Samsung · Lenovo",
            "Canon · Toshiba · Grab",
          ],
        },
        {
          hanzi: "日",
          label: "วัน · ตัวตน",
          theme: "งานที่เป็นของเธอ",
          lines: [
            "กว่า 15 ปีในปาจื้อ ฮวงจุ้ย การอ่านใบหน้า ที่ปรึกษาโชคชะตา",
            "ประกาศนียบัตรกว่า 43 ใบ — ฮ่องกง สิงคโปร์ มาเลเซีย",
            "Certified Thai Birkman · Sound Healing Trainer",
          ],
        },
        {
          hanzi: "时",
          label: "ยาม · สิ่งที่ส่งต่อ",
          theme: "สิ่งที่ทิ้งไว้ในห้อง",
          lines: [
            "นักเรียนและลูกค้ากว่า 10,000 คน ใน 35+ ประเทศ",
            "วิทยากรให้กว่า 70 องค์กร",
            "Wobazi — การอ่านของเธอ อยู่ในกระเป๋าคุณ",
          ],
        },
      ],
    },
    wobazi: {
      kicker: "ในกระเป๋าคุณ",
      title: "Wobazi คือการอ่านของเธอ",
      lead: "จัดสี่เสาในไม่กี่วินาที — วันเกิดสุริยคติหรือจันทรคติ ไม่ต้องมีบัญชี ล็อกอินเฉพาะเมื่ออยากบันทึก",
      points: [
        "วันมาสเตอร์ สมดุลธาตุ และเสาโชค",
        "โชควันนี้ ปีที่มา คนที่เข้ากัน",
        "ถามเทพพยากรณ์ — คำแนะนำจากแผนภูมิของคุณ",
      ],
      cta: "เปิด Wobazi",
    },
    close: {
      kicker: "เริ่ม",
      title: "สี่เสาของคุณรออยู่",
      lead: "แผนภูมิคือหนึ่งในสามของเรื่อง จังหวะและห้องที่คุณอยู่เขียนส่วนที่เหลือ เริ่มจากแปดตัวอักษร",
      cta: "จัดแผนภูมิของคุณ",
      cta2: "ไปที่มาสเตอร์อลิซ",
    },
    footer: {
      blurb: "สำนักศาสตร์จีนในกรุงเทพฯ ปาจื้อ ฮวงจุ้ย และโหราศาสตร์ AI — จาก Ultimate Destiny",
      house: "สำนัก",
      products: "การอ่าน",
      bangkok: "กรุงเทพฯ",
    },
  },
  zh: {
    nav: {
      practice: "馆务",
      wobazi: "Wobazi",
      alice: "Master Alice",
      elements: "五行",
      cta: "排出你的命盘",
      ctaShort: "排盘",
    },
    splash: { waiting: "天干对齐中…" },
    hero: {
      eyebrow: "Ultimate Destiny",
      title: "你的命盘，写在你抵达的那一刻。",
      lead: "八个字。四根柱。两千年的古老技艺，至今精确得令人心惊 — 由 Master Alice 解读，也可以握在手里。",
      cta: "排出你的命盘",
      cta2: "约见 Master Alice",
      note: "开始免费 · 无需账号",
    },
    manifesto: {
      kicker: "命盘何用",
      items: [
        {
          hanzi: "识己",
          title: "真正认识你自己。",
          body: "性情、长处与盲点 — 都写在你诞生的那一刻。",
        },
        {
          hanzi: "择时",
          title: "在对的时机行动。",
          body: "看见那些奖赏果敢决定的年份，也看见该等待的季节。",
        },
        {
          hanzi: "知人",
          title: "找到属于你的人。",
          body: "发现谁的能量与你相合 — 在感情、在工作、在你们共享的房间里。",
        },
      ],
    },
    practice: {
      kicker: "馆",
      title: "拿来用的东方玄学。",
      lead: "U Destiny 是 Master Alice 在曼谷的馆：以八字与风水做潜能与组织发展。来做一次解读，或先从口袋里的命盘开始。",
      items: [
        {
          hanzi: "八字",
          title: "八字 · 四柱",
          body: "把精确的出生时刻转成八个字 — 关于你是谁的蓝图，以及将托举你的十年。",
        },
        {
          hanzi: "风水",
          title: "风水 · 空间与流年",
          body: "房间、方位、年度之气 — 它们或消耗你，或默默替你做事。",
        },
        {
          hanzi: "企业",
          title: "组织",
          body: "为企业领袖与团队做培训与命理咨询 — 时机、人才、公司气候。",
        },
        {
          hanzi: "AI",
          title: "U Destiny · AI 占星",
          body: "馆的活平台。Wobazi 是你手里的八字盘；更深的解读，仍与 Alice 一起完成。",
        },
      ],
    },
    elements: {
      kicker: "五行",
      title: "五种力量，从不静止。",
      lead: "盘中万物不外木火土金水。平衡 — 或失衡 — 就是一生的天气。",
      generating: "相生 · 一气生下一气",
      quote: "八字是天气预报，不是无期徒刑。盘显示地形 — 怎么走，仍由你选。",
      quoteAttr: "师傅们常用的比喻",
    },
    alice: {
      kicker: "解盘人",
      title: "Master Alice",
      lead: "曼谷的中国玄学导师、命理顾问与企业培训师。Wobazi 是她的八字解读。U Destiny 是托住它的馆。",
      pillars: [
        {
          hanzi: "年",
          label: "年柱 · 根",
          theme: "来处",
          lines: [
            "曼谷大学传播艺术硕士",
            "农业大学大众传播学士",
            "利兹城市大学市场营销课程",
          ],
        },
        {
          hanzi: "月",
          label: "月柱 · 事业",
          theme: "曾经的房间",
          lines: [
            "曾任市场传播高管",
            "Huawei · JobsDB · Samsung · Lenovo",
            "Canon · Toshiba · Grab",
          ],
        },
        {
          hanzi: "日",
          label: "日柱 · 自己",
          theme: "属于她的工作",
          lines: [
            "十五年八字、风水、面相与命理咨询",
            "四十余张专业证书 — 香港、新加坡、马来西亚",
            "认证 Thai Birkman · 声音疗愈导师",
          ],
        },
        {
          hanzi: "时",
          label: "时柱 · 传承",
          theme: "留在房间里的",
          lines: [
            "学员与客户逾万人，遍及三十余国",
            "为七十余家机构培训与演讲",
            "Wobazi — 她的解读，在你口袋里",
          ],
        },
      ],
    },
    wobazi: {
      kicker: "口袋里",
      title: "Wobazi 是她的解读。",
      lead: "几秒排出四柱 — 公历或农历，无需账号。只有想保存命盘时，才需要登录。",
      points: [
        "日主、五行平衡、大运",
        "今日运势、流年、与你相合的人",
        "问神谕 — 从你的命盘长出的 AI 指引",
      ],
      cta: "打开 Wobazi",
    },
    close: {
      kicker: "起",
      title: "你的四柱在等你。",
      lead: "命盘只是故事的三分之一。时机与你所在的房间写其余。从八个字开始。",
      cta: "排出你的命盘",
      cta2: "前往 Master Alice",
    },
    footer: {
      blurb: "曼谷的中国玄学馆。八字、风水、AI 占星 — 出自 Ultimate Destiny。",
      house: "馆",
      products: "解读",
      bangkok: "曼谷",
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

export const ELEMENTS = [
  { hanzi: "木", en: "Wood", pinyin: "Mù", key: "wood", line: "Growth · vision · the upward path" },
  { hanzi: "火", en: "Fire", pinyin: "Huǒ", key: "fire", line: "Passion · warmth · the outward light" },
  { hanzi: "土", en: "Earth", pinyin: "Tǔ", key: "earth", line: "Stability · trust · the ground underfoot" },
  { hanzi: "金", en: "Metal", pinyin: "Jīn", key: "metal", line: "Clarity · justice · the cutting edge" },
  { hanzi: "水", en: "Water", pinyin: "Shuǐ", key: "water", line: "Wisdom · depth · the unseen current" },
] as const;
