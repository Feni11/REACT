// import React, { useState } from 'react'

// const State1 = () => {
//   const [text, setText] = useState('Good')

//   return(
//     <div>
//       <h1>{text}</h1>
//       <button onClick={() => setText('Afternoon')}>Click</button>
//     </div>
//   )

// }

// export default State1

// import React, { useState } from 'react'

// const State1 = () => {

//   const [no, setNo] = useState(0)  //get number

//   const plusData = () => {
//     setNo(no+1)
//   }
//   const minusData = () => {
//     setNo(no-1)
//   }
//   return (
//     <div>
//       <h1>{no}</h1>
//       <button onClick={plusData}>Plus Number</button>
//       <button onClick={minusData}>Minus Number</button>
//     </div>
//   )
// }

// export default State1


import React, { useState } from 'react'

const State1 = () => {

  const [no, setNo] = useState(0)  //get number

  const plusData = () => {
    setNo(no+1)
  }
  const minusData = (i) => {
    setNo(no-i)
  }
  return (
    <div>
      <h1>{no}</h1>
      <button onClick={plusData}>Plus Number</button>
      <button onClick={() => minusData(5)}>Minus Number</button>
    </div>
  )
}

export default State1
