// Gallery Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Gallery item hover effects
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Lightbox functionality (simple version)
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const overlay = this.querySelector('.gallery-overlay');
            const title = overlay.querySelector('h4').textContent;
            const description = overlay.querySelector('p').textContent;
            
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                    <div class="lightbox-info">
                        <h3>${title}</h3>
                        <p>${description}</p>
                    </div>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            // Close lightbox
            const closeBtn = lightbox.querySelector('.lightbox-close');
            closeBtn.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
            
            function closeLightbox() {
                document.body.removeChild(lightbox);
                document.body.style.overflow = 'auto';
            }
            
            // ESC key to close
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeLightbox();
                }
            });
        });
    });
});

// Add CSS for lightbox and gallery filter
const galleryStyle = document.createElement('style');
galleryStyle.textContent = `
    .gallery-filter {
        padding: 2rem 0;
        background-color: #f9fafb;
    }
    
    .filter-buttons {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
    }
    
    .filter-btn {
        padding: 0.75rem 1.5rem;
        border: 2px solid #e5e7eb;
        background-color: white;
        color: #374151;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
    }
    
    .filter-btn:hover {
        border-color: #f97316;
        color: #f97316;
    }
    
    .filter-btn.active {
        background-color: #f97316;
        border-color: #f97316;
        color: white;
    }
    
    .gallery {
        padding: 4rem 0;
    }
    
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
    }
    
    .gallery-item {
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        cursor: pointer;
        height: 300px;
    }
    
    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .gallery-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
        color: white;
        padding: 3rem 1.5rem 1.5rem;
        transform: translateY(100%);
        transition: transform 0.3s ease;
    }
    
    .gallery-item:hover .gallery-overlay {
        transform: translateY(0);
    }
    
    .gallery-overlay h4 {
        color: white;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }
    
    .gallery-overlay p {
        font-size: 0.9rem;
        line-height: 1.5;
        margin-bottom: 1rem;
    }
    
    .gallery-category {
        display: inline-block;
        background-color: #f97316;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease-out;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        background-color: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
    
    .lightbox-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
        color: white;
        cursor: pointer;
        z-index: 2001;
        background-color: rgba(0, 0, 0, 0.5);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;
    }
    
    .lightbox-close:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
    
    .lightbox img {
        width: 100%;
        height: auto;
        max-height: 70vh;
        object-fit: contain;
    }
    
    .lightbox-info {
        padding: 2rem;
    }
    
    .lightbox-info h3 {
        color: #1e3a8a;
        margin-bottom: 1rem;
    }
    
    .lightbox-info p {
        color: #374151;
        line-height: 1.6;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @media screen and (max-width: 768px) {
        .gallery-grid {
            grid-template-columns: 1fr;
        }
        
        .filter-buttons {
            flex-direction: column;
            align-items: center;
        }
        
        .filter-btn {
            width: 200px;
            text-align: center;
        }
        
        .lightbox-content {
            max-width: 95%;
            max-height: 95%;
        }
        
        .lightbox-info {
            padding: 1rem;
        }
    }
`;
document.head.appendChild(galleryStyle);

