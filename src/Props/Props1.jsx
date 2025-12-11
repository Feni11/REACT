// const PropsEX = ({value}) => {
  // return(

  //   <div>
  //     <p>Pass Single value</p>
  //     <span>{props.value}</span>
  //   </div>

  // )

// };
// export default PropsEX;

// const PropsEX = ({value}) => {
  
//   return (
//     <div>
//       <p>Pass Object</p>
//       <p>{value.name}</p>
//       <p>{value.surname}</p>
//     </div>
//   );

// };
// export default PropsEX;

const PropsEX = ({value}) => {
  
  return (
    <div>
      <p>Pass array</p>
      {/* <p>{value[0].name}</p> */}
      <table border={1} cellSpacing={0}>
        <tr>
          <td>Name</td>
          <td>Surname</td>
        </tr>
        {
          value.map((v, index) => (
            <tr>
              <td>{v.name}</td>
              <td>{v.surname}</td>
            </tr>
          ))
        }
      </table>
    </div>
  );

};
export default PropsEX;

