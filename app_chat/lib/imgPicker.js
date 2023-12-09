import * as ImagePicker from "expo-image-picker";
import { userModel } from "../model";
import { Platform } from "react-native";
import * as MediaLibrary from 'expo-media-library';

const imgPicker = async (setPhoto, setLoading) => {
    try {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            // const asset = await MediaLibrary.getAssetAsync(result.assets[0].localUri);
            // const response = await fetch(asset.uri);
            // const blob = await response.blob();
            // const uploadUri = Platform.OS == 'ios' ? asset.uri.replace('file://', '') : asset.uri;
            // let filename = uploadUri?.substring(uploadUri.lastIndexOf('/') + 1);

            // // custom name
            // const extension = filename.split('.').pop();
            // const name = filename.split('.').slice(0, -1).join('.');
            // let namefull = name + Date.now() + '.' + extension;
            // userModel.uploadImage({ namefull, blob });

            const uri = result.assets[0].uri;
            const response = await fetch(uri);
            const blob = await response.blob();
            const uploadUri = Platform.OS == 'ios' ? uri.replace('file://', '') : uri;
            let filename = uploadUri?.substring(uploadUri.lastIndexOf('/') + 1);

            // custom name
            const extension = filename.split('.').pop();
            const name = filename.split('.').slice(0, -1).join('.');
            let namefull = name + Date.now() + '.' + extension;

            userModel.uploadImage(namefull, blob, setPhoto, setLoading);
        }
    } catch (error) {
        console.error(error);
    }
};

export default imgPicker;
