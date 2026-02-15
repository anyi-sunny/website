import React, { useState } from 'react';
import './Portfolio.css';
import { portfolioItems, PortfolioItem } from '../../constants/portfolio';

const Portfolio: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

    const openModal = (item: PortfolioItem) => {
        setSelectedImage(item);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handlePrevious = () => {
        if (selectedImage) {
            const currentIndex = portfolioItems.findIndex(item => item.id === selectedImage.id);
            const previousIndex = currentIndex === 0 ? portfolioItems.length - 1 : currentIndex - 1;
            setSelectedImage(portfolioItems[previousIndex]);
        }
    };

    const handleNext = () => {
        if (selectedImage) {
            const currentIndex = portfolioItems.findIndex(item => item.id === selectedImage.id);
            const nextIndex = currentIndex === portfolioItems.length - 1 ? 0 : currentIndex + 1;
            setSelectedImage(portfolioItems[nextIndex]);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') handlePrevious();
        if (e.key === 'ArrowRight') handleNext();
    };

    return (
        <div className="portfolio-container">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="portfolio-gallery">
                {portfolioItems.length > 0 ? (
                    portfolioItems.map((item) => (
                        <div 
                            key={item.id} 
                            className="portfolio-item"
                            onClick={() => openModal(item)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && openModal(item)}
                        >
                            <div className="portfolio-image-wrapper">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="portfolio-image"
                                />
                            </div>
                            <h3 className="portfolio-item-title">{item.title}</h3>
                            {item.description && (
                                <p className="portfolio-item-description">{item.description}</p>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="portfolio-empty">No artwork to display yet.</p>
                )}
            </div>

            {selectedImage && (
                <div 
                    className="modal-overlay" 
                    onClick={closeModal}
                    onKeyDown={handleKeyPress}
                    role="dialog"
                    tabIndex={-1}
                >
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="modal-close" 
                            onClick={closeModal}
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                        
                        <button 
                            className="modal-nav modal-prev" 
                            onClick={handlePrevious}
                            aria-label="Previous image"
                        >
                            ‹
                        </button>

                        <img 
                            src={selectedImage.image} 
                            alt={selectedImage.title}
                            className="modal-image"
                        />

                        <button 
                            className="modal-nav modal-next" 
                            onClick={handleNext}
                            aria-label="Next image"
                        >
                            ›
                        </button>

                        <div className="modal-info">
                            <h2 className="modal-title">{selectedImage.title}</h2>
                            {selectedImage.description && (
                                <p className="modal-description">{selectedImage.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
