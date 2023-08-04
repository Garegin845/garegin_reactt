import { useState } from 'react'
function App() {
         const [showHello,setShowHello]  = useState(false)  
         let helloDiv =<div></div>
            if (showHello) {
                         helloDiv = <div>Hello !!!</div>
           
} else {
                 helloDiv = <div></div>
            }
        
            return (
        <div>
                   <div style={{display:"flex"}}> 
       <div onClick={() => setShowHello(true)} style={{
                                   width: 50,
                                   height: 50, 
                                 padding: 10,
                                 border:'1px solid black',                        
                                 cursor: 'pointer'
                          }}> 
                                show
                               
                                </div> 
                                
                                <div onClick={() => setShowHello(false)} style={{
                                   width: 50,
                                   height: 50,
                                  padding: 10,
                                 border:'1px solid black',                        
                              
                                 cursor: 'pointer'
                                
                                }}> hide
                                  
                                  </div>
                
                                  
       </div> 
       {helloDiv}
       </div>
       )
        
       
 
 
 
  
 


}

export default App
