import React from 'react'

const dashboardLayout = ({
    children , 
    login ,  
    user , 
} : {
    children:React.ReactNode, 
    login:React.ReactNode, 
    user:React.ReactNode, 
}) => {
  return (
    <div>
        Main Layout 
        {login}
        {user}
        {children}
    </div>
  )
}

export default dashboardLayout;
