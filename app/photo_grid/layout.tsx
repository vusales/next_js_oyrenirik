import React from 'react'; 


const Layout = ({
    children ,
    modal ,  
}
:{
    children: React.ReactNode,
    modal:React.ReactNode, 
}
) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  )
}


export default Layout ; 