const Result = ({value}) => {

  
  function total(val)
  {
    let Total = Number(val.maths) + Number(val.sci) + Number(val.eng) + Number(val.ss)
    return Total
  }

  function per(p)
  {
      let sum = (Number(p.maths) + Number(p.sci) + Number(p.eng) + Number(p.ss)) * 100
      let per = sum / 200
      return per
  }

  function max(m)
  {
    let max = 0
    if(max < m.maths)
    {
      max = m.maths
    }
    if(max < m.sci)
    {
      max = m.sci
    }
    if(max < m.eng)
    {
      max = m.eng
    }
    if(max < m.ss)
    {
      max = m.ss
    }
    return max
  }

  function min(mi)
  {
    let min = 0
    if(min < mi.maths)
    {
      min = mi.maths
    }
    if(min > mi.sci)
    {
      min = mi.sci
    }
    if(min > mi.eng)
    {
      min = mi.eng
    }
    if(min > mi.ss)
    {
      min = mi.ss
    }
    return min
  }

  return (
    <div>
      <h1>Student Result</h1>
      <table border={1} cellSpacing={0}>
        <tr>
          <td>Name</td>
          <td>Maths</td>
          <td>Science</td>
          <td>English</td>
          <td>S.S</td>
          <td>Total</td>
          <td>Percantage</td>
          <td>Maximum</td>
          <td>Minimum</td>
        </tr>
        {
          value.map((v, index) => (
            <tr>
              <td>{v.name}</td>
              <td>{v.maths}</td>
              <td>{v.sci}</td>
              <td>{v.eng}</td>
              <td>{v.ss}</td>
              <td>{total(v)}</td>
              <td>{per(v)}</td>
              <td>{max(v)}</td>
              <td>{min(v)}</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
};
export default Result;
