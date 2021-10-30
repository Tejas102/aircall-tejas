import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';


const App = () => {
  return (
    
    <div className='container'>
      <Header/>

      <div className="">
        
      <a class="btn" href="/public/archivelist.html" id="">Archive all calls</a> 
      {/* <button class="btn btn-success" onclick="location.href='http://google.com';"> Google</button> */}
      
      {/* <form action="https://google.com">
      <input type="submit" value="Go to Google" />
      </form> */}
        <br /><br /><br />
      <div id="showOrHide">
        <div id="" class="">
        <p>April, 19 2018</p>
        <a class="btn" href="/public/calldetail1.html" id="caller1div"></a>
        <a class="btn" href="/public/calldetail1.html" id="">09:38 AM</a>
        {/* <a class="btn" href="" id="" onclick="MoveDiv()">Archive it</a> */}
        {/* <input type="button" onClick="" value="Click Me" /> */}
        
      </div>
      </div>
      <div>   
        <p>April, 18 2018</p>
        <p></p>
        <a class="btn" href="/public/calldetail2.html" id="caller2div"></a>
        <a class="btn" href="/public/calldetail2.html" id="">04:59 PM</a>
        {/* <a class="btn" href="" id="MoveDiv()">Archive it</a> */}
        {/* <input type="button" onclick={this.MoveDiv} value="Click Me" /> */}

      </div>
      <div>
        <p>April, 18 2018</p>
        <p></p>
        <a class="btn" href="/public/calldetail3.html" id="caller3div"></a>
        <a class="btn" href="/public/calldetail3.html" id="">04:53 PM</a>
        <a class="btn" href="" id="">Archive it</a>
      </div>
      <div>
        <p>April, 18 2018</p>
        <p></p>
        <a class="btn" href="/public/calldetail4.html" id="caller4div"></a>
        <a class="btn" href="/public/calldetail4.html" id="">04:42 PM</a>
        <a class="btn" href="" id="">Archive it</a>
      </div>  

      <div id="destination">
        <p>testing

        </p>
      </div>
      
      </div>
    </div>
  );
};

function showOrHideDiv() {
  var v = document.getElementById("showOrHide");
  if (v.style.display === "none") {
     v.style.display = "block";
  } else {
     v.style.display = "none";
  }
}

fetch('https://aircall-job.herokuapp.com/activities/7834').then((caller1)=>{
  // console.log(data);
  return caller1.json();
}).then((caller1data)=>{
  console.log(caller1data.to);
  document.getElementById('caller1div').innerHTML=caller1data.to;
}).catch((err)=>{
  console.log(err);
})

fetch('https://aircall-job.herokuapp.com/activities/7834').then((caller1time)=>{
  // console.log(data);
  return caller1time.json();
}).then((caller1timedata)=>{
  console.log(caller1timedata.created_at);
  document.getElementById('caller1time').innerHTML=caller1timedata.created_at;
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
