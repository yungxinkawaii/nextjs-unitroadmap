import React from "react";
import ReactFlow from "reactflow";
import Navbar2 from "../../components/Navbar2";
import CustomNode from "../../components/CustomNode";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 100, y: 200 }, data: { label: "1" } },
  { id: "2", position: { x: 100, y: 300 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const onNodeClick = (event, node) => {
  // Handle node click event here
  console.log("Clicked node:", node);
};

export default function FirstPost() {
  return (
    <div>
      <Navbar2 />
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          onNodeClick={onNodeClick}
          nodeTypes={{ custom: CustomNode }}
        />
      </div>
    </div>
  );
}
