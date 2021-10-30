import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';



const App = () => {
  return (
    
    <div className='container'>
      <Header/>

      <div className="container-view">
        
      <a class="btn" href="/src/calldetails.jsx" id="">Archive all calls</a> 
      <button class="btn btn-success" onclick="location.href='http://google.com';"> Google</button>
      
      {/* <form action="https://google.com">
      <input type="submit" value="Go to Google" />
      </form> */}
        <br /><br /><br />
      <div>
        <p>April, 19 2018</p>
        <a class="btn" href="" id="caller1div"></a>
        <a class="btn" href="" id="">time</a>
        <a class="btn" href="" id="">Archive it</a>
      </div>
      <div >
        <p>April, 18 2018</p>
        <p></p>
        <a class="btn" href="" id="caller2div"></a>
        <a class="btn" href="" id="">time</a>
        <a class="btn" href="" id="">Archive it</a>
      </div>
      <div>
        <p>April, 18 2018</p>
        <p></p>
        <a class="btn" href="" id="caller3div"></a>
        <a class="btn" href="" id="">time</a>
        <a class="btn" href="" id="">Archive it</a>
      </div>
      <div>
        <p>April, 18 2018</p>
        <p></p>
        <a class="btn" href="" id="caller4div"></a>
        <a class="btn" href="" id="">time</a>
        <a class="btn" href="" id="">Archive it</a>
      </div>  
      
      </div>
    </div>
  );
};

fetch('https://aircall-job.herokuapp.com/activities/7834').then((caller1)=>{
  // console.log(data);
  return caller1.json();
}).then((caller1data)=>{
  console.log(caller1data.to);
  document.getElementById('caller1div').innerHTML=caller1data.to;
}).catch((err)=>{
  console.log(err);
})

fetch('https://aircall-job.herokuapp.com/activities/7833').then((caller2)=>{
  // console.log(data);
  return caller2.json();
}).then((caller2data)=>{
  console.log(caller2data.to);
  document.getElementById('caller2div').innerHTML=caller2data.to;
}).catch((err)=>{
  console.log(err);
})

fetch('https://aircall-job.herokuapp.com/activities/7832').then((caller3)=>{
  // console.log(data);
  return caller3.json();
}).then((caller3data)=>{
  console.log(caller3data.to);
  document.getElementById('caller3div').innerHTML=caller3data.to;
}).catch((err)=>{
  console.log(err);
})

fetch('https://aircall-job.herokuapp.com/activities/7831').then((caller4)=>{
  // console.log(data);
  return caller4.json();
}).then((caller4data)=>{
  console.log(caller4data.to);
  document.getElementById('caller4div').innerHTML=caller4data.to;
}).catch((err)=>{
  console.log(err);
})

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
