import { useState } from 'react';

function Card(props) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card" onClick={toggleExpanded}>
      <h2>{props.title}</h2>
      <p className="p-bold-size">{props.value}</p>
      <p>{props.description}</p>
      {expanded && <p>{props.extraInfo}</p>}
    </div>
  );
}

export default Card;