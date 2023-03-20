function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p>A Brad Traversy tutorial refacroted to TypeScript and dockerized.</p>
      <div className="h-50 w-20 bg-slate-400" />
      <p>
        Find the original repo{" "}
        <a
          href="https://github.com/bradtraversy/github-finder-app"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{" "}
        and the repo of this version{" "}
        <a
          href="https://github.com/IonutInit/Github-Finder"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        The Docker image is available{" "}
        <a
          href="https://hub.docker.com/u/ionutinit"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}

export default About;
