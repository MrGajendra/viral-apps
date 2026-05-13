export default function ProgressBar({
  current,
  total,
}) {
  const percentage = (current / total) * 100;

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>
          Question {current} / {total}
        </span>

        <span>{Math.round(percentage)}%</span>
      </div>

      <div className="w-full bg-gray-300 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}