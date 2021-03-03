import React from 'react'
import {connect} from 'react-redux'
//import Transactions from './Transactions'


function Atm(props) {
  
    const  handleInc=()=>{

        props.dispatch({type:'DEBIT',payload:{"fun":"DEBIT","value":props.count}})
       
        }
        const handleDec=()=>{
          props.dispatch({type:'CREDIT',payload:{
              "fun":"CREDIT",
              "value": props.count
              }})
        
          if(props.count<=100){
              props.disabled=true
          }
        }
    return (
        <div>
            <button className="btn btn-success" onClick={handleInc}>Debit$10</button>
            <button className="btn btn-warning"onClick={handleDec} disabled={props.disabled}>Credit$10</button>
            <div>
                
            </div>
        </div>
    )
}
const mapStateToProps=state=>({
  disabled:state.isdisable,
  count:state.count
})
export default connect(mapStateToProps)(Atm)
