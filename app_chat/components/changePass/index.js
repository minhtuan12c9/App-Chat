import { View } from 'react-native'
import React, {useState} from 'react'
import Dialog from "react-native-dialog";
import InputDialog from '../inputDialog';
import userModel from '../../model/userModel';

const ChangePassForm = ({ visible, setVisible }) => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const handleCancel = () => {
        setVisible(false)
    }
    const handleChange = () => {
        userModel.changePass(oldPassword, newPassword, confirmPassword)
        setVisible(false)
        setOldPassword('')
        setNewPassword('')
        setConfirmPassword('')
        
    }
    return (
        <View>
            <Dialog.Container visible={visible}>
                <Dialog.Title>Onii-chan muốn đổi mật khẩu à?</Dialog.Title>
                <Dialog.Description>
                    Nhập thông tin đi Onii-chan!
                </Dialog.Description>
                <View>
                    <InputDialog name={'Mật khẩu cũ'} value={oldPassword} onChange={(value) => setOldPassword(value)} />
                </View>
                <View>
                    <InputDialog name={'Mật khẩu mới'} value={newPassword} onChange={(value) => setNewPassword(value)} />
                </View>
                <View>
                    <InputDialog name={'Nhập lại mật khẩu'} value={confirmPassword} onChange={(value) => setConfirmPassword(value)} />
                </View>
                <Dialog.Button onPress={handleCancel} label="Yesn't" />
                <Dialog.Button onPress={handleChange} label="Yes" />
            </Dialog.Container>
        </View>
    )
}

export default ChangePassForm