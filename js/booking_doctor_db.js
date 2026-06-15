const doctors_db = [
  // --- အကယ်ဒမီဆေးရုံ (hospital_id: 1) ---
  { d_id: 101, name: "Dr. အောင်မင်း", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 1, experience: "10 Years", rating: 4.8, image: "../images/do2.png" },
  { d_id: 102, name: "Dr. စုမြတ်", category: "Cardiology (နှလုံး)", hospital_id: 1, experience: "15 Years", rating: 4.9, image: "../images/d2.png" },
  { d_id: 103, name: "Dr. ဇော်မင်း", category: "Pediatrics (ကလေး)", hospital_id: 1, experience: "8 Years", rating: 4.7, image: "../images/do5.png" },

  // --- ပါရမီအထွေထွေရောဂါကုဆေးရုံ (hospital_id: 2) ---
  { d_id: 104, name: "Dr. သဇင်", category: "Obstetrics & Gynecology (သားဖွားမီးယပ်)", hospital_id: 2, experience: "12 Years", rating: 4.8, image: "../images/d1.png" },
  { d_id: 105, name: "Dr. ကျော်ဇင်", category: "Neurology (ဦးနှောက်နှင့်အာရုံကြော)", hospital_id: 2, experience: "20 Years", rating: 5.0, image: "../images/do2.png" },
  { d_id: 106, name: "Dr. ဟန်လင်း", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 2, experience: "6 Years", rating: 4.6, image: "../images/do5.png" },

  // --- ပင်လုံဆေးရုံ (hospital_id: 3) ---
  { d_id: 107, name: "Dr. ဇော်ရဲ", category: "Orthopedics (အရိုးအကြော)", hospital_id: 3, experience: "12 Years", rating: 4.7, image: "../images/do2.png" },
  { d_id: 108, name: "Dr. နန်းဆု", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 3, experience: "5 Years", rating: 4.5, image: "../images/d2.png" },
  { d_id: 109, name: "Dr. ကောင်းမြတ်", category: "Cardiology (နှလုံး)", hospital_id: 3, experience: "11 Years", rating: 4.8, image: "../images/do5.png" },

  // --- အောင်ရတနာဆေးရုံ (hospital_id: 4) ---
  { d_id: 110, name: "Dr. မြတ်သူ", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 4, experience: "7 Years", rating: 4.6, image: "../images/do2.png" },
  { d_id: 111, name: "Dr. ခင်သီတာ", category: "Pediatrics (ကလေး)", hospital_id: 4, experience: "10 Years", rating: 4.7, image: "../images/d1.png" },
  { d_id: 112, name: "Dr. စိုးမိုး", category: "Orthopedics (အရိုးအကြော)", hospital_id: 4, experience: "14 Years", rating: 4.9, image: "../images/do5.png" },

  // --- အာယုအပြည်ပြည်ဆိုင်ရာဆေးရုံ (hospital_id: 5) ---
  { d_id: 113, name: "Dr. နီလာ", category: "Cardiology (နှလုံး)", hospital_id: 5, experience: "15 Years", rating: 4.9, image: "../images/d2.png" },
  { d_id: 114, name: "Dr. ဝဏ္ဏ", category: "ENT (နား၊ နှာခေါင်း၊ လည်ချောင်း)", hospital_id: 5, experience: "11 Years", rating: 4.6, image: "../images/do2.png" },
  { d_id: 115, name: "Dr. ဇင်မင်း", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 5, experience: "9 Years", rating: 4.7, image: "../images/do5.png" },

  // --- SSC ရွှေဂုံတိုင်အထူးကုဆေးရုံ (hospital_id: 6) ---
  { d_id: 116, name: "Dr. သန့်ဇင်", category: "General Surgery (ခွဲစိတ်)", hospital_id: 6, experience: "16 Years", rating: 4.9, image: "../images/do2.png" },
  { d_id: 117, name: "Dr. ဟေမာ", category: "Obstetrics & Gynecology (သားဖွားမီးယပ်)", hospital_id: 6, experience: "12 Years", rating: 4.8, image: "../images/d1.png" },
  { d_id: 118, name: "Dr. ရဲရင့်", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 6, experience: "6 Years", rating: 4.5, image: "../images/do5.png" },

  // --- KBC ဆေးရုံ (hospital_id: 7) ---
  { d_id: 119, name: "Dr. သန်းထိုက်", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 7, experience: "8 Years", rating: 4.6, image: "../images/do2.png" },
  { d_id: 120, name: "Dr. ဖူးပွင့်", category: "Pediatrics (ကလေး)", hospital_id: 7, experience: "9 Years", rating: 4.7, image: "../images/d2.png" },
  { d_id: 121, name: "Dr. မင်းမင်း", category: "Orthopedics (အရိုးအကြော)", hospital_id: 7, experience: "13 Years", rating: 4.8, image: "../images/do5.png" },

  // --- ဥက္ကလာဆေးရုံ (hospital_id: 8) ---
  { d_id: 122, name: "Dr. မျိုးညွန့်", category: "General Surgery (ခွဲစိတ်)", hospital_id: 8, experience: "18 Years", rating: 4.9, image: "../images/do2.png" },
  { d_id: 123, name: "Dr. ယမင်း", category: "Dermatology (အရေပြား)", hospital_id: 8, experience: "7 Years", rating: 4.6, image: "../images/d1.png" },
  { d_id: 124, name: "Dr. သီဟ", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 8, experience: "10 Years", rating: 4.7, image: "../images/do5.png" },

  // --- ရွှေလမင်းဆေးရုံ (hospital_id: 9) ---
  { d_id: 125, name: "Dr. ထွန်းထွန်း", category: "Gastroenterology (အစာအိမ်နှင့်အူလမ်းကြောင်း)", hospital_id: 9, experience: "14 Years", rating: 4.8, image: "../images/do2.png" },
  { d_id: 126, name: "Dr. နှင်းနု", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 9, experience: "6 Years", rating: 4.5, image: "../images/d2.png" },
  { d_id: 127, name: "Dr. ကျော်စွာ", category: "Cardiology (နှလုံး)", hospital_id: 9, experience: "12 Years", rating: 4.8, image: "../images/do5.png" },

  // --- ကန်သာယာ အပြည်ပြည်ဆိုင်ရာ အထူးကုဆေးရုံ (hospital_id: 10) ---
  { d_id: 128, name: "Dr. စုစုလှိုင်", category: "Dermatology (အရေပြား)", hospital_id: 10, experience: "9 Years", rating: 4.7, image: "../images/d1.png" },
  { d_id: 129, name: "Dr. ဝေယံ", category: "Ophthalmology (မျက်စိ)", hospital_id: 10, experience: "11 Years", rating: 4.6, image: "../images/do2.png" },
  { d_id: 130, name: "Dr. အာကာ", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 10, experience: "8 Years", rating: 4.7, image: "../images/do5.png" },

  // --- ရိုစ်ဟေးလ်ဆေးရုံ (hospital_id: 11) ---
  { d_id: 131, name: "Dr. နိုင်လင်း", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 11, experience: "10 Years", rating: 4.7, image: "../images/do2.png" },
  { d_id: 132, name: "Dr. မေသူ", category: "Pediatrics (ကလေး)", hospital_id: 11, experience: "7 Years", rating: 4.6, image: "../images/d2.png" },
  { d_id: 133, name: "Dr. ချစ်ဦး", category: "ENT (နား၊ နှာခေါင်း၊ လည်ချောင်း)", hospital_id: 11, experience: "15 Years", rating: 4.9, image: "../images/do5.png" },

  // --- တက်လမ်းဆေးရုံ (hospital_id: 12) ---
  { d_id: 134, name: "Dr. ဇေယျာ", category: "Orthopedics (အရိုးအကြော)", hospital_id: 12, experience: "12 Years", rating: 4.8, image: "../images/do2.png" },
  { d_id: 135, name: "Dr. သက်ထား", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 12, experience: "5 Years", rating: 4.5, image: "../images/d1.png" },
  { d_id: 136, name: "Dr. အောင်ကျော်", category: "Neurology (ဦးနှောက်နှင့်အာရုံကြော)", hospital_id: 12, experience: "16 Years", rating: 4.9, image: "../images/do5.png" },

  // --- မြပါရမီဆေးရုံ (hospital_id: 13) ---
  { d_id: 137, name: "Dr. ရှင်းသန့်", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 13, experience: "9 Years", rating: 4.7, image: "../images/do2.png" },
  { d_id: 138, name: "Dr. အိအိဖြူ", category: "Cardiology (နှလုံး)", hospital_id: 13, experience: "11 Years", rating: 4.7, image: "../images/d2.png" },
  { d_id: 139, name: "Dr. ဟိန်းထက်", category: "General Surgery (ခွဲစိတ်)", hospital_id: 13, experience: "14 Years", rating: 4.8, image: "../images/do5.png" },

  // --- ဖမ်မလီ အထွေထွေရောဂါကုဆေးရုံ (hospital_id: 14) ---
  { d_id: 140, name: "Dr. ဝင်းနိုင်", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 14, experience: "20 Years", rating: 5.0, image: "../images/do2.png" },
  { d_id: 141, name: "Dr. သီရိ", category: "Obstetrics & Gynecology (သားဖွားမီးယပ်)", hospital_id: 14, experience: "10 Years", rating: 4.7, image: "../images/d1.png" },
  { d_id: 142, name: "Dr. ထက်လင်း", category: "Pediatrics (ကလေး)", hospital_id: 14, experience: "8 Years", rating: 4.6, image: "../images/do5.png" },

  // --- ဆာကူရာဆေးရုံ (hospital_id: 15) ---
  { d_id: 143, name: "Dr. စိုးဝင်း", category: "Neurology (ဦးနှောက်နှင့်အာရုံကြော)", hospital_id: 15, experience: "17 Years", rating: 4.9, image: "../images/do2.png" },
  { d_id: 144, name: "Dr. မြတ်မြတ်", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 15, experience: "6 Years", rating: 4.5, image: "../images/d2.png" },
  { d_id: 145, name: "Dr. တေဇာ", category: "Gastroenterology (အစာအိမ်နှင့်အူလမ်းကြောင်း)", hospital_id: 15, experience: "12 Years", rating: 4.8, image: "../images/do5.png" },

  // --- The Clinic De Novo ဆေးခန်း (hospital_id: 16) ---
  { d_id: 146, name: "Dr. ထက်အောင်", category: "Dermatology (အရေပြား)", hospital_id: 16, experience: "8 Years", rating: 4.7, image: "../images/do2.png" },
  { d_id: 147, name: "Dr. စန္ဒီ", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 16, experience: "5 Years", rating: 4.6, image: "../images/d1.png" },
  { d_id: 148, name: "Dr. ရဲမင်း", category: "Ophthalmology (မျက်စိ)", hospital_id: 16, experience: "11 Years", rating: 4.8, image: "../images/do5.png" },

  // --- မန္တလေးပြည်သူ့ဆေးရုံကြီး (hospital_id: 17) ---
  { d_id: 149, name: "Dr. မြတ်နိုး", category: "General Physician (အထွေထွေရောဂါကု)", hospital_id: 17, experience: "5 Years", rating: 4.5, image: "../images/d2.png" },
  { d_id: 150, name: "Dr. ရန်နိုင်", category: "General Surgery (ခွဲစိတ်)", hospital_id: 17, experience: "18 Years", rating: 4.9, image: "../images/do2.png" },
  { d_id: 151, name: "Dr. အေးအေး", category: "Pediatrics (ကလေး)", hospital_id: 17, experience: "14 Years", rating: 4.8, image: "../images/d1.png" }
];