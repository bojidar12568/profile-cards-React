export default function ProfileCards ({name , age , job}) {
    return (
    <div>
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p>{job}</p>
    </div>
    )
}