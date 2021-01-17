import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Watcharakorn | Portfolio',
  lang: 'en, th',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: "I'm",
  name: 'Watcharakorn',
  subtitle: '',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'สวัสดีครับผมชื่อวัชรากร แท่นแก้ว หรือเรียกว่า"ยิว" ตอนนี้กำลังเรียนอยู่ปี 3 สาขาวิศวกรรมคอมพิวเตอร์ ที่สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
  paragraphTwo:
    'ช่วงนี้กำลังสนใจและศึกษา UX/UI design และเครื่องมือต่าง ๆ สำหรับ Front-end develop ชอบใช้ความคิดสร้างสรรค์ในการออกแบบ และสนใจการพัฒนา Software',
  paragraphThree: 'เวลาว่างชอบฟังเพลง ดูหนัง อดิเรกชอบเล่นกีตาร์ เล่นหมากรุก',
  resume: 'https://www.resumemaker.online/es.php',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Playground App Design',
    info:
      'ออกแบบ UX/UI ของแอปพลิเคชันที่ชื่อว่า Playground ที่เป็นพื้นที่เชื่อมต่อระหว่างคนที่มีไอเดียและคนที่สนใจเพื่อร่วมกันพัฒนาให้เป็นจริง โดยสามารถโพสต์โปรเจคที่อยากสร้างและหาผู้ที่สนใจเข้ามาเป็นส่วนร่วมพัฒนา',
    info2: 'ออกแบบโดยใช้ Figma',
    url: 'https://www.figma.com/file/xXEJbH5kdnfQTWA0PfrS8E/Playground-Prototype',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'iMarket App Design',
    info:
      'ออกแบบ UX/UI ของแอปพลิเคชันที่ชื่อว่า iMarket แอปที่คอยบันทึกของในครัวของเราว่าของหมดอายุหรือใช้หมดไปแล้ว และเชื่อมต่อกับร้านค้าเพื่อสั่งซื้อของที่ต้องการได้',
    info2: 'ออกแบบโดยใช้ Adobe XD',
    url: 'https://drive.google.com/drive/folders/11kjGGXCzRHvf70bLew5lK4gStKJJW8rw',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'KMITL Fitness App',
    info:
      'ร่วมพัฒนา แอปพลิเคชันมือถือที่ช่วยอำนวยความสะดวกให้แก่ผู้ใช้งาน และผู้ดูแลฟิตเนสที่ KMITL มากยิ่งขึ้น โดยมีระบบจองลู่วิ่ง, จองคลาสออกกำลังกาย ,ใช้งานล็อกเกอร์ และระบบสมาชิก พัฒนาแอปพลิเคชันโดยใช้ Flutter และ Firebase',
    info2: 'ได้รับหน้าที่ UI Design, Front-end',
    url: 'https://xd.adobe.com/view/10820509-50df-4747-4620-a77dbdb73400-66b3/',
    repo: 'https://github.com/godprogrammer3/KMITL_fitness_app',
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Cat Fighter',
    info: 'เกมคอมพิวเตอร์ 2 มิติ ควบคุมด้วยคีย์บอร์ด พัฒนาโดยใช้ภาษา C++ และใช้ library SFML',
    info2: '',
    url: 'https://youtu.be/6V10YJT0epg',
    repo: 'https://github.com/yewwat/Cat_Fighter_Game',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email me',
  email: 'watcharakorn.yew@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yewwat/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yewwat',
    },
    {
      id: nanoid(),
      name: 'envelope-o',
      url: 'mailto: watcharakorn.yew@gmail.com',
    },
  ],
};
