import { Code, User, MonitorSmartphone} from "lucide-react"

export const AboutSection = () => {
    return <section id="About" className = "py-24 px-4 relative">{" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className = "text-3xl md:text-4xl font-bold mb-12 text-center">
                About
                {" "}
                <span className = "text-primary"> Me</span> 
            </h2>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className= "space-y-6">
                    <h3 className = "text-2xl font-semibold">Learning. Building. Growing.</h3>
                    <p className = "text-muted-foreground">
                        I'm a beginner-level developer with a growing passion for building clean, functional, and user-friendly applications. I’ve been learning and working with web development technologies like HTML, CSS, JavaScript, React, and Tailwind CSS, and I also have experience building desktop applications using tools like Electron or Python frameworks.
                    </p>
                    <p className = "text-muted-foreground">
                        While I’m still early in my journey, I’ve already built several small projects that helped me understand how real-world development works. I enjoy learning new technologies, experimenting with design, and constantly improving my skills.
                    </p>
                    <p className = "text-muted-foreground">
                        I'm currently focused on expanding my knowledge in both frontend and backend development, and I’m excited to keep building, learning, and growing as a developer.
                    </p>

                    <div className = "flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact"  className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>

                        <a href=""  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className = "p-3 rounded-full bg-primary/10">
                        <Code className = "h-6 w-6 text-primary"/>
                        </div>
                        <div className ="text-left">
                            <h4 className="font-semibold text-lg"> Web Development</h4>
                            <p className="text-muted-foreground"> 
                                creating responsive websites and web applications with React
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className = "p-3 rounded-full bg-primary/10">
                        <MonitorSmartphone className = "h-6 w-6 text-primary"/>
                        </div>
                        <div className ="text-left">
                            <h4 className="font-semibold text-lg"> Desktop App Development</h4>
                            <p className="text-muted-foreground"> 
                                Creating responsive and functional desktop applications using modern tools and frameworks.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className = "p-3 rounded-full bg-primary/10">
                        <User className = "h-6 w-6 text-primary"/>
                        </div>
                        <div className ="text-left">
                            <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                            <p className="text-muted-foreground"> 
                                creating intuitive user interfaces and seamless user experiences
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section> 
}