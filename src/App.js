import React,{useEffect, useState} from 'react'
import DataDetails from './DataDetails';
import axios from 'axios'

const App = () => {
  const [Input,setInput] = useState('');
  const [Content,setContent] = useState([]);
  const[healthLabels,sethealthLabels]=useState("vegan")

  useEffect(()=>{
    submitHandler();
  },[])
  const app_id = "9757a28e";
  const app_key ="b7908474804038e09515e2722ac827ba	";
  const submitHandler = async e=>{
   e.preventDefault();
    var result=await axios.get(`https://api.edamam.com/search?q=${Input}&app_id=${app_id}&app_key=${app_key}&from=0&to=30&calories=591-722&health=${healthLabels}`)
    setContent(result.data.hits)
    
  }
  return (
    <div>
      <center>
        <h1 className='bg-black p-3 text-white'>Food Recipe App</h1> <br/>
        <form onSubmit={submitHandler}>
          <input type="text" value={Input} placeholder="enter recipe name.." onChange={(e) =>
             setInput(e.target.value)}/> 
          
          <select className='app_healthLables'>
          <option>All</option>
          <option onClick={()=>{sethealthLabels("vegan")}}>vegan</option>
            <option onClick={()=>{sethealthLabels("vegetarian")}}>vegetarian</option>
            <option onClick={()=>{sethealthLabels("paleo")}}>paleo</option>
            <option onClick={()=>{sethealthLabels("dairy-free")}}>dairy-free</option>
            <option onClick={()=>{sethealthLabels("gluten-free")}}>gluten-free</option>
            <option onClick={()=>{sethealthLabels("wheat-free")}}>wheat-free</option>
            <option onClick={()=>{sethealthLabels("fat-free")}}>fat-free</option>
            <option onClick={()=>{sethealthLabels("low-sugar")}}>low-sugar</option>
            <option onClick={()=>{sethealthLabels("egg-free")}}>egg-free</option>
            <option onClick={()=>{sethealthLabels("peanut-free")}}>peanut-free</option>
            <option onClick={()=>{sethealthLabels("tree-nut-free")}}>tree-nut-free</option>
            <option onClick={()=>{sethealthLabels("soy-free")}}>soy-free</option>
            <option onClick={()=>{sethealthLabels("fish-free")}}>fish-free</option>
            <option onClick={()=>{sethealthLabels("shellfish-free")}}>shellfish-free</option>
          </select>
          <button className='btn btn-primary mt-6'>submit</button>
        </form>
        
        {Content.length>=1 ? <DataDetails  data={Content}/>:null}
      </center>
    </div>
  )
}

export default App