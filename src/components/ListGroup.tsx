import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

// function ListGroup(props: Props) {
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <div>
      <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No item found.</p>}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </>
    </div>
  );
}

export default ListGroup;
