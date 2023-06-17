import React from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function CustomNode({ data }) {
  const handleMouseEnter = () => {
    document.body.style.cursor = 'pointer';
  };

  const handleMouseLeave = () => {
    document.body.style.cursor = 'auto';
  };

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          background: '#fff',
          padding: '10px',
          borderRadius: '4px',
          cursor: "pointer",
        }}
      >
        {data.label}
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
    </>
  );
}

export default CustomNode;