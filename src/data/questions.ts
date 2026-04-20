export interface QuestionData {
  question: string;
  options: string[];
  correctIndex: number;
}

export type ThemeQuestions = Record<number, QuestionData[]>;

export interface ThemeSet {
  title: string;
  subtitle: string;
  questions: ThemeQuestions;
}

export const questionSets: Record<string, ThemeSet> = {
  geography: {
    title: "Geografiya Blits",
    subtitle: "Geografiya bo'yicha bilimlaringizni sinab ko'ring",
    questions: {
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
          question: "Antarktida qandang iqlimga ega?",
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
    },
  },
  australia: {
    title: "Avstraliya Blits",
    subtitle: "Avstraliya bo‘yicha bilimlaringizni sinab ko‘ring",
    questions: {
      0: [
        {
          question: "Avstraliya qaysi qit’a?",
          options: ["Yevropa", "Osiyo", "Avstraliya", "Afrika"],
          correctIndex: 2,
        },
        {
          question: "Avstraliyaning poytaxti qaysi?",
          options: ["Sidney", "Melburn", "Kanberra", "Pert"],
          correctIndex: 2,
        },
        {
          question: "Avstraliya bayrog‘ida nima bor?",
          options: ["Yulduzlar va bayroq belgisi", "Faqat ranglar", "Hayvon rasmi", "Quyosh"],
          correctIndex: 0,
        },
        {
          question: "Avstraliya qaysi okean bilan o‘ralgan?",
          options: ["Atlantika", "Tinch okeani", "Hind okeani", "Ikkalasi ham (Tinch va Hind)"],
          correctIndex: 3,
        },
        {
          question: "Avstraliyada keng tarqalgan hayvon qaysi?",
          options: ["Sher", "Kenguru", "Fil", "Yo‘lbars"],
          correctIndex: 1,
        },
        {
          question: "Avstraliya qaysi yarimsharda joylashgan?",
          options: ["Shimoliy", "Janubiy", "G‘arbiy", "Sharqiy"],
          correctIndex: 1,
        },
        {
          question: "Avstraliya orolmi yoki materikmi?",
          options: ["Faqat orol", "Faqat materik", "Ikkalasi ham sifatida qaraladi", "Hech biri"],
          correctIndex: 2,
        },
      ],
      1: [
        {
          question: "Avstraliyadagi eng mashhur shahar qaysi?",
          options: ["Kanberra", "Sidney", "Darvin", "Hobart"],
          correctIndex: 1,
        },
        {
          question: "Buyuk To‘siq Rifi qayerda joylashgan?",
          options: ["Afrikada", "Avstraliyada", "Osiyoda", "Amerikada"],
          correctIndex: 1,
        },
        {
          question: "Avstraliya aholisi asosan qayerda yashaydi?",
          options: ["Markazda", "Sohil bo‘ylarida", "Cho‘lda", "Tog‘larda"],
          correctIndex: 1,
        },
        {
          question: "Avstraliyada qaysi til asosiy?",
          options: ["Fransuz", "Ingliz tili", "Ispan", "Nemis"],
          correctIndex: 1,
        },
        {
          question: "Avstraliyadagi mashhur hayvonlardan biri:",
          options: ["Panda", "Koala", "Ayiq", "Maymun"],
          correctIndex: 1,
        },
        {
          question: "Avstraliya qaysi davlat tizimiga ega?",
          options: ["Respublika", "Monarxiya bilan bog‘liq tizim", "Imperiya", "Diktatura"],
          correctIndex: 1,
        },
        {
          question: "Avstraliyadagi mashhur opera binosi:",
          options: ["Sydney Opera House", "Royal Hall", "Big Theatre", "Opera Tower"],
          correctIndex: 0,
        },
      ],
      2: [
        {
          question: "Avstraliya hududining katta qismi qanday iqlimga ega?",
          options: ["Tropik", "Cho‘l va yarim cho‘l", "Sovuq", "Mo‘tadil"],
          correctIndex: 1,
        },
        {
          question: "Avstraliyadagi eng katta cho‘l:",
          options: ["Sahara", "Gobi", "Great Victoria Desert", "Kalahari"],
          correctIndex: 2,
        },
        {
          question: "Avstraliya nechta shtatdan iborat?",
          options: ["4", "5", "6", "7"],
          correctIndex: 2,
        },
        {
          question: "Qaysi hayvon faqat Avstraliyaga xos?",
          options: ["Sher", "Kenguru", "Bo‘ri", "Yo‘lbars"],
          correctIndex: 1,
        },
        {
          question: "Tasmaniya nima?",
          options: ["Shahar", "Orol (shtat)", "Daryo", "Cho‘l"],
          correctIndex: 1,
        },
        {
          question: "Avstraliya qaysi yarimsharlarda joylashgan?",
          options: ["Faqat shimoliy", "Janubiy va sharqiy", "G‘arbiy", "Faqat sharqiy"],
          correctIndex: 1,
        },
        {
          question: "Aborigenlar kimlar?",
          options: ["Sayyohlar", "Mahalliy aholisi", "Harbiylar", "Olimlar"],
          correctIndex: 1,
        },
      ],
      3: [
        {
          question: "Avstraliya qaysi davlatlar bilan quruqlik chegarasiga ega?",
          options: ["Indoneziya", "Hech biri", "Yangi Zelandiya", "Papua"],
          correctIndex: 1,
        },
        {
          question: "Avstraliyadagi eng uzun daryo:",
          options: ["Nil", "Amazon", "Murray-Darling tizimi", "Volga"],
          correctIndex: 2,
        },
        {
          question: "Outback nima?",
          options: ["Shahar", "Qishloq", "Ichki cho‘l hududlari", "Daryo"],
          correctIndex: 2,
        },
        {
          question: "Avstraliya iqtisodiyotida qaysi soha muhim?",
          options: ["Neft", "Konchilik", "Baliqchilik", "Turizm"],
          correctIndex: 1,
        },
        {
          question: "Qaysi shahar poytaxt emas, lekin eng yiriklardan?",
          options: ["Kanberra", "Sidney", "Darvin", "Hobart"],
          correctIndex: 1,
        },
        {
          question: "Avstraliya qachon federatsiya bo‘lgan?",
          options: ["1901", "1800", "1950", "2000"],
          correctIndex: 0,
        },
        {
          question: "Buyuk To‘siq Rifi nimadan iborat?",
          options: ["Qum", "Muz", "Marjon riflari", "Tosh"],
          correctIndex: 2,
        },
      ],
      4: [
        {
          question: "Avstraliya qaysi tektonik plitada joylashgan?",
          options: ["Yevroosiyo", "Hind-Avstraliya plitasi", "Afrika", "Amerika"],
          correctIndex: 1,
        },
        {
          question: "El Niño hodisasi Avstraliyaga qanday ta’sir qiladi?",
          options: ["Sovutadi", "Qurg‘oqchilik keltiradi", "Yomg‘ir ko‘payadi", "Hech qanday"],
          correctIndex: 1,
        },
        {
          question: "Avstraliyadagi eng baland tog‘:",
          options: ["Everest", "Kosciuszko tog‘i", "Elbrus", "Kilimanjaro"],
          correctIndex: 1,
        },
        {
          question: "Avstraliyada eng katta ko‘l:",
          options: ["Baykal", "Eyre ko‘li", "Viktoriya", "Aral"],
          correctIndex: 1,
        },
        {
          question: "Avstraliya fauna xususiyati:",
          options: ["Ko‘p yirtqichlar", "Endemik turlar ko‘p", "Faqat qushlar", "Sovuq hayvonlar"],
          correctIndex: 1,
        },
        {
          question: "Avstraliya qaysi davlat hamjamiyatiga kiradi?",
          options: ["NATO", "Yevropa Ittifoqi", "Commonwealth", "BRICS"],
          correctIndex: 2,
        },
        {
          question: "Avstraliya iqlimining asosiy xususiyati:",
          options: ["Juda sovuq", "Juda o‘zgaruvchan va quruq", "Faqat tropik", "Faqat yomg‘irli"],
          correctIndex: 1,
        },
      ],
    },
  },
};
