// Die.jsx

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    // No need for the extra handleClick function anymore
    
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice} // Call the prop directly
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}