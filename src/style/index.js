import {StyleSheet} from 'react-native';
import COLORS from '../consts/color';

const styles = StyleSheet.create({
    footer: {
      position: 'absolute',
      bottom:0,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingBottom: 0,
      backgroundColor: COLORS.dark,
    },
    inputContainer: {
      height: 50,
      paddingHorizontal: 20,
      elevation: 40,
      backgroundColor: COLORS.white,
      flex: 1,
      marginVertical: 20,
      marginRight: 20,
      borderRadius: 30,
    },
    iconContainer: {
      height: 50,
      width: 50,
      backgroundColor: COLORS.primary,
      elevation: 40,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    listItem: {
      padding: 15,
      borderWidth:2,
      backgroundColor: COLORS.dark,
      borderColor:COLORS.primary,
      flexDirection: 'row',
      elevation: 12,
      borderRadius: 7,
      marginVertical: 10,
    },
    actionIcon: {
      height: 30,
      width: 30,
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:COLORS.primary,
      marginLeft: 7,
      borderRadius: 5,
    },
    header: {
      padding: 20,
      flexDirection: 'row',
      
    },
  });

  export default styles;
