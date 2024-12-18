import ProjectsList from "~/app/_components/projects";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Gestor de Proyectos
        </h1>
        <div className="w-full max-w-2xl">
          <ProjectsList />
        </div>
      </div>
    </main>
  );
}
