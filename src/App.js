import Header from "./components/Header/Header";
import Destination from "./pages/Destination/Destination";
import Home from "./pages/Home/Home";
import { Routes, Route } from 'react-router-dom'

function App() {



  const planets = [
    {
      id: 1,
      name: 'Earth',
      img: null,
      describtion: 'Lorem, ipsum consectetur adipisicing elit. Voluptate, laudantium.',
    },
    {
      id: 2,
      name: 'mars',
      img: null,
      describtion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. dolor sitdolor sitdolor sit Voluptate, laudantium.',
    },
    {
      id: 3,
      name: 'jupiter',
      img: null,
      describtion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, laudantium.',
    },
    {
      id: 4,
      name: 'saturn',
      img: null,
      describtion: 'Lorem, ipsum dolor sit amet consectetur  ipsum dolor sit  ipsum dolor sit  ipsum dolor sit  ipsum dolor sit  ipsum dolor sit  adipisicing elit. Voluptate, laudantium.',
    }
  ]

  return (
    <div>
      <Header />
      <h1>abdurahmon</h1>
      <Routes>
        <Route path="/" element={<Home data={planets} />} />
        <Route path="/destination" element={<Destination data={planets} />} />
      </Routes>
    </div>
  );
}

export default App;



// class App  extends React.Component{
//   render(){
//     return (
//       <div className="App">
//         hello
//       </div>
//     );
//   }
//

