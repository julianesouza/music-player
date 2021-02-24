import { v4 as uuidv4 } from 'uuid';

function chillhop(){
    return [
        {
            name: "Flashback",
            artist: "Blue Wednesday, Shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: ['#A86EA0', '#BBA9DB'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11225",

        },
        {
            name: "Seascape",
            artist: "Makzo",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['##FEE773', '#6070AC'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11773",

        },
        {
            name: "Clocks Forward",
            artist: "Psalm Trees, Guillaume Muschalle",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/db956cc3e3bb2d3725d0ce3f9aaf7190671c9451-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#C47F82', '#EDB653'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8094",

        },
        {
            name: "Flushing the Stairs",
            artist: "Leavv",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#8ABEAB', '#D79165'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9917",

        }
    ];
}

export default chillhop;