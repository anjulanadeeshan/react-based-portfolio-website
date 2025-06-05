import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section id = "home" className = "relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w.4xl mx-auto text-center z-10">
                <div className = "space-y-6">
                    <h1 className = "text-4xl md:text-6xl font-bold tracking-tight"> 
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}Anjula</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2">{" "} Nadeeshan</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I'm passionate about building software that solves real-world problems, with a strong interest in both desktop application development and web application development.
                    This portfolio showcases some of my projects, skills, and experiences as I grow in the field of software engineering.
                    </p>

                    <div className = "pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className = "cosmic-button">View my Works</a>   
                    </div>
                </div>
            </div>

            <div className = "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className = "text-sm text-muted-foreground mb-2">Scroll</span>
                <a href="#About">
                    <ArrowDown className = "h-5 w-5 text-primary"></ArrowDown>
                </a>    
            </div>
        </section>
    )
}