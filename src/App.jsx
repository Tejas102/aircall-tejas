import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';

const App = () => {
  return (
    
    <div className='container'>
      <Header/>
      <div className="container-view"></div>
      <div className="container-view">
        <button>Archive all calls</button>
      <div className="containter-view" id="root"></div>  


      </div>
    </div>
  );
};

fetch('https://aircall-job.herokuapp.com/activities/7834').then((data)=>{
  // console.log(data);
  return data.json();
}).then((completedata)=>{
  console.log(completedata.to);
  document.getElementById('root').innerHTML=completedata.to;
}).catch((err)=>{
  console.log(err);
})


ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
