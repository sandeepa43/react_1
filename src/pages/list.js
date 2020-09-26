import React, { Component } from 'react';
import Data from '../db.json'
import { Table,Button } from "reactstrap";
import Header from '../Components/Header';
export default class List extends Component{
  state={
    openModal:false,
    index:{},
    remark:''
  }
  handleApprove=(e)=>{
    e.action = "approved"
    console.log('approve',e)
  }
  handleOpenModal=(e)=>{
    
    this.setState({openModal:true,index:e})
  }
  handleReject=async(e)=>{
    this.setState({openModal:false})
    this.state.index.action = "reject";
  console.log('reject',this.state.index,this.state.remark)
  
  }
  handleRejectionFailure = () =>{
    this.state.index.action = "";
    this.setState({openModal:false})
  }
  handleInputChange=(e)=>{
    
    this.state.index.remark = e.target.value
  }
    render(){
      
      console.log(Data)
        return(
            <div style={{margin:'0px'}}>
              <Header/>
              
             <Table striped hover>
      <thead >
        <tr scope="row" style={{borderColor:'black'}}>
        <th style={{padding:'0.5em',fontSize:'1.2em'}}>Mobile</th>
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
              <div style={{cursor:'pointer'}} onClick={()=>this.handleApprove(index)}>Approve </div> |
              <div style={{cursor:'pointer'}} onClick={(e)=>this.handleOpenModal(index)}>Reject</div>
              </div>
            )}</td>
          </tr>
        ))}
       
      </tbody>
    </Table>
    {this.state.openModal?(
      <div 
      style={{ position: 'fixed', backgroundColor: 'white', top: '0',right: '0',
        bottom: '0', left: '0',zIndex: '999',opacity:'1'
      
       }}
      // style={{position:"absolute",top:'0%',background:'white',width:'40%',alignItems:'center'}}
      >
        <p onClick={this.handleRejectionFailure} style={{ cursor:'pointer', color: '#aaa',lineHeight: '50px',fontSize:' 80%', position: 'absolute', right: '0',
  textAlign: 'center', top: '0',width: '70px',textDecoration:'none'}}>Close</p>
      <form style={{padding:'20%'}}>  
      <label>Reason For Rejection?</label><br/>
        <input type="text" onChange={this.handleInputChange}/>
          <Button onClick={this.handleReject}>Done</Button><br/>
          <label>Don't Want to reject? Close the form</label><br/>
          <Button onClick={this.handleRejectionFailure}>Close</Button>
       </form>
         </div>
    ):null}
            </div>
        );
    }
}

