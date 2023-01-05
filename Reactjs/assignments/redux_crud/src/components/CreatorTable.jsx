import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteCreatorAction } from '../stores/Action';
import Creator from './Creator';

 class creatorTable extends Component {
  render() {
    const {creators}=this.props;

   
    return (
      <div>
         <table className="table">
            <thead>
                <tr>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>email</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {creators.map((Creator,i)=>
                <tr key={i}>
                   <td>{Creator.fname}</td>
                   <td>{Creator.lname}</td>
                   <td>{Creator.email}</td>

                   <td><button type='button' className='btn btn-info'>
                    editcreator
                    </button></td>
                    <td><button className='btn btn-danger' type='button' onClick={()=>{this.props.deletecreator(Creator)}}>
                        deletecreator
                        </button></td>
                </tr>
                )}
            </tbody>
         </table>
      </div>
    )
  }
}

function mapstateToProps(state){
    return {
        creators:state.creators
    }
}
function mapDispatchToProps(dispatch){
    return{
        deletecreator:(Creator)=>dispatch(deleteCreatorAction(Creator))
    }
}
export default connect(mapstateToProps,mapDispatchToProps)(creatorTable)