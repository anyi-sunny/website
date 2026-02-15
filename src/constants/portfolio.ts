import artwork1 from '../images/artwork/artwork1.jpg';
import artwork2 from '../images/artwork/artwork2.jpg';
import artwork3 from '../images/artwork/artwork3.jpg';
import artwork4 from '../images/artwork/artwork4.jpg';
import artwork5 from '../images/artwork/artwork5.jpg';
import artwork6 from '../images/artwork/artwork6.jpg';
import artwork7 from '../images/artwork/artwork7.jpg';

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
];
