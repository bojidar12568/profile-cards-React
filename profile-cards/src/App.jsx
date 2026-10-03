import ProfileCards from "./components/ProfileCards"

export default function App() {
  const people = [
  { name: "Anna", age: 24, job: "Designer" },
  { name: "Ivan", age: 31, job: "Developer" },
  { name: "Maria", age: 27, job: "Teacher" },
  { name: "Bojidar", age: 20, job: "Web dev"}
];
  
  
  return (
    <div className="cards">
      {people.map((person) => 
      <ProfileCards key={person.name} name = {person.name} 
      age = {person.age} job = {person.job} className="card" />)}
    </div>
  )
  
}


