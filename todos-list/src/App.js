import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  const onDelete=(todo)=>{
    console.log("I am on delete of todo",todo);
  }

  let todos=[
    {
      sno:1,
      title:"todos list project",
      desc:"Lets complete this..Woohoo!!"
    },
    {
      sno:2,
      title:"OS Assignment",
      desc:"PPT pending..."
    },
    {
      sno:1,
      title:"Ritm",
      desc:"Lyric extraction from audio.. download not done!"
    }
  ]
  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
