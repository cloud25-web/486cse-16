import { motion } from "framer-motion";

const cards = [
  {
    title: "Assignments Due",
    value: "2",
    emoji: "📝",
  },
  {
    title: "Today's Classes",
    value: "3",
    emoji: "📚",
  },
  {
    title: "Events",
    value: "2",
    emoji: "🎉",
  },
  {
    title: "Study Streak",
    value: "7 Days",
    emoji: "🔥",
  },
];

function DashboardCards() {
  return (
    <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-4
      gap-6
      mt-8
    ">
      
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          className="
            bg-white/80
            backdrop-blur-lg
            border
            border-white/50
            p-6
            rounded-3xl
            shadow-md
            cursor-pointer
          "
        >
          
          <div className="text-4xl">
            {card.emoji}
          </div>

          <p className="text-gray-500 mt-4">
            {card.title}
          </p>

          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-[#1E1B4B]
          ">
            {card.value}
          </h2>

        </motion.div>
      ))}
    </div>
  );
}

export default DashboardCards;