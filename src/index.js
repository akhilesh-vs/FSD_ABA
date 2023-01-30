import 'bootstrap/dist/css/bootstrap.css';
import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import BarLoader from "react-spinners/BarLoader";

import sm from './Images/sm.png';
import vvce from './Images/vvce-logo.png';
import bg from './Images/bg.jpg';
import './Css/style.css';
import pn from './Images/pn.png';

const root = ReactDOM.createRoot(document.getElementById('root'));



function App(){


  var prices=Array();
  var i=0;
  var max=0;
  
  
  function add(){
    document.getElementById("b").innerHTML="Array: "
    prices[i]=document.getElementById("a").value;
    i++;
    document.getElementById("a").value="";
    for(let i=0;i<prices.length;i++)
    {
        document.getElementById("b").innerHTML+=" "+prices[i]+" "+" ,";
    }
    
  }
  
  function avs(){
  
            
    let maxprofit = 0;
  
    for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
        let profit = prices[j] - prices[i];
        if (profit > maxprofit)
            maxprofit = profit;
    }
  }
  
  document.getElementById("final").innerHTML=maxprofit;
  
  }
  

    const [num,setNum]=useState("");

    const [loading,setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },4000)
    },[]);

    const [loading2,setLoading2]=useState(false);
    useEffect(()=>{
      setLoading2(true)
      setTimeout(()=>{
        setLoading2(false)
      },800000)
    },[]);

    const [loading3,setLoading3]=useState(false);
    useEffect(()=>{
      setLoading3(true)
      setTimeout(()=>{
        setLoading3(false)
      },800000)
    },[]);


    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(num);
    }

    return <div>
        {
          loading ? 
          <div className="entryDiv">
           
          <ClimbingBoxLoader
            
            size={30}
            color={'black'}
            loading={loading}
           
        />
         <img src={pn} className="logo"/>
         <div className="details">
          <h1 className="avs">Avs</h1>
          </div>

        </div>

          :
        
    <div className="outer">

      <div className="seperator">
      <div className="skew"> 

      <BarLoader

            
            size={50}
            color={'#b3e5db'}
            loading={loading2}
            
               
        />

        </div>
     

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600&family=Fredoka+One&display=swap" rel="stylesheet"/>

      <h1 className="heading">Best Time to Buy and Sell Stock</h1>
      <h2></h2>
      <div className="itrContainer">
        <p className="price">Enter price:</p>
        

     
        <input className="pad"  placeholder='Number'  id="a"/>
        <button class="btn btn-outline-light al" onClick={add}>Add Display</button>

        <div className="array-display">
        <p className="ss al" id="b">Array: </p>
    </div>
        
    

      <div className="tim">
          <p className="fprint" id="final"></p>
      </div>

    </div>

      <div class="knowledge-block">
        <p class="al al2">
            We are maximizing profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
            
        </p>
        <p class="al al2">
            Return the maximum profit you can achieve from this transaction.
            
        </p>
        <p class="al al2">
            If we cannot achieve any profit, return 0.
        </p>

    </div>


    </div>
      <img className="buttonImg" src={sm} onClick={avs}/>
    </div>


        

  }
    </div>
        


}

root.render(<App/>);

