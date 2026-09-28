import {useNavigate} from 'react-router-dom'

function Example(){
const navigate = useNavigate();
function handleSuccess(){
    navigate('/projects');
}

return(
    <div>
        <button onClick={handleSuccess}>
            Go to projects
        </button>
    </div>
)
}
export default Example;


// Link vs useNavigate

// Use useNavigate

// When navigation is the result of an action:

// Login successful
// Create successful
// Delete successful
// Logout