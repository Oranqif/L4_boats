import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import Boat from './Boat/Boat.js';

export default function App() {
  return (
      <View style={styles.Background}>
          <ScrollView>
              <Text style={styles.Title}>GetABoat - For Sale</Text>
              <Boat
                  backgroundStyle={styles.BackgroundStyle}
                  titleStyle={styles.TitleText}
                  descStyle={styles.DescText}
                  imageStyle={styles.imageStyle}
                  name="Sea Ray 500 Sundancer"
                  desc="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                  icon_name="sailboat"
                  picture={require('./img/sea_ray.jpg')}/>
              <Boat
                  backgroundStyle={styles.BackgroundStyle}
                  titleStyle={styles.TitleText}
                  descStyle={styles.DescText}
                  imageStyle={styles.imageStyle}
                  name="Four Winns Horizon 180"
                  desc="A sporty look and refined details truly set the Horizon 180 above all others."
                  icon_name="sailboat"
                  picture={require('./img/four_winns.jpg')}/>
              <Boat
                  backgroundStyle={styles.BackgroundStyle}
                  titleStyle={styles.TitleText}
                  descStyle={styles.DescText}
                  imageStyle={styles.imageStyle}
                  name="Flipper 640 ST"
                  desc="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                  icon_name="sailboat"
                  picture={require('./img/flipper.jpg')}/>
              <Boat
                  backgroundStyle={styles.BackgroundStyle}
                  titleStyle={styles.TitleText}
                  descStyle={styles.DescText}
                  imageStyle={styles.imageStyle}
                  name="Princess V48"
                  desc="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                  icon_name="sailboat"
                  picture={require('./img/princess.jpg')}/>
              <Boat
                  backgroundStyle={styles.BackgroundStyle}
                  titleStyle={styles.TitleText}
                  descStyle={styles.DescText}
                  imageStyle={styles.imageStyle}
                  name="Bayliner 175 Bowrider"
                  desc="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                  icon_name="sailboat"
                  picture={require('./img/bayliner.jpg')}/>
              <Boat
                  backgroundStyle={styles.BackgroundStyle}
                  titleStyle={styles.TitleText}
                  descStyle={styles.DescText}
                  imageStyle={styles.imageStyle}
                  name="Fairline Targa 47"
                  desc="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                  icon_name="sailboat"
                  picture={require('./img/fairline.jpg')}/>
          </ScrollView>
          <StatusBar hidden={true} />
      </View>
  );
};

const styles = StyleSheet.create({
    Background: {
        backgroundColor: "#a0bebe",
    },
    Title: {
        color: "#c8e6e6",
        textShadowRadius: 10,
        fontSize: 26,
        fontWeight: "500",
        textAlign: "center",
        backgroundColor: "#506e6e",
        borderBottomWidth: 2,
        borderColor: "#3c5a5a",
        padding: 10,
        marginBottom: 10,
    },
    imageStyle: {
        width: "95%",
        borderWidth: 2,
        borderColor: "#506e6e"
    },
    BackgroundStyle: {
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        backgroundColor: "#e6e6e6",
        borderWidth: 2,
        borderColor: "#dcdcdc",
        paddingBottom: 10,
        paddingTop: 10,
        alignItems: "center",
    },
    TitleText:{
        fontSize: 20,
        textAlign: "center",
        color: "#c8e6e6",
        backgroundColor: "#506e6e",
        width: "101%",
        borderWidth: 2,
        borderColor: "#3c5a5a",
        padding: 10
    },
    DescText: {
        color: "#323232",
        fontSize: 14,
        fontWeight: "400",
        marginLeft: 22,
        marginRight: 22,
        marginTop: 10,
        marginBottom: 10,
    }
});
