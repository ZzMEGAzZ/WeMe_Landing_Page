import { readable, writable } from "svelte/store";

const Member = {
    CEO: {
        nickname: "สปาย",
        name: "ภัทรดา",
        lastname: "มิโคทะ",
        position: "Chief Excutive Officer",
        university: "Thammasart Universitity",
        faculty: "Faculty of Engineering",
        major: "Software engineering",
        description: "XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX",
        img: "./img/spy.png"
    },
    CMO: {
        nickname: "รัน",
        name: "พศุตม์",
        lastname: "อินทร์สังข์",
        position: "Chief Marketing Officer",
        university: "Thammasart Universitity",
        faculty: "Faculty of Engineering",
        major: "Software engineering",
        description: "XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX",
        img: "./img/run.png"
    },
    CCO: {
        nickname: "อาย",
        name: "กานต์พิชชา",
        lastname: "หงส์เอก",
        position: "Chief Creative Officer",
        university: "Thammasart Universitity",
        faculty: "Faculty of Engineering",
        major: "Software engineering",
        description: "XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX",
        img: "./img/aye.png"
    },
    CTO: {
        nickname: "เมฆ",
        name: "อภิสิทธิ์",
        lastname: "แสงกระจ่าง",
        position: "Chief Technology Officer",
        university: "Thammasart Universitity",
        faculty: "Faculty of Engineering",
        major: "Software engineering",
        description: "XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX",
        img: "./img/mek.png"
    },
    DEV_1: {
        nickname: "ต้น",
        name: "ชิษณุพงศ์",
        lastname: "เพ็งชัย",
        position: "Developer",
        university: "Thammasart Universitity",
        faculty: "Faculty of Engineering",
        major: "Software engineering",
        description: "XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX",
        img: "./img/ton.png"
    },
    DEV_2: {
        nickname: "โอ๊ต",
        name: "ภาณุวัฒน์",
        lastname: "มั่งคั่ง",
        position: "Developer",
        university: "Thammasart Universitity",
        faculty: "Faculty of Engineering",
        major: "Software engineering",
        description: "XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX",
        img: "./img/oat.png"
    },
    DEV_3: {
        nickname: "เนย",
        name: "ฐิติชญา",
        lastname: "พวงเหล่าเวช",
        position: "Developer",
        university: "Thammasart Universitity",
        faculty: "Faculty of Engineering",
        major: "Software engineering",
        description: "XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX",
        img: "./img/noey.png"
    },
};

export const mode = writable("");
export const Excutive = readable(Member);