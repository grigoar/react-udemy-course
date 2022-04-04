import classes from './TodoItem.module.css';
// const Item: React.FC<{ id: string; text: string }> = (props) => {
const Item: React.FC<{ text: string }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default Item;
