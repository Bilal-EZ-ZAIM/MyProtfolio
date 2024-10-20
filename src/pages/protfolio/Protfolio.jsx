import React , {useState} from 'react'
import Title from '../../componts/title/Title'
import './protfolio.css'
import { project } from '../../data/data'
import PopUp from '../../componts/popUp/PopUp'
const Protfolio = () => {
  const [pop, setpop] = useState(false);
  const [id , setid] = useState();
  const [pods, setpods] = useState();
  const handlPop = (is)=>{
    setid(is);
    setpop(pre => !pre)
    let fnd = project.find(item => {
      return (
        item.id === is
      )
    })
    setpods(fnd)
  }
  return (
    <div className='protfolio'>
      <Title title={"Projects"} />
      <div className="contenre">


        
        {
          project?.map(item=>(
            <div className="content center-col" key={item.id}>
              <img src={item.img} alt="" />
              <div className="title">
                <h3>{item.title}</h3>
                <button className='see' onClick={()=> handlPop(item.id)}>See Morre</button>
              </div>
              
            </div>
          ))
        }
        {

          pop?<PopUp id={id} setpop={setpop} pods={pods}/>:null
        }
        

      </div>
    </div>
  )
}

export default Protfolio