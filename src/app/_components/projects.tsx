"use client";
import { useEffect, useState } from "react";
import { api } from "~/trpc/react";
import TasksList from "./tasks";

type Project = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

const ProjectsList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );
  const { data, isLoading, error } = api.project.listProjects.useQuery();
  useEffect(() => {
    if (data) {
      setProjects(data);
    }
  }, [data]);
  if (isLoading) return <div>Cargando proyectos...</div>;
  if (error) return <div>Error al cargar proyectos</div>;

  return (
    <div>
      <h1>Proyectos</h1>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() =>
              setSelectedProjectId(
                project.id === selectedProjectId ? null : project.id,
              )
            }
            className="cursor-pointer rounded p-4 hover:bg-purple-400"
          >
            <h2>{project.name}</h2>
            {selectedProjectId === project.id && (
              <TasksList projectId={project.id} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectsList;
