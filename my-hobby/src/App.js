import React, {useMemo, useState} from 'react';
import axios from 'axios';

function App(){
  const [tepm, settemp] = useState("Hello ,World");

   axios.get("http://localhost:5001/get")
       .then(res =>{
        settemp(res);
       })
 
  return(
    <div>
      {tepm}
    </div>
  );
}

export default App;