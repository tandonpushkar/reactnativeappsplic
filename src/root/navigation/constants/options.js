import { fontToDp, heightToDp, widthToDp } from "../../../utils/Responsive"
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Platform } from "react-native";

/*   ---------------------------animation-----------------------*/

// const config = {
//     animation: 'spring',
//     config: {
//         stiffness: 1000,
//         damping: 50,
//         mass: 3,
//         overshootClamping: false,
//         restDisplacementThreshold: 0.01,
//         restSpeedThreshold: 0.01,
//     },
// };

// const closeConfig = {
//     animation: 'timing',
//     config: {
//         duration: 500,
//         easing: Easing.linear
//     }
// }

/*   ---------------------------animation-----------------------*/

export const tabBarOption = {
    tabStyle: {
        paddingVertical: Platform.OS == "android" ? heightToDp('1.5%') : null
    },
    labelStyle: { fontSize: fontToDp(9) },
    activeTintColor: '#AFFF00',
    inactiveTintColor: '#BFC7D8',
    style: { backgroundColor: '#202B46', height: heightToDp('10%') }
}

export const screenOption = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    // transitionSpec: {
    //     open: config,
    //     close: closeConfig
    // }
}

