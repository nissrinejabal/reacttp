import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
export default class Datatable extends Component {
  constructor(props){
    super(props)
   
  }
  render() {
    return (
      <div className="table-responsive ">
    

      <table className="bg-success " id="myTable" >
        <thead>
          <tr className="table-striped">
          <th className="pr-5 pb-2 pt-2 pl-5">Nom</th> 
              <th className="pr-5 pb-2 pt-2 pl-5"> gender</th>
              <th className="pr-5 pb-2 pt-2 pl-5 ">date.de.naissance</th>
              <th className="pr-5 pb-2 pt-2 pl-5">email</th>
              <th className="pr-5 pb-2 pt-2 pl-5">news</th>

              <th colSpan="3"><em className="fa fa-cog" ></em></th>
    
    
          </tr>
        </thead>
        <tbody>
        {this.props.data.map(row => (
                <tr key={row._id} className="table-light">
                  <td  className="pr-5 pb-2 pl-2 pt-4">{row.username}</td>
                  <td className="pr-5 pb-2 pl-2 pt-4">{row.gender}</td>
                  <td className="pr-5 pb-2 pl-2 pt-4">{moment(row.dob).format('MMM-DD-YYYY')}</td>
                  <td className="pr-5 pb-2 pl-2 pt-4">{row.email}</td>
    <td className="pr-5 pb-2 pl-2 pt-4"><input type="checkbox"   disabled 
    checked={row.news}/>
</td>

                  <td className="pr-5 pb-2 pt-4"><Link to={`/edit/${row._id}`}  className="btn btn-success"><em className=" fas fa-edit"></em></Link></td>
              <td className="pr-5 pb-2 pt-4"><a className="btn btn-danger"><em className="fa fa-trash" onClick={() => this.props.deleteUser(row._id)}></em></a></td>
              <td className="pr-5 pb-2 pt-4"><Link to={`/info/${row._id}`}
          className="btn btn-info"><em className=" fas fa-info-circle"></em></Link></td>
    
    
    
                </tr>
                ))  }
         
       
     
        </tbody>
      </table>
    </div>
    
    )
  }
}
