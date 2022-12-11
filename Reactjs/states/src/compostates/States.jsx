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
           
            
            <ul>{this.state.users.map((value)=>{
                return <li>{value}</li>
            })}</ul>
            <ul>
                {Object.values(this.state.persons).map((val) => {
                    return <li>{val}</li>
                })}
                {/* <li>{this.state.person.fname}</li>
                <li>{this.state.person.lname}</li>
                <li>{this.state.person.email}</li> */}
            </ul>


        </>
    }
}