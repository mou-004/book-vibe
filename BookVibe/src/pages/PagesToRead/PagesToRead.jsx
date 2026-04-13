import { use } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#4A90D9",
  "#2EC4A5",
  "#F5A623",
  "#F0845A",
  "#E83030",
  "#8B5CF6",
  "#EC4899",
  "#10B981",
];

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const generateSpikeData = (pages) =>
  Array.from({ length: 61 }, (_, i) => {
    const centered = Math.abs(i / 60 - 0.5) * 2;
    return { x: i, value: pages * Math.pow(1 - centered, 6) };
  });

const SpikeChart = ({ book, color, maxPages }) => (
  <div className="flex flex-col items-center flex-1 min-w-0">
    <span className="font-bold text-sm mb-1" style={{ color }}>
      {book.totalPages}
    </span>
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart
        data={generateSpikeData(book.totalPages)}
        margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
      >
        <defs>
          <linearGradient id={`g-${book.bookId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={1} />
            <stop offset="100%" stopColor={color} stopOpacity={0.65} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="4 4"
          stroke="#e0e0e0"
          vertical={false}
        />
        <YAxis hide domain={[0, maxPages + 40]} />
        <XAxis hide />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={1}
          fill={`url(#g-${book.bookId})`}
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
    <p className="text-gray-500 text-xs mt-1 text-center px-1">
      {book.bookName}
    </p>
  </div>
);

const PagesToRead = () => {
  const books = use(booksPromise);
  const maxPages = Math.max(...books.map((b) => b.totalPages));
  const yMax = Math.ceil((maxPages + 40) / 85) * 85;
  const yTicks = [yMax, yMax * 0.75, yMax * 0.5, yMax * 0.25, 0].map(
    Math.round,
  );

  return (
    <div className="container mx-auto pb-6">
      <div className="bg-base-200 rounded-2xl p-6 shadow-sm">
        <div
          className="flex items-stretch gap-2"
          style={{ minWidth: `${books.length * 120}px` }}
        >
          <div
            className="flex flex-col justify-between text-gray-400 text-xs pr-2"
            style={{
              paddingTop: "28px",
              paddingBottom: "20px",
              minWidth: "32px",
            }}
          >
            {yTicks.map((tick) => (
              <span key={tick}>{String(tick).padStart(2, "0")}</span>
            ))}
          </div>
          <div className="flex flex-1 gap-3">
            {books.map((book, i) => (
              <SpikeChart
                key={book.bookId}
                book={book}
                color={COLORS[i % COLORS.length]}
                maxPages={maxPages}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesToRead;
