import { useState } from 'react';
import '../FilesCss/card.css';
import '../FilesCss/card-flip.css';

export function Card({ full_title, title, description, imageUrls = [], bulletpoints }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);
   

    const nextImage = (e) => {
        e.stopPropagation(); // Prevent card flip
        setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
    };

    const currentImage = imageUrls[currentImageIndex] || imageUrls[0];
    console.log('imageUrls received:', imageUrls);
    console.log('currentImage:', currentImage);

    return (
        <>
            <div className={`card-flip-container ${isFlipped ? 'flipped' : ''}`}>
                {/* Front of card */}
                <div className='card-front'>
                    <div className='card-container'>
                        <h2 className='card-title'>{title}</h2>
                        <div className='card-container-secondary'>
                            <div className='image-slideshow'>
                               
                                <img
                                    className='card-image'
                                    src={currentImage}
                                    alt={title}
                                    onClick={() => setIsImageEnlarged(true)}
                                />
                                {title === 'Data Analyst' && (
                                    <>
                                        <p style={{
                                            fontSize: '10px',
                                            color: '#adbac7',
                                            textAlign: 'right',
                                            margin: '4px 0 0 0',
                                            fontStyle: 'italic'
                                        }}> *Images chosen consists of public information data*</p>
                                    </>

                                )}
                                {imageUrls.length > 1 && (
                                    <>
                                        <div className='slideshow-controls'>
                                            <button className='slideshow-btn prev' onClick={prevImage}>‹</button>
                                            <div className='slideshow-dots'>
                                                {imageUrls.map((_, index) => (
                                                    <span
                                                        key={index}
                                                        className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setCurrentImageIndex(index);
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                            <button className='slideshow-btn next' onClick={nextImage}>›</button>
                                        </div>

                                    </>
                                )}
                            </div>
                            <ul className='card-bulletpoints'>
                                {bulletpoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                         
                        </div>
                        
                        <button className='card-button' onClick={() => setIsFlipped(true)}>
                            View Details
                        </button>
                      
                            
                        
                    </div>
                </div>

                {/* Back of card */}
                <div className='card-back'>
                    <div className='card-container'>
                        <h2 className='full-card-title'>{full_title}</h2>
                        <div className='card-description-full'>
                            {description}
                        </div>
                        <button className='card-button card-button-back' onClick={() => setIsFlipped(false)}>
                            Back
                        </button>
                    </div>
                </div>
            </div>

            {/* Enlarged Image Overlay */}
            {isImageEnlarged && (
                <div className='image-overlay' onClick={() => setIsImageEnlarged(false)}>
                    <div className='image-overlay-content' onClick={(e) => e.stopPropagation()}>
                        <button className='overlay-close' onClick={() => setIsImageEnlarged(false)}>×</button>
                        <img src={currentImage} alt={title} className='enlarged-image' />
                        {imageUrls.length > 1 && (
                            <>
                                <button className='overlay-btn prev' onClick={prevImage}>‹</button>
                                <button className='overlay-btn next' onClick={nextImage}>›</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}