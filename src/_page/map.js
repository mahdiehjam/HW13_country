import React , { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends Component {

    constructor (props){
        super(props); 
    }

    render() {
        return (
            <Map
                google={this.props.google}
                initialCenter={{lat: this.props.lat, lng: this.props.lng}}
                style={{height: "300px", width: "100%"}}
                zoom={4}
                onClick={this.onMapClicked}
            >
                <Marker onClick={this.onMarkerClick}
                    name={this.props.name}
                    position={{lat: this.props.lat, lng: this.props.lng}}/>
            </Map>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyAdj0C81rA_-Ko03ne6H63lfpvKS-vRNR4')
})(MapContainer)