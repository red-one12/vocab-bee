import { Link } from "react-router-dom";

const StartLearning = () => {
  return (
    <div className="lessons-page p-8 max-w-7xl m-auto">
      <h1 className="text-3xl font-bold mb-6">Let's Learn!</h1>

      <div className="lessons-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        <Link to="/lesson/1" className="lesson-card p-4 border rounded-lg bg-white shadow-sm text-center">
          <h2 className="text-xl font-semibold">Lesson 1</h2>
        </Link>
        <Link to="/lesson/2" className="lesson-card p-4 border rounded-lg bg-white shadow-sm text-center">
          <h2 className="text-xl font-semibold">Lesson 2</h2>
        </Link>
        <Link to="/lesson/3" className="lesson-card p-4 border rounded-lg bg-white shadow-sm text-center">
          <h2 className="text-xl font-semibold">Lesson 3</h2>
        </Link>
        <Link to="/lesson/4" className="lesson-card p-4 border rounded-lg bg-white shadow-sm text-center">
          <h2 className="text-xl font-semibold">Lesson 4</h2>
        </Link>
        <Link to="/lesson/5" className="lesson-card p-4 border rounded-lg bg-white shadow-sm text-center">
          <h2 className="text-xl font-semibold">Lesson 5</h2>
        </Link>
        <Link to="/lesson/6" className="lesson-card p-4 border rounded-lg bg-white shadow-sm text-center">
          <h2 className="text-xl font-semibold">Lesson 6</h2>
        </Link>
        <Link to="/lesson/7" className="lesson-card p-4 border rounded-lg bg-white shadow-sm text-center">
          <h2 className="text-xl font-semibold">Lesson 7</h2>
        </Link>
        <Link to="/lesson/8" className="lesson-card p-4 border rounded-lg bg-white shadow-sm text-center">
          <h2 className="text-xl font-semibold">Lesson 8</h2>
        </Link>
        <Link to="/lesson/9" className="lesson-card p-4 border rounded-lg bg-white shadow-sm text-center">
          <h2 className="text-xl font-semibold">Lesson 9</h2>
        </Link>
        <Link to="/lesson/10" className="lesson-card p-4 border rounded-lg bg-white shadow-sm text-center">
          <h2 className="text-xl font-semibold">Lesson 10</h2>
        </Link>
      </div>

      <div className="tutorial-section mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Tutorial: Learning the Alphabet</h2>
        <div className="video-container flex justify-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kJQjXAVEWt0?si=1M0Xbh4Tt5zYVvKl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      <div className="text-center">
        <Link to="/tutorials" className="btn btn-primary">View More</Link>
      </div>
    </div>
  );
};

export default StartLearning;