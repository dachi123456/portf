import './myButton.css';

const MyButton = ({ width, text, bgcolor = '#7843e9',color = 'white', padding = '1rem', value = '',border = 'none',onClick = () => {} }) => {
  return (
    <button style={{ width, backgroundColor: bgcolor, padding, color,border }} value={value} className='my-btn' onClick={onClick}>    
        {text}
    </button>
  );
};

export default MyButton;
