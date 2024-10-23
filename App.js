import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import Boat from './Boat/Boat.js';

export default function App() {
  return (
      <View style={styles.container}>
        <ScrollView>
            <Text>GetABoat - For Sale</Text>
            <Boat name="Sea Ray 500 Sundancer" desc="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." icon_name="sailboat" picture={require('./img/sea_ray.jpg')}/>
            <Boat name="Four Winns Horizon 180" desc="A sporty look and refined details truly set the Horizon 180 above all others." icon_name="sailboat" picture={require('./img/four_winns.jpg')}/>
            <Boat name="Flipper 640 ST" desc="A modern take on the classic, traditional hardtop and perfect for a family picnic." icon_name="sailboat" picture={require('./img/flipper.jpg')}/>
            <Boat name="Princess V48" desc="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." icon_name="sailboat" picture={require('./img/princess.jpg')}/>
            <Boat name="Bayliner 175 Bowrider" desc="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." icon_name="sailboat" picture={require('./img/bayliner.jpg')}/>
            <Boat name="Fairline Targa 47" desc="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." icon_name="sailboat" picture={require('./img/fairline.jpg')}/>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ceebf0',
      color: '#8c8c8c',
      alignItems: 'left',
      justifyContent: 'left',
  },
});
