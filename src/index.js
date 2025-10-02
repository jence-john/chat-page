import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import imgo from "./image/1.jpg";
import imgt from "./image/2.jpg"; 
import imgth from "./image/3.jpg"; 
import imgf from "./image/4.jpg"; 
import imgfi from "./image/5.jpg"; 
import imgs from "./image/6.jpg"; 
import star from "./image/star.png"


const Root=ReactDOM.createRoot(document.getElementById("root"))

function Search()
{
  return(
    <div style={{ padding: "10px", margin: "10px" }}>
      <input type="Search" placeholder="Search" style={{ width: "100%", padding: "8px", fontSize: "16px",borderRadius:"10px",border:"5px" }} />
      
    </div>
  )
}
function Mailframe(props)
{
  return(
    
    <div style={{backgroundColor:"wheat",color:"black",padding:"10px",margin:"20px", display:"flex", borderRadius:"5px"}}>
      <img style={{width:"40px", padding:"10px", borderRadius:"50%"}} src={props.img} ></img>
      
      <div><h2>{props.name}</h2>
      <p style={{display:""}}>{props.msg}</p>
      </div>
      <div style={{marginLeft:"auto", padding:"2px"}}> 
        <h5>{props.tym}</h5>
        <img src={props.star} style={{width:"20px"}}/>
      </div>

    </div>
  )
}

var person=[
  {
    img: imgo,
    name:"Jessica Koel",
    msg:"Hey, I here to help you out please...",
    tym:"11:20 AM",
    star:star
  },
    {
    img: imgt,
    name:"Jence",
    msg:"I will send you all documents as soon a...",
    tym:"11:11 AM"
  },
      {
    img: imgth,
    name:"John",
    msg:"Do you hear anything about...",
    tym:"10:11 AM",
    star:star
  },
      {
    img: imgf,
    name:"Jnc",
    msg:"Hey, Sorry I forget to say  ...",
    tym:"07:04 PM"
  },

    {
    img: imgfi,
    name:"Jin",
    msg:"Hey, Is anything ...",
    tym:"06:07 PM"
  },
      {
    img: imgs,
    name:"Jack",
    msg:"Nothing more to Say...",
    tym:"06:06 PM",
    star:star
  },
  

]

Root.render(

    <div style={{paddingBottom :"20px"}}>
      <Search></Search>
    {
      person.map (function(item){
        return(
          
        <Mailframe img={item.img} name={item.name}msg={item.msg}tym={item.tym}star={item.star}></Mailframe>
        )
      })
    }
    </div>
  



)