import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";

export const Home = () => {
    return (
    <div className = "min-h-screen bg-background text-foreground overflow-x-hidden"> 
        {/* Theme Toggle */}
        <ThemeToggle/>
        {/* Backgrond effects */}
        <StarBackground/>
        {/* Nav bar */}
        <Navbar />
        {/* Main content */}
        <main>
            <HeroSection/>
            <AboutSection/>
        </main>
        {/* Footer */}

    </div>
    ); 
}