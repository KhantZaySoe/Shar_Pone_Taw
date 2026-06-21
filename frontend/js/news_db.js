const news_db = [
  {
    id: 1,
    title: "ကိုယ်ခံအားကောင်းစေမည့် အစားအစာများ",
    category: "Nutrition Tips",
    image_url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80",
    reads: 201,
    avatars: ["https://i.pravatar.cc/100?img=1", "https://i.pravatar.cc/100?img=2", "https://i.pravatar.cc/100?img=3"],
    author: "Dr. Myat Noe",
    publish_date: "Jun 1, 2026",
    detail_content: "ကိုယ်ခံအားစနစ် ကောင်းမွန်စေရန်အတွက် ဗီတာမင်စီ ကြွယ်ဝသော ရှောက်သီး၊ သံပုရာသီး၊ လိမ္မော်သီးများနှင့် ဟင်းနုနွယ်စိမ်း၊ ပန်းဂေါ်ဖီစိမ်းတို့ကို နေ့စဉ် စားသုံးပေးသင့်ပါသည်။ ထို့အပြင် ကြက်သွန်ဖြူနှင့် ဂျင်းတို့သည်လည်း ခန္ဓာကိုယ်အတွင်းရှိ ရောဂါပိုးမွှားများကို တိုက်ဖျက်ပေးနိုင်စွမ်း ရှိပါသည်။"
  },
  {
    id: 2,
    title: "နေ့စဉ် ရေလုံလောက်စွာ သောက်သုံးခြင်း၏ အကျိုးကျေးဇူးများ",
    category: "Healthy Habits",
    image_url: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400&q=80",
    reads: 415,
    avatars: ["https://i.pravatar.cc/100?img=4", "https://i.pravatar.cc/100?img=5"],
    author: "Dr. Kyaw Zin",
    publish_date: "Jun 3, 2026",
    detail_content: "တစ်နေ့လျှင် ရေ အနည်းဆုံး ၈ ဖန်ခွက် သောက်သုံးခြင်းဖြင့် အစာခြေစနစ်ကို ကောင်းမွန်စေပြီး အသားအရေကို စိုပြေစေပါသည်။ ခန္ဓာကိုယ်အတွင်းရှိ အဆိပ်အတောက်များကို ဖယ်ရှားပေးသည့်အပြင် ကျောက်ကပ်ရောဂါ ဖြစ်ပွားမှုကိုလည်း သိသိသာသာ လျှော့ချပေးနိုင်ပါသည်။"
  },
  {
    id: 3,
    title: "ရုံးထိုင်သမားများတွင် ဖြစ်လေ့ရှိသော ခါးနာဝေဒနာ ကာကွယ်နည်း",
    category: "Fitness",
    image_url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80",
    reads: 312,
    avatars: ["https://i.pravatar.cc/100?img=6", "https://i.pravatar.cc/100?img=7", "https://i.pravatar.cc/100?img=8"],
    author: "Dr. Min Khant",
    publish_date: "Jun 5, 2026",
    detail_content: "ကွန်ပျူတာရှေ့တွင် အချိန်ကြာမြင့်စွာ ထိုင်ရသူများအနေဖြင့် အထိုင်ပုံစံ မှန်ကန်ရန် လိုအပ်ပါသည်။ မိနစ် ၄၅ မိနစ်လျှင် တစ်ကြိမ် ထိုင်ရာမှထ၍ လမ်းလျှောက်ခြင်း၊ ကိုယ်လက်ဆန့်တန်း လေ့ကျင့်ခန်းပြုလုပ်ခြင်းတို့ဖြင့် ကြွက်သား တင်းမာမှုနှင့် ခါးနာခြင်းဝေဒနာများကို သက်သာစေနိုင်ပါသည်။"
  },
  {
    id: 5,
    title: "သွေးတိုးရောဂါရှိသူများ ရှောင်ကြဉ်ရမည့် အစားအစာများ",
    category: "Disease Prevention",
    image_url: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?auto=format&fit=crop&w=400&q=80",
    reads: 520,
    avatars: ["https://i.pravatar.cc/100?img=11", "https://i.pravatar.cc/100?img=12"],
    author: "Dr. Win Thu",
    publish_date: "Jun 8, 2026",
    detail_content: "သွေးတိုးရောဂါ အန္တရာယ်မှ ကာကွယ်ရန် ဆား (ဆိုဒီယမ်) ပါဝင်မှုများသော အစားအစာများ၊ တာရှည်ခံစည်သွပ်ဗူးများနှင့် အငန်ကဲသော မုန့်များကို အဓိက ရှောင်ကြဉ်ရပါမည်။ အဆီများသော အသားများနှင့် အသင့်စား အစားအစာများသည်လည်း သွေးကြောပိတ်ဆို့မှုကို ဖြစ်စေပါသည်။"
  },
  {
    id: 6,
    title: "နွေရာသီတွင် ကလေးငယ်များ၌ ဖြစ်ပွားတတ်သော အရေပြားယားယံခြင်း",
    category: "Child Care",
    image_url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80",
    reads: 275,
    avatars: ["https://i.pravatar.cc/100?img=13", "https://i.pravatar.cc/100?img=14"],
    author: "Dr. Thandar",
    publish_date: "Jun 10, 2026",
    detail_content: "ပူအိုက်စွတ်စိုသော ရာသီဥတုတွင် ကလေးငယ်များ၌ မိတ်ထွက်ခြင်းနှင့် ချွေးပိတ်ပြီး အရေပြားနီမြန်းခြင်းများ ဖြစ်တတ်ပါသည်။ ကလေးငယ်များကို ချည်သားပွပွများ ဝတ်ဆင်ပေးခြင်း၊ တစ်နေ့ နှစ်ကြိမ် ရေချိုးပေးခြင်းနှင့် အသားအရေ ခြောက်သွေ့အောင် ထားရှိခြင်းဖြင့် ကာကွယ်နိုင်ပါသည်။"
  },
  {
    id: 7,
    title: "မျက်စိကျန်းမာရေးအတွက် သတိပြုရမည့် ဒီဂျစ်တယ် မျက်စိညောင်းညာမှု",
    category: "Eye Care",
    image_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
    reads: 612,
    avatars: ["https://i.pravatar.cc/100?img=15", "https://i.pravatar.cc/100?img=16", "https://i.pravatar.cc/100?img=17"],
    author: "Dr. Myo Min",
    publish_date: "Jun 11, 2026",
    detail_content: "ဖုန်းနှင့် ကွန်ပျူတာ Screen များကို အကြည့်များပါက မျက်စိခြောက်ခြင်း၊ အမြင်အာရုံဝေဝါးခြင်းတို့ ဖြစ်တတ်ပါသည်။ ထိုအခါ ၂၀-၂၀-၂၀ နည်းလမ်း (မိနစ် ၂၀ ကြည့်လျှင် ပေ ၂၀ အကွာသို့ စက္ကန့် ၂၀ ကြာ ကြည့်ပေးခြင်း) ဖြင့် မျက်စိကြွက်သားများကို အနားပေးသင့်ပါသည်။"
  },
  {
    id: 8,
    title: "အစိမ်းရောင်လက်ဖက်ရည် (Green Tea) ၏ ထူးခြားသော ဆေးဖက်ဝင်အာနိသင်",
    category: "Nutrition Tips",
    image_url: "https://images.unsplash.com/photo-1531973968078-9bb02785f13d?auto=format&fit=crop&w=400&q=80",
    reads: 340,
    avatars: ["https://i.pravatar.cc/100?img=18"],
    author: "Dr. Myat Noe",
    publish_date: "Jun 12, 2026",
    detail_content: "Green Tea တွင် ဓါတ်တိုးဆန့်ကျင်ပစ္စည်း (Antioxidants) များ ကြွယ်ဝစွာ ပါဝင်သဖြင့် ခန္ဓာကိုယ်တွင်းဆဲလ်များ ပျက်စီးမှုကို တားဆီးပေးပြီး ကိုယ်အလေးချိန် ကျဆင်းစေရန် ကူညီပေးပါသည်။ နှလုံးကျန်းမာရေးနှင့် သွေးတွင်း ကိုလက်စထရော လျှော့ချရေးအတွက်လည်း အထူးကောင်းမွန်ပါသည်။"
  },
  {
    id: 9,
    title: "စိတ်ဖိစီးမှု (Stress) ကို အချိန်တိုအတွင်း လျှော့ချနိုင်မည့် အသက်ရှူနည်းလမ်း",
    category: "Mental Health",
    image_url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80",
    reads: 488,
    avatars: ["https://i.pravatar.cc/100?img=19", "https://i.pravatar.cc/100?img=20"],
    author: "Dr. Hsu Hnin",
    publish_date: "Jun 13, 2026",
    detail_content: "စိတ်လှုပ်ရှားခြင်းနှင့် စိတ်ဖိစီးမှုများ ကြုံလာရချိန်တွင် Box Breathing (၄ စက္ကန့်ကြာ လေရှူသွင်း၊ ၄ စက္ကန့်ကြာ အသက်အောင့်၊ ၄ စက္ကန့်ကြာ လေရှူထုတ်) နည်းလမ်းကို အသုံးပြုခြင်းဖြင့် ဦးနှောက်နှင့် အာရုံကြောစနစ်ကို ချက်ချင်း ငြိမ်သက်အေးချမ်းသွားစေနိုင်ပါသည်။"
  },
  {
    id: 10,
    title: "ဆီးချိုရောဂါ ကာကွယ်ရန် နေ့စဉ်လူနေမှုပုံစံ ပြောင်းလဲခြင်း",
    category: "Disease Prevention",
    image_url: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=400&q=80",
    reads: 590,
    avatars: ["https://i.pravatar.cc/100?img=21", "https://i.pravatar.cc/100?img=22", "https://i.pravatar.cc/100?img=23"],
    author: "Dr. Kyaw Zin",
    publish_date: "Jun 14, 2026",
    detail_content: "အမျိုးအစား (၂) ဆီးချိုရောဂါ မဖြစ်ပွားစေရန် အချိုကဲသော ဖျော်ရည်များနှင့် ကာဗိုဟိုက်ဒရိတ်အဆန်လွန် အစားအစာများကို လျှော့ချရပါမည်။ တစ်ပတ်လျှင် အနည်းဆုံး နာရီဝက်ခန့် ကိုယ်လက်လှုပ်ရှားမှု ပြုလုပ်ခြင်းက သွေးတွင်း သကြားဓာတ်ကို အကောင်းဆုံး ထိန်းညှိပေးနိုင်ပါသည်။"
  }
];