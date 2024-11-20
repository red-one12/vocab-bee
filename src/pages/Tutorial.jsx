import { Link } from 'react-router-dom';

const Tutorial = () => {
  return (
    <div className="max-w-7xl m-auto py-8">
      <h1 className="text-4xl font-bold text-center text-[#456389] mb-8">Learn Spanish</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        
        <div>
        <iframe width="360" height="200" src="https://www.youtube.com/embed/t7-nb1wlnyA?si=YqmkQueZzEAs2o5C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
        <iframe width="360" height="200" src="https://www.youtube.com/embed/DAp_v7EH9AA?si=8Gxw4qbZ00xiGwm1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
        <iframe width="360" height="200" src="https://www.youtube.com/embed/lZMMqMvY1d0?si=och-gpKBXkPOwZXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
        <iframe width="360" height="200" src="https://www.youtube.com/embed/oFatOXcFPB8?si=glNId7e4GMrCBTyv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
        <iframe width="360" height="200" src="https://www.youtube.com/embed/h3SZZnJPvhk?si=3AOCHa9i0PQpcWQN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
        <iframe width="360" height="200" src="https://www.youtube.com/embed/6_5FnCLLYoA?si=WLtZEvK3R0fIEQDv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        
      </div>
      <div className="text-center">
        <Link to="/startLearning">
          <button className="btn bg-[#456389] text-white px-6 py-3 rounded-lg">
            Learn Vocabularies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tutorial;
