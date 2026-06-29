import React from "react";

const orbitData = [
  {
    id: 1,
    name: "React",
    icon: <i className="ri-reactjs-line text-cyan-400" />,
    color: "cyan",
    ring: "inner",
    speed: 0.12,
    ringIdx: 0,
    ringTotal: 1,
  },
  {
    id: 2,
    name: "Flutter",
    icon: <i className="ri-flutter-line text-blue-400" />,
    color: "purple",
    ring: "middle",
    speed: -0.08,
    ringIdx: 0,
    ringTotal: 2,
  },
  {
    id: 3,
    name: "Node.js",
    icon: <i className="ri-nodejs-line text-green-400" />,
    color: "green",
    ring: "middle",
    speed: -0.08,
    ringIdx: 1,
    ringTotal: 2,
  },
  {
    id: 4,
    name: "FastAPI",
    icon: <i className="ri-server-line text-pink-400" />,
    color: "pink",
    ring: "outer",
    speed: 0.06,
    ringIdx: 0,
    ringTotal: 2,
  },
  {
    id: 5,
    name: "AI / ML",
    icon: <i className="ri-brain-line text-yellow-400" />,
    color: "yellow",
    ring: "outer",
    speed: 0.06,
    ringIdx: 1,
    ringTotal: 2,
  },
];

export default orbitData;