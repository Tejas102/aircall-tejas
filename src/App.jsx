import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';


const App = () => {
  return (

    
    <div className='container'>
      {/* <Header/> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
      </svg>
      <div class="activity">Activity</div>
      <div className="">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
      <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
      </svg>  
      <a class="btn" href="/public/archivelist.html" id="">Archive all calls</a> 
      {/* <button class="btn btn-success" onclick="location.href='http://google.com';"> Google</button> */}
      
      {/* <form action="https://google.com">
      <input type="submit" value="Go to Google" />
      </form> */}
        <br /><br /><br />
      <div id="showOrHide">
        <div id="" class="">
        <p>April, 19 2018</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"/>
        </svg>
        <a class="btn" href="/public/calldetail1.html" id="caller1div"></a>
        <a class="btn" href="/public/calldetail1.html" id="">09:38 AM</a>
        <a class="btn" href="" id="">Archive</a>
        {/* <a class="btn" href="" id="" onclick="MoveDiv()">Archive it</a> */}
        {/* <input type="button" onClick="" value="Click Me" /> */}
        
      </div>
      </div>
      <div>   
        <p>April, 18 2018</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"/>
        </svg>
        <a class="btn" href="/public/calldetail2.html" id="caller2div"></a>
        <a class="btn" href="/public/calldetail2.html" id="">04:59 PM</a>
        <a class="btn" href="" id="">Archive</a>
        {/* <a class="btn" href="" id="MoveDiv()">Archive it</a> */}
        {/* <input type="button" onclick={this.MoveDiv} value="Click Me" /> */}

      </div>
      <div>
        <p>April, 18 2018</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z"/>
        </svg>
        <a class="btn" href="/public/calldetail3.html" id="caller3div"></a>
        <a class="btn" href="/public/calldetail3.html" id="">04:53PM</a>
        <a class="btn" href="" id="">Archive</a>
      </div>
      <div>
        <p>April, 18 2018</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z"/>
        </svg>
        <a class="btn" href="/public/calldetail4.html" id="caller4div"></a>
        <a class="btn" href="/public/calldetail4.html" id="">04:42 PM</a>
        <a class="btn" href="" id="">Archive</a>
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
