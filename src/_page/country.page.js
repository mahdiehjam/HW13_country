import React,{Component} from 'react';
import Axios from "axios";
import world from '../world.svg';
import back from '../back.svg';
import Bootstrap from '../styles/bootstrap-grid.min.css';
import { BrowserRouter as Router, Route,Redirect,Link } from "react-router-dom";
import { withRouter } from "react-router-dom";


class Country extends Component{



   constructor(props) {
      super(props);
   }

   getCountry = () => {
   Axios.get('https://restcountries.eu/rest/v2/alpha/' + this.props.match.params.code).then(response => {
      this.setState({ ...response.data })
   })
   }

   componentDidMount() {
   this.getCountry();
   }

   componentDidUpdate() {
   this.getCountry();
   }


   goBack = () => {
      this.props.history.push('/');
   }


   render(){
      const {state} = this;
      return <>
         <nav>
            <img src={world} alt="world"/>
            <span>Country info - {state && state.name}</span>
            <button onClick={this.goBack}><img src={back} alt="back" /></button>
         </nav>
         {state ? <main className="container-fluid row">
            <div className="col-12 col-lg-4 dataCountry">
               <div className="datas">
                  <span>{state && state.name}</span>
                  <span>Native Name: {state.nativeName}</span>
                  <span>Capital : {state.capital}</span>
                  <span>Region : {state.region},{state.subregion}</span>
                  <span>Population : {state.population}</span>
                  <span>Languages : {state.languages[0].name}</span>
                  <span>TimeZone : {state.timezones}</span>
               </div>
            </div>
            <div className="col-12 col-lg-4 callCode">
               <div className="codeTitle">Calling Codes</div>
               <div className="codeState">{state.callingCodes}</div>
            </div>
            <div className="col-12 col-lg-4 flag"><img src={state.flag}/></div>
         </main> : <span>loading ...</span>}
         
         {state ? <main className="container-fluid">
         <div className="col-12 col-lg-4">
               
         </div>
         <div className="col-12 col-lg-4">
            
         </div>
         <div className="col-12 col-lg-4">
            <span>Neighbors:</span> {state.borders.map((item) => <li><Link to={`/country/${item}`}>{item}</Link></li>)}
         </div>
         </main> : <span>loading ...</span>}
      </>;
   } 
}


withRouter(Country);
export {Country}