import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate()

    function handleClick(){
        navigate('/')
    }

    return (
        <div className="not-found">
            <h2>Sorry ...</h2>
            <p>page not found </p>
            <p>This is my best and last offer 👇</p>
            <p><button onClick={handleClick} className='take-me'>Click on me</button> to take you to the home page</p>
        </div>
    );
}
 
export default NotFound;