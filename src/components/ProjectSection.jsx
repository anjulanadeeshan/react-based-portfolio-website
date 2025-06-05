import { ArrowRight } from "lucide-react";

const projects = [
    {
        id:1,
        title: "Family Health Care Service Management System",
        description:"A user-friendly healthcare management application designed to track family health records. The system supports CRUD operations (Create, Read, Update, Delete) for efficient data handling, with a clean dashboard for easy navigation. Built to streamline healthcare service coordination for families.",
        tech: "Frontend : HTML/CSS/JS backend: Node js",
        image: "/projects/HealthCareManagementSys.png",
        githubUrl : "https://github.com/anjulanadeeshan/FamilyHealthCareSys"
    },
    {
        id:2,
        title: "Movie Streaming Site",
        description:"A dynamic movie platform showcasing a curated list of films (e.g., Lilo & Stitch, Mission: Impossible). The interface allows users to browse titles by category or search for specific movies. Designed for entertainment enthusiasts, this project demonstrates skills in UI design and content organization.",
        tech: "Frontend: Vue + API integration .",
        image: "/projects/MovieAPP.jpeg",
        githubUrl : "https://github.com/anjulanadeeshan/MovieApp"
    },{
        id:3,
        title: "YouTube API Integrationm",
        description:"A web app leveraging the YouTube Data API to fetch and display web development tutorials. Users can search for topics and play videos directly. Includes filters for free courses and certifications, offering a resource hub for learners.",
        tech: "YouTube Data API.",
        image: "/projects/YoutubeAPI.jpeg",
        githubUrl : "https://github.com/anjulanadeeshan/youtube_vedio"
    }
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured<span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project highlights different technologies and showcases my ability to build user-friendly, functional applications. Explore the details, tech stacks, and source code for each one below.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                            <h3 className="text-primary font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-2">{project.description}</p>
                            <p className="text-sm text-gray-500 mb-4">{project.tech}</p>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-block text-primary font-medium hover:underline"
                            >
                                View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/anjulanadeeshan">Check my Github<ArrowRight size={16}/></a>
                </div>
            </div>
        </section>
    );
}