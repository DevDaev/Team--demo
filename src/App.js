import { useState } from "react";
import Header from "./components/header";
import TeamSelection from "./components/teamselection";
import TeamMembers from "./components/teammembers";
import Footer from "./components/footer";

function App() {
  const [team, setTeam] = useState("Team B");

  const [membersList, setMembersList] = useState([
    {
      id: 1,
    fullName: "Bob Silas",
    designation: "Js Developer",
    gender: "Male",
    teamName: "Team A",
    image: "/assets/img/pexels-pixabay-415829.jpg"
},
{
    id: 2,
    fullName: "Bob Shevron",
    designation: "C Developer",
    gender: "Female",
    teamName: "Team A",
    image: "/assets/img/pexels-cottonbro-studio-4255392.jpg"

},
{
    id: 3,
    fullName: "Man Silas",
    designation: "Designer",
    gender: "Female",
    teamName: "Team B",
    image: "/assets/img/pexels-camila-aguiar-20197464.jpg"


},
{
    id: 4,
    fullName: "Checkers",
    designation: "Java Developer",
    gender: "Male",
    teamName: "Team A",
    image: "/assets/img/pexels-pixabay-415829.jpg"
},
{
    id: 5,
    fullName: "Silas",
    designation: "Team Leader",
    gender: "Female",
    teamName: "Team B",
    image: "/assets/img/pexels-min-an-1153334.jpg"

},
{
    id: 6,
    fullName: "Bob",
    designation: "Blockchain Developer",
    gender: "Male",
    teamName: "Team B",
    image: "/assets/img/pexels-streetwindy-2690774.jpg"

},
{
    id: 7,
    fullName: "John Silas",
    designation: "Js Developer",
    gender: "Male",
    teamName: "Team A",
    image: "/assets/img/pexels-cottonbro-studio-4255392.jpg"
},
{
    id: 8,
    fullName: "Bob Silas",
    designation: "Js Developer",
    gender: "Female",
    teamName: "Team A",
    image: "/assets/img/pexels-guilherme-almeida-1858175.jpg"

}, 
{
    id: 9,
    fullName: "Cherry",
    designation: "Graphic Designer",
    gender: "Female",
    teamName: "Team C",
    image: "/assets/img/pexels-cottonbro-studio-4255392.jpg"

},
{
    id: 10,
    fullName: "Bobby",
    designation: "Js Developer",
    gender: "Male",
    teamName: "Team C",
    image:"/assets/img/pexels-streetwindy-2690774.jpg"
},
])

function giveTeams(e) {
  setTeam(e.currentTarget.value)
  console.log(e.currentTarget.value)
}



  return (
    <div>
      <Header />
      <TeamSelection team={team} giveTeams={giveTeams}  />
      <TeamMembers  membersList={membersList.filter(members => members.teamName === team)}  />
      <Footer />
    </div>
  );      
}

export default App;
