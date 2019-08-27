import React,{Component} from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

class Input extends Component {

    state = {
        name: '',
        suggest : []
    }

    changeHandler = (event) => {
        const {value,name} = event.target;
        this.setState({[name] : value,suggest: []});
        if (value.length > 2){
            Axios.get('https://restcountries.eu/rest/v2/name/' + value).then(response=>{
                this.setState({suggest: response.data})
            })
        }

    }

    gotoCountry = countryCode => () =>{
        this.props.history.push('/country/' + countryCode);
    }


   render() {
    return<div style={{display:'flex',position:'relative'}}>
        <input  type="text" autoComplete="off" value={this.state.name} onChange={this.changeHandler} name="name" placeholder="country" className="input"/>
        <button>Go</button>
        {(this.state.suggest.length > 0) && <ul className="suggest">
            <hr/>
            {this.state.suggest.map(country =><li key={country.alpha2Code} onClick={this.gotoCountry(country.alpha2Code)}>{country.name} <img src={country.flag}/></li>)}
        </ul>}
    </div>
   } 

}


const inputWithRouter = withRouter(Input);
export {inputWithRouter as Input}