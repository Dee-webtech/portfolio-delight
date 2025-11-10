import React, { useState } from "react";
import { ExternalLink, Github, Code } from "lucide-react";

const ProjectCard = ({ p }) => (
  <article className="bg-white rounded-2xl overflow-hidden shadow-soft-lg hover:shadow-2xl transition transform hover:-translate-y-1">
    <div className="h-44 bg-gray-100">
      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-primary">{p.title}</h3>
        {p.featured && <span className="text-xs bg-accent text-white px-2 py-1 rounded-full">Featured</span>}
      </div>
      <p className="text-sm text-gray-600 mt-2">{p.description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {p.technologies.map((t) => <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">{t}</span>)}
      </div>

      <div className="mt-4 flex gap-3">
  {p.liveUrl ? (
    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
       className="flex-1 text-center bg-accent text-white py-2 rounded-lg inline-flex items-center justify-center gap-2">
      <ExternalLink className="w-4 h-4" /> Live
    </a>
  ) : (
    <span className="flex-1 text-center bg-gray-200 text-gray-600 py-2 rounded-lg">
       Site Under Maintenance
    </span>
  )}

  {p.githubUrl && ( 
    <a href={p.githubUrl} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex-1 text-center border-2 border-gray-200 py-2 rounded-lg inline-flex items-center justify-center gap-2 text-gray-700"> 
    <Github className="w-4 h-4" /> Code 
  </a> 
  )}
</div>

    </div>
  </article>
);

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Recipe Finder",
      description: "React app fetching recipe data from a public API; responsive UI and search filters.",
      image: "https://github.com/Dee-webtech/fe-capstone-recipe-finder/blob/main/src/assets/background.png?raw=true", 

      technologies: ["React", "CSS", "API"],
      category: "frontend",
      liveUrl: "https://fe-capstone-recipe-finder.vercel.app/" ,
      githubUrl: "https://github.com/yourusername/recipe-finder",
      featured: true,
    },
    { id: 2, 
      title: "Fitness Tracker", 
      description: "Interactive fitness tracking web app built with React, TypeScript, and Tailwind CSS.", 
      image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?w=1200&q=80", 
      technologies: ["React", "TypeScript", "Tailwind CSS"], 
      category: "frontend", 
      liveUrl: "https://fitness-tracker-tsx-reactjs.vercel.app/", 
      githubUrl: "https://github.com/dee-webtech/Fitness-tracker-tsx-reactjs", 
      featured: true, 
    },
    {
      id: 3,
      title: "TechCon Landing Page",
      description: "Static responsive landing page built with semantic HTML & Tailwind.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
      technologies: ["HTML", "CSS", "Tailwind"],
      category: "frontend",
      liveUrl: "https://tech-con-html-eight.vercel.app/",
      githubUrl: "https://github.com/dee-webtech/TechCon_HTML",
      featured: false,
    },
    {
  id: 4,
  title: "Business WordPress Site",
  description: "Elementor + Crocoblock-built site with booking form and custom post types.",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
  technologies: ["WordPress", "Elementor"],
  category: "wordpress",
  liveUrl: "",
  githubUrl: "",
  featured: false,
},
{
  id: 5,
  title: "GoWithFund Website",
  category: "wordpress",
  description:
    "A fundraising platform where I volunteered as a frontend WordPress developer. I helped refine the site's Elementor-based layouts, contributed to its transition to the Greenshift plugin for more advanced features, improved mobile responsiveness, and optimized UI consistency across key pages.",
  technologies: ["WordPress", "Elementor", "Greenshift"],
  liveUrl: "https://gowithfund.org",
  image: "/src/assets/images/Gowithfunds.png",
}
];
  const filters = ["all", "frontend", "wordpress"];
  const active = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Projects</h2>
          <p className="mt-3 text-gray-600">Selected work — each project shows purpose, tech, and links.</p>
        </div>

        <div className="flex justify-center gap-3 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${filter === f ? "bg-accent text-white" : "bg-white border"}`}
            >
              {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {active.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
