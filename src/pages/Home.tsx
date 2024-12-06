const Home = () => {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Welcome to React Boilerplate
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl mt-6">
          A modern template built with React 19, React Router 7, and Tailwind CSS.
          Start building your next project with confidence.
        </p>
      </div>
    </div>
  );
};

export default Home;