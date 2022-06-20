import ListComp from "../components/ListComp"

function Contatct() {
  const list = [1,2,3]
  return (
    <div>
      <h1>Contatct</h1>
      <ul>
        {list.map((item, index) => (<ListComp item={item} idx={ index}></ListComp>))}
       
      </ul>
    </div>
  )
}

export default Contatct
