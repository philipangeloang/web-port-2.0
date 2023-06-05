const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
      <p className="text-main-white text-4xl heading-gradient">
        Recent Projects
      </p>
      <div className="grid gap-4 grid-cols-12 w-full mt-20">
        <div className="project-card"></div>
      </div>
    </div>
  );
};

export default Projects;
