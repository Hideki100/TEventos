import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/welcome'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp/Index'
import Main from '../pages/Main'
import Evento01 from '../pages/Evento01'
import Evento02 from '../pages/Evento02'
import Pagamentos from '../pages/Pagamentos'
import PagamentoPix from '../pages/Pagamentos/PagamentoPix'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
               name="Welcome"
               component={Welcome}
               options={{ headerShown: false }}
            />

            <Stack.Screen
               name="Login"
               component={Login}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="SignUp"
               component={SignUp}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Main"
               component={Main}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Evento01"
               component={Evento01}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Evento02"
               component={Evento02}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Pagamentos"
               component={Pagamentos}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="PagamentoPix"
               component={PagamentoPix}
               options={{ headerShown: false }}
            />
       
        </Stack.Navigator>
    )
}