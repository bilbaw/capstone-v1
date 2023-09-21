import { RouteProp, useNavigation } from '@react-navigation/native';
import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'
import { CheckScreenNavigationprop, RootStackParamList } from '../../../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type CollectorCollectionListProps = {
    client_id: number,
    fullname: String, 
    //requiredCollectible: number
}


export default function CollectorCollectionList(props: CollectorCollectionListProps){
    const navigation = useNavigation<CheckScreenNavigationprop>(); 

    //function to navigate to AssignCollectorScreen and pass data
    const gotoAssignCollector = () => {
        navigation.navigate('AssignCollector', {otherParam1:props.client_id});
    }

    return(
        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}/>

                <View style={styles.itemText}>
                    <Text style={{color:'#363636', fontSize:hp(1.4)}}>{props.fullname}</Text>
                    <Text style={{color: '#92A0A8', fontSize: hp(1.2)}}>Php 5000</Text>                                  
                </View>

                <View style={styles.buttonMainContainer}>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.button} onPress={gotoAssignCollector}>
                            <Text style={styles.buttonLabel}>Pay</Text>
                        </Pressable>
                    </View>
                </View>    
            </View>
            
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    item:{
        flex: 1,
        backgroundColor: '#F5F7F9',
        padding: 20, 
        borderRadius: 10, 
        marginBottom: hp(2),
        marginLeft: hp(1), 
        marginRight: hp(1), 
        shadowColor: '#000', 
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2
    },
    itemLeft:{
        flex: 1,
        flexDirection:'row',
        aligntItems: 'center', 
        flexWrap:'wrap'
    },
    square:{
        flex:.5,
        width: 100,  
        height: 50,
        margin: hp(1.5), 
        backgroundColor: '#92A0A8', 
        borderRadius: 5
    }, 
    itemText: {
        flex:1, 
        maxWidth: '80%', 
        marginRight: hp(1.5), 
        justifyContent: 'center', 
        alignItems: 'flex-start',
        textAlign: 'left'
    }, 
    buttonMainContainer:{
        flex:.8, 
        width: wp(19), 
        height: hp(5.5),
        margin: hp(1.5), 
        justifyContent: 'center', 
    }, 
    buttonContainer: {
        flex:1,
        backgroundColor:'#2C85E7',
        borderRadius: 5
    }, 
    button:{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },
    buttonLabel:{
        color: '#fff', 
        fontSize: hp(1.5),
    },
}); 