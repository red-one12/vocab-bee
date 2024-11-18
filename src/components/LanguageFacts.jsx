

const LanguageFacts = () => {
  return (
    <div className="language-facts-section pt-28 text-center max-w-7xl m-auto">
    <h2 className="text-6xl text-[#456389] font-bold mb-6">Interesting Facts</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="fact-card p-4 border rounded-lg shadow-sm bg-[#d0e2ec]">
        <h3 className="text-xl font-bold mb-2">Fact 1</h3>
        <p className="text-gray-700">
          Spanish is the second most spoken language in the world by native speakers.
        </p>
      </div>
      <div className="fact-card p-4 border rounded-lg bg-[#d0e2ec] shadow-sm">
        <h3 className="text-xl font-bold mb-2">Fact 2</h3>
        <p className="text-gray-700">
          Mandarin Chinese has the most native speakers of any language.
        </p>
      </div>
      <div className="fact-card p-4 border rounded-lg bg-[#d0e2ec] shadow-sm">
        <h3 className="text-xl font-bold mb-2">Fact 3</h3>
        <p className="text-gray-700">
          French is the official language of 29 countries.
        </p>
      </div>
    </div>
  </div>
  );
};

export default LanguageFacts;
