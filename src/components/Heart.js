import HeartLogo from '../assets/heart.svg';

const Heart = (props) => {
  return (
    <div className='heart'>
      <img class="heart-img" src = {HeartLogo} alt='heart'/>
      <p className="heart-message">{props.msg}</p>
    </div>
  );
};

export default Heart;