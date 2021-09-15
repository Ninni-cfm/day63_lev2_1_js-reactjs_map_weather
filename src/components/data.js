const icons = [
    '/img/sun.png',
    '/img/mostly-sunny.png',
    '/img/cloudy-with-sun.png',
    '/img/cloudy.png',
    '/img/thunder.png',
];

let i = 0;
const days = [
    { id: i++, weekday: 'Mo', temp: 15, min: 11, icon: 0 },
    { id: i++, weekday: 'Di', temp: 22, min: 16, icon: 1 },
    { id: i++, weekday: 'Mi', temp: 21, min: 12, icon: 2 },
    { id: i++, weekday: 'Do', temp: 13, min: 5, icon: 3 },
    { id: i++, weekday: 'Fr', temp: 11, min: 6, icon: 4 },
    { id: i++, weekday: 'Sa', temp: 14, min: 8, icon: 0 },
    { id: i++, weekday: 'So', temp: 5, min: 0, icon: 4 },
];

export { icons, days };