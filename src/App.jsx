
import  './App.css'

function App() {
 let son=Math.floor(Math.random()*90+10);
  let ism=prompt("Ism kiring")
let  sana=new Date();
let soat=sana.getHours();
console.log(soat);



  return (
    <div className='ota' style={{backgroundColor:(soat>6&&soat<18)?"white":"black"}}>
        <div className="box" style={{backgroundColor:(soat>6&&soat<18)?"white":"white"}}>

    <h1>Random son:{son}</h1>
    <h1>Ismingz:{ism}</h1>
     <p>Bugungi sana: {sana.getDate()}.{sana.getMonth()+1}.{sana.getFullYear()}</p>
        </div>
    </div>
  )
}

export default App
