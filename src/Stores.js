import { readable, writable } from "svelte/store";

const Member = [
    {
        nickname : "สปาย",
        name : "ภัทราดา",
        lastname : "มิโคทะ",
        position : "Chief Excutive Officer",
        university : "Thammasart Universitity",
        faculty : "Faculty of Engineering",
        major : "Software engineering",
        description : "XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX",
        img : "./img/spy.jpg"
    },
    {
        nickname : "รัน",
        name : "พศุตม์",
        lastname : "อินทร์สังข์",
        position : "Chief Marketing Officer",
        university : "Thammasart Universitity",
        faculty : "Faculty of Engineering",
        major : "Software engineering",
        description : "XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX",
        img : "./img/run.jpg"
    },
    {
        nickname : "อาย",
        name : "กานต์พิชชา",
        lastname : "หงส์เอก",
        position : "Chief creative officer",
        university : "Thammasart Universitity",
        faculty : "Faculty of Engineering",
        major : "Software engineering",
        description : "XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX",
        img : "./img/aye.jpg"
    },
    {
        nickname : "ต้น",
        name : "ชิษณุพงศ์",
        lastname : "เพ็งชัย",
        position : "Chief Operating Officier",
        university : "Thammasart Universitity",
        faculty : "Faculty of Engineering",
        major : "Software engineering",
        description : "XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX",
        img : "./img/ton.jpg"
    },
    {
        nickname : "เมฆ",
        name : "อภิสิทธิ์",
        lastname : "แสงกระจ่าง",
        position : "Chief Technology Officer",
        university : "Thammasart Universitity",
        faculty : "Faculty of Engineering",
        major : "Software engineering",
        description : "XXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXX",
        img : "./img/mek.jpg"
    }
];



export const mode = writable("");
export const Excutive = readable(Member);
