import { Component } from "react";

export default class States extends Component{
    constructor(){
        super()
        this.state={
            movie:"pushpa",
            persons:{
               hero: "alluarjun",
               heroine:"rashmika",
               villan:"sunil",
               dialog:"brand"

            },
            users:["sukumar","aravind","saikumar"]

        }
    }
    render(){
        return <>
          <h2>TFI 2021 blockbuster movie {this.state.movie}</h2> <hr />
           
            
            <ul>{this.state.users.map((value,i)=>{
                return <li key={i} >{value}</li>
            })}</ul>
            <hr />
            <ul>
                {Object.values(this.state.persons).map((val,i) => {
                    return <li key={i} >{val}</li>
                })}
                {/* <li>{this.state.person.fname}</li>
                <li>{this.state.person.lname}</li>
                <li>{this.state.person.email}</li> */}
            </ul>


        </>
    }
}