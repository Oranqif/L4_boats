import { Text, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({name,desc,icon_name,picture}) => {
    return (
        <View>
            <Text></Text>
            <Icon name={icon_name} size={20}> {name} </Icon>
            <Text>{desc}</Text>
            <Image source={picture} style={{width:400,height:300}}/>
        </View>
    );
};

export default Boat;
