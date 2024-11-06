import { Text, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({backgroundStyle,titleStyle,descStyle,imageStyle,name,desc,icon_name,picture}) => {
    return (
        <View style={backgroundStyle}>
            <Icon style={titleStyle} name={icon_name} size={20}> {name} </Icon>
            <Text style={descStyle}>{desc}</Text>
            <Image style={imageStyle} source={picture}/>
        </View>
    );
};

export default Boat;
