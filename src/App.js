
import React,{useState,useRef} from 'react';
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import MyReducer from './Reducer/reducer';

const App = () => {

  const [show,setShow] = useState(false);
  const dispatch = useDispatch();
  const name = useSelector(state => console.log("line 11 :",state.MyReducer))
  const [formData,setFormData] = useState({
    name: "",
    email: "",
    img: "",
    password: "",
    con_pass: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      return {...prev,[name]: value}
    })
  }

  const submitClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "SUBMIT",
      payload: formData
    })
    console.log(formData);
  }

  const hideShow = () =>{
    setShow(!show)
  }
  return (
    <>
     <form style={{margin: "6rem 7rem",display: "flex",flexDirection: "column"}}>
      <label>Name</label>
      <input name="name" type="text" value={formData.name} onChange={handleChange}/>
      <label>Email</label>
      <input name="email" type="email" value={formData.email} onChange={handleChange}/>
      <label>Image/photo</label>
      <input name="img" type="text" value={formData.img} onChange={handleChange}/>
      <label>Password</label>
      <input name ="password" type={show ? "password" : "text"} value={formData.password} onChange={handleChange} /><span style={{cursor: "pointer"}} onClick={hideShow}>{show ? "show": "hide"}</span>
      <label>Confirm Password</label>
      <input name="con_pass" type="password" value ={formData.con_pass} onChange={handleChange}/>
      <button style={{margin: "2rem 0"}} onClick={submitClick}>Submit</button>
     </form>
    </>
  )
}

export default App