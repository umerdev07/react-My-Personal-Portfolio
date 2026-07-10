import SkillCategoryCard from "./SkillCategoryCard";

const skills = [
  {
    title: "Frontend",
    icon: "ri-code-s-slash-line",
    borderColor: "border-cyan-500/30",
    bgColor: "bg-cyan-500/5",
    iconColor: "text-cyan-400",
  },
  {
    title: "Backend",
    icon: "ri-terminal-box-line",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-500/5",
    iconColor: "text-emerald-400",
  },
  {
    title: "Databases",
    icon: "ri-database-2-line",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-500/5",
    iconColor: "text-yellow-400",
  },
  {
    title: "Mobile",
    icon: "ri-smartphone-line",
    borderColor: "border-violet-500/30",
    bgColor: "bg-violet-500/5",
    iconColor: "text-violet-400",
  },
  {
    title: "Web",
    icon: "ri-global-line",
    borderColor: "border-indigo-500/30",
    bgColor: "bg-indigo-500/5",
    iconColor: "text-indigo-400",
  },
  {
    title: "AI / ML",
    icon: "ri-brain-line",
    borderColor: "border-pink-500/30",
    bgColor: "bg-pink-500/5",
    iconColor: "text-pink-400",
  },
];

const MiniSkillCategoryCard = () => {
  return (
    <section className="w-fit py-8 md:py-12 mb-10 md:mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-5 md:gap-8 place-items-center">
          {skills.map((skill) => (
            <SkillCategoryCard
              key={skill.title}
              {...skill}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniSkillCategoryCard;