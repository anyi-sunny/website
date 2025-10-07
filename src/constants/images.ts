import anyiHockey1 from '../images/anyiHockey1.png';
import anyiHockey2 from '../images/anyiHockey2.jpg';
import anyiHockey3 from '../images/anyiHockey3.jpg';
import anyiHockey4 from '../images/anyiHockey4.webp';

export interface Image {
    src: string;
    alt: string;
}

export const images: Image[] = [
    {
        src: anyiHockey1,
        alt: 'Anyi Sun playing hockey',
    }, 
    {
        src: anyiHockey2,
        alt: 'Anyi Sun playing hockey',
    }, 
    {        
        src: anyiHockey3,
        alt: 'Anyi Sun playing hockey',
    },
    {
        src: anyiHockey4,
        alt: 'Anyi Sun playing hockey',
    },
];