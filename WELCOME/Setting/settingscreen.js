import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Switch,
    Image,
    ScrollView,
  } from 'react-native';
  
  const Settingscreen = () => {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./IMG_4105.jpg')} style={styles.profilePic} />
          <Text style={styles.headerTitle}>Settings</Text>
        </View>
        <View style={styles.settingItem}>
          <Image style={styles.icon} source={require('./heart.png')} />
          <Text style={styles.greenSettingText}>Account</Text>
        </View>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Change Password</Text>
        </TouchableOpacity>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Privacy</Text>
        </View>
        <View style={styles.settingItem}>
          <Image style={styles.icon} source={require('./notification.png')} />
          <Text style={styles.greenSettingText}>Notifications</Text>
        </View>
        <View style={styles.switchItem}>
          <Text style={styles.settingText}>Notification</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            ios_backgroundColor="#3e3e3e"
          />
        </View>
        <View style={styles.switchItem}>
          <Text style={styles.settingText}>Updates</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            ios_backgroundColor="#3e3e3e"
          />
        </View>
        <View style={styles.settingItem}>
          <Image style={styles.icon} source={require('./other.png')} />
          <Text style={styles.greenSettingText}>Others</Text>
        </View>
        <View style={styles.switchItem}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            ios_backgroundColor="#3e3e3e"
          />
        </View>
        <TouchableOpacity style={styles.settingItemOther}>
          <Text style={styles.settingText}>Language</Text>
          <Text style={styles.settingOption}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItemOther}>
          <Text style={styles.settingText}>Region</Text>
          <Text style={styles.settingOption}>Pakistan</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      padding: 20,
    },
    profilePic: {
      width: 50,
      height: 50,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: '#23C13E',
    },
    headerTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#23C13E',
    },
    settingItem: {
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    settingItemOther: {
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    switchItem: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    settingText: {
      fontSize: 18,
      color: 'black',
    },
    greenSettingText: {
      fontSize: 18,
      color: '#23C13E',
      fontWeight: 'bold',
    },
    settingOption: {
      fontSize: 18,
      color: 'grey',
    },
    icon: {
      width: 25,
      height: 25,
      marginRight: 15,
    },
  });
  
  export default Settingscreen;