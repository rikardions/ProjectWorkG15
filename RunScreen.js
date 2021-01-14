import React,{Component} from 'react';
import {View,Image,Button} from 'react-native';
import MapView,{Marker, Circle} from 'react-native-maps';

const latitudeDelta = 0.16
const longitudeDelta = 0.17
export default class RunScreen extends Component{
  state={
    region:{
      latitudeDelta,
      longitudeDelta,
      latitude: 57.9719434,
      longitude: 25.145185,
    },
    marginBottom:1
  }
  componentDidMount(){
    this.handleUserLocation();
    setTimeout(()=>this.setState({marginBottom:0}),100)
  }

handleUserLocation(){
  navigator.geolocation.getCurrentPosition(pos=>{
    this.map.animateToRegion({
      ...this.state.initialRegion,
      latitude: pos.coords.latitude,
      longitude:pos.coords.longitude
    })
    this.setState({
      ...this.state.initialRegion,
      latitude:pos.coords.latitude,
      longitude:pos.coords.longitude
    })
  })
}

  onChangeValue = region =>{
    this.setState({
      region
    })
  }

  render(){
    console.disableYellowBox = true;
    const { route } = this.props;
    const {l1, l2} = route.params;
    const { navigation } = this.props;
    return(
      <View style={{flex:1}}>
      <MapView
      style={{flex:1, marginBottom: this.state.marginBottom}}
      showsUserLocation={true}
      showsMyLocationButton= {true}
      initialRegion={this.state.region}
      onRegionChange={this.onChangeValue}
      ref = {ref=>this.map=ref}>
      
      <MapView.Marker
          title="Location"
          coordinate={{
            latitude: l1,
            longitude: l2
            }}         
          />
      <Circle center = {{latitude: l1,longitude: l2}}
                    radius = {2500}
                    strokeWidth = { 4 }
                    strokeColor = { '#F01' }/>  
      </MapView>
       <View style={{width: 500,alignSelf: 'center'}}>
    <Button title="StopWatch & Timer" onPress={()=>{
          navigation.navigate("StopWatch",{
            l1:this.state.region.latitude,
            l2:this.state.region.longitude,
          });
        }}/>
        </View>
      </View>
    )
  }
}