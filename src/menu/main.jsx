import { useState, useEffect } from 'preact/hooks';
import { StandardMenu } from './standard.jsx';
import { WidescreenMenu } from './widescreen.jsx';

export function Menu() {
    const [isStandard, setIsStandard] = useState(true);

    useEffect(() => {
        function updateAspect() {
            const { innerWidth: w, innerHeight: h } = window;
            const ratio = w / h;
            const diffTo43 = Math.abs(ratio - 4 / 3);
            const diffTo169 = Math.abs(ratio - 16 / 9);

            // Show StandardMenu when closer to 4:3
            setIsStandard(diffTo43 < diffTo169);
        }

        updateAspect();
        window.addEventListener('resize', updateAspect);
        return () => window.removeEventListener('resize', updateAspect);
    }, []);

    return isStandard ? <StandardMenu /> : <WidescreenMenu />;
}
