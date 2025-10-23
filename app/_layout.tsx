import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useState } from 'react';
import eachProducts from './data/products.json';
// import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

export const unstable_settings = {
  anchor: '(tabs)',
};

export interface ProductType {
  id: number;
  imageUrl: string;
  price: number;
  name: string;
  category: string;
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [products, setProducts] = useState<ProductType[]>(eachProducts);

  const Tab = createBottomTabNavigator();

  return (

    // <FlatList
    //   style={{ flexDirection: 'row' }}
    //   horizontal={true}
    //   data={products}
    //   renderItem={({ item }) =>
    //     <View style={{
    //       backgroundColor: 'white',
    //       height: 260,
    //       width: 180,
    //       borderRadius: 20,
    //       alignItems: 'center',
    //       elevation: 2,
    //       padding: 10,
    //     }}>
    //       {/* product card */}
    //       <Image source={{ uri: item.imageUrl }} style={{
    //         height: 120,
    //         width: wp("32%"),
    //         marginTop: 4,
    //       }}></Image>
    //       <Text style={{
    //         textAlign: 'center',
    //         marginTop: 2,
    //       }}>{ }</Text>
    //       <Text style={{ fontWeight: 'bold', position: 'absolute', top: 177, right: 84 }}>AED {item.price}</Text>
    //       <TouchableOpacity style={{ height: 25, backgroundColor: '#5f98f1', width: 130, position: 'absolute', top: 205, borderRadius: 5 }}><Text style={{ color: 'white', fontWeight: 'bold', position: 'relative', left: 22, top: 2 }} >Select Option</Text></TouchableOpacity>
    //     </View>
    //   }
    // ></FlatList>


    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //   <Stack>
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //     <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
    //   </Stack>
    //   <StatusBar style="auto" />
    // </ThemeProvider>

    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
