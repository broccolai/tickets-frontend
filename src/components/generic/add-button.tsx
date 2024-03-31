interface Props {
  action: () => void;
}

const AddButton = (props: Props) => {
  return <button onClick={props.action}>ADD</button>;
};

export default AddButton;
