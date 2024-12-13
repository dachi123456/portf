import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useSmoothScroll = () => {
    const navigate = useNavigate();

    const smoothScrollToSection = useCallback((sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Check if the current location is not the main page
            if (window.location.pathname !== '/') {
                navigate('/'); // Navigate to the main page
            }
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, [navigate]);

    return smoothScrollToSection;
};

export default useSmoothScroll;
