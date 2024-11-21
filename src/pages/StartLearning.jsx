import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const StartLearning = () => {
  const [lessonNo, setLessonNo] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch('lessonNumber.json')
      .then(res => res.json())
      .then(data => setLessonNo(data));
  }, []);

  return (
    <div className="lessons-page px-2 py-8 max-w-7xl m-auto">
      <h1 className="text-3xl font-bold mb-6">Let's Learn!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessonNo.map((lesson) => (
          <Link
            to={user ? `/lessons/${lesson.lesson_no}` : '/login'}
            key={lesson.id}
            className="p-4 border rounded shadow hover:bg-[#a3c3d8] duration-200"
          >
            <p className="text-xl font-semibold">Lesson {lesson.lesson_no}</p>
          </Link>
        ))}
      </div>

      <div className="tutorial-section my-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Tutorial: Learning the Alphabet</h2>
        <div className="video-container flex justify-center">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/kJQjXAVEWt0?si=1M0Xbh4Tt5zYVvKl" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="text-center">
      <Link to={user ? '/tutorials' : '/login'} className="btn bg-[#456389] text-white px-4 py-2 rounded">View More</Link>
      </div>
    </div>
  );
};

export default StartLearning;
