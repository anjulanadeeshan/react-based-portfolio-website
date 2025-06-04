import {useEffect, useState} from "react";

//id , size, x, y, opacity, animation
export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteros, setMeteros] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteros();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth*window.innerHeight)/10000
        );

        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id:i,
                size: Math.random()*3+1,
                x: Math.random()*100,
                y: Math.random()*100,
                opacity: Math.random() *0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            })
        }

        setStars(newStars);
    };

    const generateMeteros = () => {
        const numberOfMeteros = 4

        const newMeteros = []

        for (let i = 0; i < numberOfMeteros; i++) {
            newMeteros.push({
                id:i,
                size: Math.random()*2+1,
                x: Math.random()*100,
                y: Math.random()*20,
                delay: Math.random() *15,
                animationDuration: Math.random() * 3 + 3
            });
        }

        setMeteros(newMeteros);
    }
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className = "star animate-pulse-sublet"
                    style={{
                        width:star.size + "px",
                        height:star.size + "px",
                        left:star.x + "%",
                        top:star.y + "%",
                        opacity:star.opacity,
                        animationDuration:star.animationDuration + "s",
                    }}
                />
            ))}

            {meteros.map((metero) => (
                <div
                    key={metero.id}
                    className = "meteor animate-meteor"
                    style={{
                        width:metero.size*50 + "px",
                        height:metero.size + "px",
                        left:metero.x + "%",
                        top:metero.y + "%",
                        animationDelay :metero.delay,
                        animationDuration:metero.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );  
};