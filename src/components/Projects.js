import Image from "next/image";
import VinylVaultImage from "../../public/static/images/VinylVault.png";
import LANBuddyImage from "../../public/static/images/LANBuddy.png";
import LostInTheWoodsImage from "../../public/static/images/LostInTheWoods.png";
import { useState } from "react";
import ResponsiveCard from "./Card";

const Projects = () => {
  const projects = [
    {
      name: "Vinyl Vault",
      description: "An album companion and database App",
      hostedLink:
        "https://vinyl-vault-frontend-git-main-brettmabramson-gmailcom.vercel.app/",
      gitHubFrontEnd: "https://github.com/Brett-Abramson/Vinyl-Vault-Frontend",
      gitHubBackEnd: "https://github.com/Brett-Abramson/Vinyl_Vault_Backend",
      image: VinylVaultImage,
      techStack: ["Next.js", "Django", "Tailwind CSS", "Python", "Javascript"],
    },
    {
      name: "LANBuddy",
      description: "A Video Game Matching and Management App",
      hostedLink: "https://lanbuddy.herokuapp.com/",
      gitHubFrontEnd: "https://github.com/Brett-Abramson/LANbuddy_frontend",
      gitHubBackEnd: "https://github.com/jdbohac/project_4_backend",
      image: LANBuddyImage,
      techStack: ["React", "Django", "MaterialUI", "Python", "Javascript"],
    },
    {
      name: "Lost in the Woods",
      description: "A community sourced hiking and camping companion app",
      hostedLink: "https://lost-in-the-woods.herokuapp.com/",
      gitHubFrontEnd: "https://github.com/Brett-Abramson/project_3_frontend",
      gitHubBackEnd: "https://github.com/Brett-Abramson/project_3_backend",
      image: LostInTheWoodsImage,
      techStack: ["Mongoose", "Express", "React", "Node.js", "Javascript"],
    },
  ];

  return (
    <div className="h-full w-full bg-slate-100" id="projects">
      <div className="flex flex-col">
        <div className="flex flex-col items-center py-5">
          <h3 className="pt-2 font-serif text-2xl font-extralight text-slate-950">
            Projects
          </h3>
          <h2 className="py-1 text-4xl font-semibold text-slate-950">
            Latest Works
          </h2>
        </div>
        <div className="mx-5 rounded-xl bg-slate-900 px-2 md:border-x">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="my-8 h-full shadow-slate-400 md:shadow-md"
              >
                <div className="m-auto flex w-full flex-col rounded-sm border-x border-y sm:border-solid sm:border-zinc-800 md:max-w-xl md:flex-row lg:max-w-4xl lg:border-none xl:max-w-6xl">
                      <div
                        className={`relative h-full opacity-90 hover:cursor-pointer hover:opacity-100 ${
                          index % 2 === 0 ? "sm:order-3" : ""
                        } sm:border-r sm:border-zinc-800 lg:border lg:border-zinc-800 lg:drop-shadow-lg`}
                      >
                        <Image
                          src={project.image}
                          alt={`Image of ${project.name} Landing Page`}
                          // width={500}
                          // height={500}
                          fill
                          sizes="75vw"
                          className="!static object-contain"
                        />
                      </div>
                      <div
                        className={`py-0.5 md:py-0 lg:px-5 xl:px-10 ${
                          index % 2 === 0 ? "sm:order-2" : ""
                        }`}
                      />
                      <div
                        className={`flex flex-col gap-1 ${
                          index % 2 === 0
                            ? "bg-gradient-to-tl sm:order-1"
                            : "bg-gradient-to-tr"
                        }  from-slate-400 via-zinc-400 to-stone-500 py-3 sm:justify-evenly md:w-1/3 lg:border  lg:border-zinc-800 lg:shadow-lg lg:hover:scale-105 lg:hover:cursor-pointer xl:px-5`}
                      >
                        <h3 className="text-center text-xl font-bold lg:text-2xl">
                          {project.name}
                        </h3>
                        <div className="m-auto mb-1 w-3/4 border-y bg-zinc-200 md:hidden" />
                        <h4 className="hidden text-center font-serif text-sm font-light lg:block">
                          {project.description}
                        </h4>
                        <h5 className="text-center font-serif text-xs font-thin md:text-sm lg:font-light">
                          -{" "}
                          {project.techStack.map((tech) => {
                            return `${tech} -`;
                          })}
                        </h5>

                        {/* <a
                        href={project.hostedLink}
                        target="_blank"
                        className="w-fit"
                      >
                        <Button buttonText={"Visit Site"} />
                      </a> */}
                      </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ResponsiveCard />
    </div>
  );
};

export default Projects;
