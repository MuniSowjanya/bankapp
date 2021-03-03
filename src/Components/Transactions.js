import React from 'react'
import {connect} from 'react-redux'

function Transactions(props) {
    const data=props.button
    // console.log(props.data);
    const handleDelete=(id,item)=>{
         console.log(item)
  props.dispatch({type:'DELETE',payload:item})
    }
    return (
        <div>
            
               
                {
                    data.map((item,index)=>{
                        return ( <ul class="list-group"><li key={index}>{item.fun}</li>
                        <li >Balance ${item.value}</li>
                        <li><button className="btn btn-danger" onClick={()=>handleDelete(index,{item})}>Delete</button></li>
                        
</ul>
                        )
                    })
                }
  
 
        </div>
    )
}
const mapStateToProps=state=>({
    data:state.data,
    button:state.buttondata
})
export default connect(mapStateToProps)(Transactions)
