import React from 'react';
import classes from './TodoItem.module.css';
// const Item: React.FC<{ id: string; text: string }> = (props) => {
const Item: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>
      {props.text}
    </li>
  );
};

export default Item;
