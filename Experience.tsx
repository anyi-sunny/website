import React from 'react';
import './Experience.css';
import { ExperienceTile, workExperiences, leadershipExperiences, volunteerExperiences } from '../../constants/experiences';

const ExperienceTileComponent: React.FC<{ experience: ExperienceTile }> = ({ experience }) => (
    <div className="experience-tile">
        {experience.image && (
            <div className="tile-image-container">
                <img src={experience.image} alt={`${experience.organization} - ${experience.title}`} className="tile-image" />
            </div>
        )}
        <div className="tile-content">
            <h3 className="tile-title">{experience.title}</h3>
            <h4 className="tile-organization">{experience.organization}</h4>
            <p className="tile-duration">{experience.duration}</p>
            <ul className="tile-description">
                {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
);

const Carousel: React.FC<{ items: ExperienceTile[] }> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const getItemClass = (index: number) => {
        if (index === currentIndex) return 'carousel-item active';
        if (index === (currentIndex + 1) % items.length) return 'carousel-item next';
        if (index === (currentIndex - 1 + items.length) % items.length) return 'carousel-item prev';
        return 'carousel-item';
    };

    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={prevSlide}>
                &lt;
            </button>
            <div className="carousel-content">
                <div className="carousel-items">
                    {items.map((item, index) => {
                        const itemClass = getItemClass(index);
                        const handleClick = () => {
                            if (itemClass.includes('next')) {
                                nextSlide();
                            } else if (itemClass.includes('prev')) {
                                prevSlide();
                            }
                        };
                        
                        return (
                            <div 
                                key={index} 
                                className={itemClass}
                                onClick={handleClick}
                            >
                                <ExperienceTileComponent experience={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <button className="carousel-button next" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};

const Experience: React.FC = () => {
    return (
        <>
            <div className="gradient-bg gradient-bg-1" />
            <div className="experience-container">
                <section className="experience-section">
                    <h2 className="section-title">
                        Work Experience
                    </h2>
                    <Carousel items={workExperiences} />
                </section>

                <section className="experience-section">
                    <h2 className="section-title">Leadership Experience</h2>
                    <Carousel items={leadershipExperiences} />
                </section>

                <section className="experience-section">
                    <h2 className="section-title">Community Service Work</h2>
                    <Carousel items={volunteerExperiences} />
                </section>
            </div>
        </>
    );
};

export default Experience;
