import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Ionicons} from '@expo/vector-icons'; 
import ResellerSoldItems from "./ResellerSoldItems";
import MyCollectors from "./MyCollectors";
import SendCollectors from "./SendCollectors";


const Tab = createBottomTabNavigator()

export function ResellerTabNavigator() {
  return (
        <Tab.Navigator screenOptions={{headerShown:true, headerTitleAlign: 'center'}}>
           <Tab.Screen name='ItemsSold' component={ResellerSoldItems} options={{headerTitle: 'Sold Items',title: 'Items Sold',  tabBarInactiveBackgroundColor: '#0A1C34', tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="clipboard" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='MyCollector' component={MyCollectors} options={{headerTitle: 'My Collectors',title: 'My Collectors',  tabBarInactiveBackgroundColor: '#0A1C34', tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="people" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='SendCollector' component={SendCollectors} options={{headerTitle: 'Send Collectors',title: 'Send Collectors',  tabBarInactiveBackgroundColor: '#0A1C34', tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="send" color='#fff' size={20}></Ionicons>)}}/>          
        </Tab.Navigator>
   )
}