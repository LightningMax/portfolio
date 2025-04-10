import ProjectCard from "../ui/ProjectCard"
import projectsData from "../../data"

export default function Projects() {

    return (
        <section id="projects" className="projects bg-nier-300 rounded-t-lg ml-2 mr-2 px-5 md:px-10 xl:px-20 2xl:px-28">
            <h2 className="text-nier-50 opacity-90 text-7xl/25 pt-10 w-full text-center font-general">PROJETS</h2>
            <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
                <div className="col-span-1 md:col-span-12">
                    <ProjectCard
                        title={projectsData[0].title}
                        description={projectsData[0].description}
                        img={projectsData[0].imgSrc}
                    />
                    <ProjectCard
                        title={projectsData[1].title}
                        description={projectsData[1].description}
                        img={projectsData[1].imgSrc}
                    />
                </div>
            </div>
        </section>
    )
}