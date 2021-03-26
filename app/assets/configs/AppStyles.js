import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppColors from './AppColors';


export default StyleSheet.create({

    // App styles
    container: {
        backgroundColor: 'lightblue',
    },
    
    // AppScreen styles
    screen:{
        flex:1,
        // marginTop: Constants.statusBarHeight,
    },
    
    // HomeScreen styles
    outerContainer:{
        flex:1,
        // backgroundColor:AppColors.otherColor,
        backgroundColor:"red",
        padding: 25, // for SafeAreaView check OS in AppScreen and pad there for iOS
    },
    homeContainer: {
        backgroundColor: AppColors.otherColor,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
    },
    profileContainer:{
        marginTop: 100,
    },
    linksContainer:{
        marginVertical:75,
        backgroundColor:AppColors.otherColorLite,
        height:150,
        justifyContent:"space-around",
        paddingLeft: 10,
    },
    
    // WelcomeScreen styles
    welcomeBackground: {
        flex: 1,
    },
    welcomeContainer: {
        // backgroundColor: 'red',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
    },
    buttonContainer:{
        // backgroundColor: 'red',
        marginTop: 350,
        marginEnd: 20,
        justifyContent:'space-between',
        height: 150,
        width: '50%',
        alignSelf: 'flex-end',
    },
    
    //LoginScreen
    loginContainer:{
        flex:1,
        backgroundColor:AppColors.otherColor,
        padding: 25, // for SafeAreaView check OS in AppScreen and pad there for iOS
    },
    // welcomeContainer:{
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: 50,
    // },
    textInputContainer:{
        marginTop: 50,
        marginBottom: 30,
    },

    //RegisterScreen


    // AppListItem styles
    listPanel:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    pic:{
        height: 75,
        width: 75,
        borderRadius: 35,
    },
    textPanel:{
        flex: 1,
        // flexDirection: "column",
        backgroundColor: AppColors.otherColor2,
        borderRadius: 10,
        marginLeft: 15,
        padding: 10,
    },
    textTitle:{
        fontWeight:"bold",
    },
    textSubtitle:{
        fontSize: 14,
    },
    
    // AppTextInput styles
    inputContainer:{
        backgroundColor: "lightgrey",
        flexDirection: "row",
        borderRadius: 25,
        padding: 10,
        marginVertical: 10,
        width: '100%',
    },
    textInput:{
        fontSize: 20,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir-Roman',
        marginLeft: 10,
        flex: 1,
    },

    // AppButton styles
    button:{
        backgroundColor: AppColors.secondaryColor,
        borderRadius: 20,
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: AppColors.white,
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});