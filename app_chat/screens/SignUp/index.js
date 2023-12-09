import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { IMAGES } from '../../contains'
import { InputStyle, Loading } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../navigation/AuthProvider'
import { showNotice } from '../../lib'

const SignUpScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { user, register, loading } = useContext(AuthContext)

  if (loading){
    return <Loading/>;
  }

  const goLogin = () => {
    navigation.goBack();
  };

  const signUp = () => {
    if (password===confirmPassword){
      register(email,password)
    }else{
      showNotice("mật khẩu sai kìa Onii-chan",true)
    }
  }

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      enableOnAndroid={true}
      extraScrollHeight={20}
    >
      <View style={styles.header}>
        <View style={styles.boxImage}>
          <Image style={[styles.imgBackground, styles.imgBackgroundHeader]} source={IMAGES.headerLogin} />
        </View>
        <View style={styles.boxIcon}>
          <Image source={IMAGES.iconLogin} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Đăng ký đi nào Onii-chan</Text>
          <View style={styles.formInput}>
            <InputStyle name={'Email'} value={email} onChange={(value) => setEmail(value)} />
          </View>
          <View style={styles.formInput}>
            <InputStyle name={'Password'} value={password} onChange={(value) => setPassword(value)} />
          </View>
          <View style={styles.formInput}>
            <InputStyle name={'ConfirmPassword'} value={confirmPassword} onChange={(value) => setConfirmPassword(value)} />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.boxImage}>
          <Image style={[styles.imgBackground, styles.imgBackgroundFooter]} source={IMAGES.footerLogin} />
        </View>
        <Text onPress={goLogin} style={styles.register}>Go Back !
          <Text
            style={styles.registerClick}
          > Login</Text>
        </Text>
        <TouchableOpacity onPress={signUp} style={styles.footerSubmit}>
          <Text style={styles.footerSubmitText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignUpScreen;
