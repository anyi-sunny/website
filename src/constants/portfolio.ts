import artwork1 from '../images/artwork/artwork1.jpg';
import artwork2 from '../images/artwork/artwork2.jpg';
import artwork3 from '../images/artwork/artwork3.jpg';
import artwork4 from '../images/artwork/artwork4.jpg';
import artwork5 from '../images/artwork/artwork5.jpg';
import artwork6 from '../images/artwork/artwork6.jpg';
import artwork7 from '../images/artwork/artwork7.jpg';
import artwork8 from '../images/artwork/artwork8.jpg';
import artwork9 from '../images/artwork/artwork9.jpg';
import artwork10 from '../images/artwork/artwork10.jpg';
import artwork11 from '../images/artwork/artwork11.jpg';
import artwork12 from '../images/artwork/artwork12.jpg';
import artwork13 from '../images/artwork/artwork13.jpg';
import artwork14 from '../images/artwork/artwork14.jpg';
import artwork15 from '../images/artwork/artwork15.jpg';
import artwork16 from '../images/artwork/artwork16.jpg';
import artwork17 from '../images/artwork/artwork17.png';

export interface PortfolioItem {
    id: string;
    title: string;
    image: string;
    description?: string;
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: 'artwork1',
        title: 'Venus de Milo',
        image: artwork1,
    },
    {
        id: 'artwork2',
        title: 'Short Venus de Milo sketch',
        image: artwork2,
    },
    {
        id: 'artwork3',
        title: 'Self Portrait',
        image: artwork3,
    },
    {
        id: 'artwork4',
        title: 'Quick Landscape Charcoal Drawing',
        image: artwork4,
    },
    {
        id: 'artwork5',
        title: 'Charcoal Window Project',
        image: artwork5,
    },
    {
        id: 'artwork6',
        title: 'Quick Building Charcoal Drawing',
        image: artwork6,
    },
    {
        id: 'artwork7',
        title: 'Final Project series: Portraits',
        image: artwork7,
    },
    {
        id: 'artwork8',
        title: 'Bowdoin College Hat Design Photo',
        image: artwork8,
    },
    {
        id: 'artwork9',
        title: 'Bowdoin College Hat Design',
        image: artwork9,
    },
    {
        id: 'artwork10',
        title: 'Woman with a Hat: Master Copy',
        image: artwork10,
    },
    {
        id: 'artwork11',
        title: 'Migrant Mother: Photo Study',
        image: artwork11,
    },
    {
        id: 'artwork12',
        title: 'Gym Mirror: Final Project',
        image: artwork12,
    },
    {
        id: 'artwork13',
        title: 'Koi Fish Dry Print Series',
        image: artwork13,
    },
    {
        id: 'artwork14',
        title: 'Scene: Linocut Print',
        image: artwork14,
    },
    {
        id: 'artwork15',
        title: 'Hockey Pop up Book: Printmaking final',
        image: artwork15,
    },
    {
        id: 'artwork16',
        title: 'Scene: Narrative Structures',
        image: artwork16,
    },
    {
        id: 'artwork17',
        title: 'Be a Good Bear Sweatshirt Design',
        image: artwork17,
    },
];
