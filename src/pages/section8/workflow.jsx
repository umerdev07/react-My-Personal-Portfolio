import {
  ClipboardList,
  Palette,
  Network,
  Plug,
  CheckCheck,
  Rocket,
} from "lucide-react";
import WorkflowCards from "../../componets/Section8Components/workflowCards";

const steps = [
  {
    number: "01",
    title: "Understand Requirements",
    description: "Gather goals, users, and project constraints.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Design UI/UX",
    description: "Create clean and intuitive user experiences.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Architecture",
    description: "Build scalable and maintainable structure.",
    icon: Network,
  },
  {
    number: "04",
    title: "API Integration",
    description: "Connect backend services and features.",
    icon: Plug,
  },
  {
    number: "05",
    title: "Testing",
    description: "Debug, optimize and improve performance.",
    icon: CheckCheck,
  },
  {
    number: "06",
    title: "Deployment",
    description: "Deliver a polished production-ready app.",
    icon: Rocket,
  },
];

export default function Workflow() {
  return (
    <section className="py-24">
      {/* Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2">
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Workflow
          </p>
        </div>
      </div>

      {/* Heading */}
      <div className="mt-8 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold">
          <span className="text-white">My Development </span>

          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
            Approach
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          A consistent, six-stage process behind every app I build.
        </p>
      </div>

        <WorkflowCards/>
    </section>
  );
}