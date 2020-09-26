import React, { Component } from 'react';
import Data from '../db.json'
import { Table } from "reactstrap";
export default class List extends Component{
  state={
    openModal:false
  }
  handleApprove=(e)=>{
    console.log('approve',e)
  }
  handleOpenModal=(e)=>{
    
  }
  handleReject=async(e)=>{
   this.setState({openModal:true})
    console.log('reject',e)
  }
    render(){
      console.log(Data)
        return(
            <div>
             <Table>
      <thead>
        <tr>
        <th>Mobile</th>
          <th>id</th>
          <th>earning</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((index)=>(
          <tr>
            <td>{index.mobile}</td>
            <td>{index.id}</td>
            <td>{index.earning}</td>
            {console.log(index.action)}
            <td>{index.action !=='' ? index.action:(
              <div style={{display:"flex",flexDirection:'row'}}>
              <div onClick={()=>this.handleApprove(index)}>Approve </div> |
              <div onClick={(e)=>this.handleReject(index)}>Reject</div>
              </div>
            )}</td>
          </tr>
        ))}
       
      </tbody>
    </Table>
    {this.state.openModal?(
      <div>
       Reason for rejection?
       <form>
         <input/>
         <submit onClick={()=>this.setState({openModal:false})}>Done</submit>
       </form>
        </div>
    ):null}
            </div>
        );
    }
}

