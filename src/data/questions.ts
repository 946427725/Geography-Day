export interface QuestionData {
  question: string;
  options: string[];
  correctIndex: number;
}

export const questions: Record<number, QuestionData[]> = {
  0: [
    {
      question: "O‘zbekistonning poytaxti qaysi shahar?",
      options: ["Samarqand", "Buxoro", "Toshkent", "Xiva"],
      correctIndex: 2,
    },
    {
      question: "Yer nechta qit’adan iborat?",
      options: ["5 ta", "6 ta", "7 ta", "8 ta"],
      correctIndex: 2,
    },
    {
      question: "Eng katta okean qaysi?",
      options: ["Atlantika", "Hind", "Tinch okeani", "Shimoliy Muz"],
      correctIndex: 2,
    },
    {
      question: "Dunyoning eng katta davlati qaysi?",
      options: ["AQSH", "Xitoy", "Rossiya", "Kanada"],
      correctIndex: 2,
    },
    {
      question: "Misr qaysi qit’ada joylashgan?",
      options: ["Yevropa", "Afrika", "Osiyo", "Avstraliya"],
      correctIndex: 1,
    },
    {
      question: "Fransiyaning poytaxti qaysi?",
      options: ["Rim", "Parij", "Madrid", "Berlin"],
      correctIndex: 1,
    },
    {
      question: "Eng baland tog‘ qaysi?",
      options: ["Kilimanjaro", "Everest", "Elbrus", "Alp"],
      correctIndex: 1,
    },
  ],
  1: [
    {
      question: "Orol dengizi qaysi mintaqada joylashgan?",
      options: ["Yevropa", "Markaziy Osiyo", "Janubiy Amerika", "Afrika"],
      correctIndex: 1,
    },
    {
      question: "Nil daryosi qaysi qit’ada?",
      options: ["Afrika", "Osiyo", "Yevropa", "Avstraliya"],
      correctIndex: 0,
    },
    {
      question: "Yaponiya qaysi okean bo‘yida joylashgan?",
      options: ["Atlantika", "Hind", "Tinch okeani", "Shimoliy Muz"],
      correctIndex: 2,
    },
    {
      question: "Braziliya qaysi qit’ada?",
      options: ["Afrika", "Osiyo", "Janubiy Amerika", "Yevropa"],
      correctIndex: 2,
    },
    {
      question: "Eng kichik qit’a qaysi?",
      options: ["Yevropa", "Avstraliya", "Antarktida", "Afrika"],
      correctIndex: 1,
    },
    {
      question: "Qaysi davlat aholisi eng ko‘p?",
      options: ["Hindiston", "AQSH", "Rossiya", "Yaponiya"],
      correctIndex: 0,
    },
    {
      question: "Kanada poytaxti qaysi?",
      options: ["Toronto", "Ottava", "Monreal", "Vankuver"],
      correctIndex: 1,
    },
  ],
  2: [
    {
      question: "Ekvator chizig‘i qaysi qit’alar orqali o‘tadi?",
      options: ["Afrika va Janubiy Amerika", "Yevropa va Osiyo", "Osiyo va Afrika", "Avstraliya va Afrika"],
      correctIndex: 0,
    },
    {
      question: "Alp tog‘lari qaysi qit’ada?",
      options: ["Osiyo", "Afrika", "Yevropa", "Janubiy Amerika"],
      correctIndex: 2,
    },
    {
      question: "Qaysi davlat ikki qit’ada joylashgan?",
      options: ["Turkiya", "Fransiya", "Italiya", "Ispaniya"],
      correctIndex: 0,
    },
    {
      question: "Dunyoning eng chuqur ko‘li qaysi?",
      options: ["Baykal", "Viktoriya", "Balxash", "Kaspiy"],
      correctIndex: 0,
    },
    {
      question: "Antarktida qanday iqlimga ega?",
      options: ["Tropik", "Mo‘tadil", "Juda sovuq qutb iqlimi", "Musson"],
      correctIndex: 2,
    },
    {
      question: "Amazonka daryosi qayerdan oqadi?",
      options: ["Afrika", "Janubiy Amerika", "Osiyo", "Yevropa"],
      correctIndex: 1,
    },
    {
      question: "Sahara cho‘li qaysi qit’ada?",
      options: ["Afrika", "Osiyo", "Avstraliya", "Janubiy Amerika"],
      correctIndex: 0,
    },
  ],
  3: [
    {
      question: "Eng ko‘p vaqt zonalariga ega davlat qaysi?",
      options: ["AQSH", "Rossiya", "Xitoy", "Kanada"],
      correctIndex: 1,
    },
    {
      question: "Dunyoning eng baland sharsharasi qaysi?",
      options: ["Niagara", "Anxel sharsharasi", "Viktoriya", "Iguasu"],
      correctIndex: 1,
    },
    {
      question: "Qaysi davlat materik ichida joylashgan (dengizga chiqishi yo‘q)?",
      options: ["Boliviya", "Braziliya", "Argentina", "Chili"],
      correctIndex: 0,
    },
    {
      question: "Grenlandiya qaysi davlatga tegishli?",
      options: ["Kanada", "Daniya", "Norvegiya", "Islandiya"],
      correctIndex: 1,
    },
    {
      question: "Kaspiy dengizi aslida nima?",
      options: ["Okean", "Daryo", "Ko‘l", "Ko‘rfaz"],
      correctIndex: 2,
    },
    {
      question: "Qaysi davlat eng uzun qirg‘oq chizig‘iga ega?",
      options: ["AQSH", "Rossiya", "Kanada", "Avstraliya"],
      correctIndex: 2,
    },
    {
      question: "Kilimanjaro tog‘i qaysi davlatda?",
      options: ["Keniya", "Tanzaniya", "Efiopiya", "Uganda"],
      correctIndex: 1,
    },
  ],
  4: [
    {
      question: "Qaysi davlat ekvator, tropik va subtropik iqlim zonalarini o‘z ichiga oladi?",
      options: ["Braziliya", "Hindiston", "Indoneziya", "Meksika"],
      correctIndex: 0,
    },
    {
      question: "Dunyoning eng quruq joylaridan biri bo‘lgan Atakama cho‘li qaysi davlatda?",
      options: ["Peru", "Chili", "Argentina", "Meksika"],
      correctIndex: 1,
    },
    {
      question: "Dunyoning eng baland poytaxt shahri qaysi?",
      options: ["La-Pas (Boliviya)", "Katmandu", "Addis-Abeba", "Toshkent"],
      correctIndex: 0,
    },
    {
      question: "Qaysi davlat ikkita yarimsharda joylashgan?",
      options: ["Indoneziya", "Hindiston", "Turkiya", "Meksika"],
      correctIndex: 0,
    },
    {
      question: "Mariana botig‘i qaysi okeanda joylashgan?",
      options: ["Atlantika", "Hind", "Tinch okeani", "Shimoliy Muz"],
      correctIndex: 2,
    },
    {
      question: "Qaysi davlat maydoni jihatdan eng kichik?",
      options: ["Vatikan", "Monako", "San-Marino", "Lixtenshteyn"],
      correctIndex: 0,
    },
    {
      question: "Qaysi davlat hududida eng ko‘p vulqon mavjud?",
      options: ["Yaponiya", "Indoneziya", "Chili", "Filippin"],
      correctIndex: 1,
    },
  ],
};
