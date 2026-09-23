import { useEffect, useState } from "react";

function WelcomeMessage() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
          setTimeout(() => {
            setMessage("Welcome to WorkSphere");
        }, 1000);
    }, []);

    return (
        <div>
            <h3>{message}</h3>
        </div>
    );
}

export default WelcomeMessage;