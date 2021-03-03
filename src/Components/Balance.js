import React from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'

function Balance(props) {
    let history = useHistory();
    const handleout=()=>{
       
    history.push("/");
    }
    return (
        <div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
             <h2>{props.user.email}</h2>
                <button className="btn btn-info" onClick={handleout}>Logout</button>
            </div>
         <h1>{props.count}</h1>   
        </div>
    )
}
const mapStateToProps=state=>({
    count:state.count,
    user:state.user,
    islogged:state.isLoggedin
})
export default connect(mapStateToProps)(Balance)
