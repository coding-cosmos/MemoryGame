export function Score({name,score}) {
    return <div className="counter">
        <div className={name}>{ name}</div>
        <div className="score">{ score}</div>
    </div>
}