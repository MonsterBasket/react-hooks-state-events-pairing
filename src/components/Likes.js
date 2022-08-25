import { useState } from "react";

function Likes({likes, dislikes}){

    const [votes, setVotes] = useState({up: likes, down: dislikes})

    return <>
    <button onClick={_ => setVotes({up: votes.up +1, down: votes.down})}>👍{votes.up}</button>
    <button onClick={_ => setVotes({up: votes.up, down: votes.down +1})}>👎{votes.down}</button>
    </>
}
export default Likes;