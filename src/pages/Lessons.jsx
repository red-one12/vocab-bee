import { Link, useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { HiSpeakerWave } from "react-icons/hi2";

const Lessons = () => {
  const allWord = useLoaderData();
  const { lesson_no } = useParams();

  const lessonNumber = parseInt(lesson_no, 10);
  const filteredWords = allWord.filter(word => word.lesson_no === lessonNumber);

  const colors = [
    { id: 1, color_code: "#d4edda" },  // Light green for very easy
    { id: 2, color_code: "#c3e6cb" },  // Green for easy
    { id: 3, color_code: "#a8d5a2" },  // Slightly darker green for easy
    { id: 4, color_code: "#ffeeba" },  // Light yellow for medium-easy
    { id: 5, color_code: "#ffe8a1" },  // Yellow for medium
    { id: 6, color_code: "#ffd966" },  // Darker yellow for medium
    { id: 7, color_code: "#f7c59f" },  // Light orange for medium-hard
    { id: 8, color_code: "#f6b26b" },  // Orange for medium-hard
    { id: 9, color_code: "#f39c12" },  // Darker orange for medium-hard
    { id: 10, color_code: "#f1948a" }, // Light red for hard
    { id: 11, color_code: "#e74c3c" }, // Red for hard
    { id: 12, color_code: "#c0392b" }  // Dark red for very hard
  ];

  const getColorCode = (lessonNumber) => {
    const colorEntry = colors.find(color => color.id === lessonNumber);
    return colorEntry ? colorEntry.color_code : "#fff";
  };

  const makeSound = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(utterance);
    console.log(word);
    
  };

  const [modalData, setModalData] = useState(null);

  return (
    <div className="lessons-page p-8 max-w-7xl m-auto">
      <h1 className="text-3xl font-bold mb-6">Lesson {lesson_no}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWords.map(word => (
          <div
            key={word.id}
            className="p-4 border rounded-xl shadow"
            style={{ backgroundColor: getColorCode(lessonNumber) }}
          >
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold">{word.word}</p>
              <div onClick={() => makeSound(word.word)}>
                <HiSpeakerWave className="text-xl cursor-pointer" />
              </div>
            </div>
            <p><span className="font-bold">Meaning:</span> {word.meaning}</p>
            <p><span className="font-bold">Pronunciation:</span> {word.pronunciation}</p>
            <p><span className="font-bold">Part of Speech:</span> {word.part_of_speech}</p>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setModalData(word)}
            >
              When to Say
            </button>
          </div>
        ))}
      </div>
      {modalData && (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open>
          <div className="modal-box bg-[#456389] text-white">
            <h3 className="font-bold text-lg">{modalData.word}</h3>
            <p className="py-4"><span className="font-bold">Meaning:</span> {modalData.meaning}</p>
            <p className="py-4"><span className="font-bold">When to Say:</span> {modalData.when_to_say}</p>
            <p className="py-4"><span className="font-bold">Example:</span> {modalData.example}</p>
            <div className="modal-action">
              <button className="btn bg-[#1d1b28] text-white" onClick={() => setModalData(null)}>Close</button>
            </div>
          </div>
        </dialog>
      )}
      <div className="text-center pt-16">
        <Link to='/startLearning' className="btn bg-[#1d1b28] text-white">Back to Lesson</Link>
      </div>
    </div>
  );
};

export default Lessons;
