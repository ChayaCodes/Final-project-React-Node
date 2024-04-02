function GrayInput(props) {
  return (
    <input
      type={props.type ? props.type : 'text'}
      className={props.className ? props.className : ''}
      placeholder={props.placeholder}
      style={{
        ...props.style,
        backgroundColor: '#eeeeee',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        margin: '5px',
      }}

      onChange={props.onChange}
      value={props.value}
      required={props.required}
    />
  );
}
export default GrayInput;
