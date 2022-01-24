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
    '😆สวัสดี ผมวัชรากร แท่นแก้ว หรือเรียกเล่นๆว่า ยิว ตอนนี้กำลังเรียนอยู่ปีที่ 4 คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ ที่สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง(สจล.) ครับ',
  paragraphTwo:
    'มีความสนใจในด้าน UX/UI design และ Front-end development ชอบใช้ความคิดสร้างสรรค์ และรักในการพัฒนา Software ให้ออกมาดูดี',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1orsjMESrGL6d4BaGcPvaj-cVitbRUa4n/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'rental_app.png',
    title: 'Rental App Project',
    info:
      'แอปพลิเคชันที่เป็นสารมารถทำให้การเช่าสินค้าออนไลน์เป็นง่ายมากขึ้น สามารถจองสินค้า และแชทกับผู้ให้เช่าได้สะดวกรวดเร็ว หรืออยากจะให้เช่าสินค้าก็ง่าย ทำสัญญาการเช่า การจ่ายเงิน ทั้งหมดภายในแอปเดียว',
    info2: 'Tools: Figma, Flutter, Firebase',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'conicle_intern.png',
    title: 'UX/UI Designer(Intern) at Conicle Co., Ltd.',
    info:
      'Conicle คือแพลตฟอร์มการเรียนรู้สำหรับองค์กร เป็นที่ให้พนักงานในแต่ละแผนกเข้ามาอัพเดตความรู้และทักษะผ่านแอปพลิเคชัน ผมได้ไปอยู่ในทีม UX/UI Designer และได้รับหน้าที่ออกแบบระบบ Chat ของแอปพลิเคชัน ได้สร้าง User Journey และออกแบบ UI ในขนาด Mobile, iPad และ Desktop นอกจากนี้ยังได้มีโอกาสในการสอนใช้เครื่องมือออกแบบ Figma และเทคนิคที่เรียนรู้มาให้แก่ทีม Product เพื่อให้ใช้งานร่วมกันได้ดียิ่งขึ้น',
    info2: '',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'petch.png',
    title: 'Petch App',
    info:
      'ออกแบบ UX/UI ของ Petch App เป็นแอปพลิเคชันสำหรับคนที่มีสัตว์เลี้ยง ซึ่งเป็นทั้งชุมชนของคนรักสัตว์เลี้ยง และมีการรวบรวมบริการ และสินค้าต่าง ๆ เกี่ยวกับสัตว์เลี้ยงด้วย นอกจากนี้ยังมีบริการรับส่งสัตว์เลี้ยง และการติดตามสัตว์เลี้ยง เป็นแอปพลิเคชันที่ถูกออกแบบมาเพื่อคนรักสัตว์เลี้ยงโดยเฉพาะ',
    info2: 'Tools: Figma',
    url:
      'https://www.figma.com/proto/cyX2kX5VfEJw19pI5Ixl03/Petch?page-id=0%3A1&node-id=3%3A24&viewport=313%2C48%2C0.23&scaling=scale-down&starting-point-node-id=27%3A271&show-proto-sidebar=1',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'kmitl_fitness.png',
    title: 'KMITL Fitness App',
    info:
      'ร่วมพัฒนา แอปพลิเคชันมือถือที่ช่วยอำนวยความสะดวกให้แก่ผู้ใช้งาน และผู้ดูแลฟิตเนสที่ KMITL มากยิ่งขึ้น โดยมีระบบจองลู่วิ่ง, จองคลาสออกกำลังกาย ,ใช้งานล็อกเกอร์ และระบบสมาชิก พัฒนาแอปพลิเคชันโดยใช้ Flutter และ Firebase',
    info2: 'Tools: Adobe XD, Flutter',
    url: 'https://xd.adobe.com/view/10820509-50df-4747-4620-a77dbdb73400-66b3/',
    repo: 'https://github.com/godprogrammer3/KMITL_fitness_app',
  },
  {
    id: nanoid(),
    img: 'playground.png',
    title: 'Playground App Design',
    info:
      'ออกแบบ UX/UI ของแอปพลิเคชันที่ชื่อว่า Playground ที่เป็นพื้นที่เชื่อมต่อระหว่างคนที่มีไอเดียและคนที่สนใจเพื่อร่วมกันพัฒนาให้เป็นจริง โดยสามารถโพสต์โปรเจคที่อยากสร้างและหาผู้ที่สนใจเข้ามาเป็นส่วนร่วมพัฒนา',
    info2: 'Tools: Figma',
    url:
      'https://www.figma.com/proto/xXEJbH5kdnfQTWA0PfrS8E/Playground-Prototype?node-id=202%3A27&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3719',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'catfighter.png',
    title: 'Cat Fighter',
    info: 'เกมคอมพิวเตอร์ 2 มิติ ควบคุมด้วยคีย์บอร์ด พัฒนาโดยใช้ภาษา C++ และใช้ library SFML',
    info2: 'Tools: C++, Adobe Photoshop',
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
