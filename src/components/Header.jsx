import React from 'react'

const Header = (props) => {

   
  console.log(props);

  return (
    <header style={{
        backgroundColor:props.bgColor
    }}>
        <div className='container'>
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}

export default Header