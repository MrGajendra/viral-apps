export default function QuizCard({
  questionData,
  onAnswer,
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl mt-4">
      <h2 className="text-2xl font-bold mb-6">
        {questionData.question}
      </h2>

      <div className="space-y-4">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full text-left p-4 border rounded-xl hover:bg-blue-100 transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}