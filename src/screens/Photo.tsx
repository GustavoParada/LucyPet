import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert,
    ImageSourcePropType
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

export interface Props {
    image: object;
    comment: string;
}
export interface State {
    user: {
        email: string,
        name: string
    },
    posts: {
        isUploading: boolean
    }
}



const PhotoScreen: React.FC<Props> = (props) => {

    const noUser = 'Please, log in to proceed'

    const [image, setImage] = React.useState(
        props.image
    );

    const [comment, setComment] = React.useState(
        props.comment
    );

    const [, setPost] = React.useState({
        id: 0,
        nickname: "",
        email: "",
        image: {},
        comments: [{
            nickname: "",
            comment: ""
        }]
    });

    const state = useSelector((state: State) => {
        return {
            email: state.user.email,
            name: state.user.name,
            loading: state.posts.isUploading
        }
    })

    const pickImage = () => {

        if (!state.name) {
            Alert.alert('Error!', noUser)
            return
        }

        ImagePicker.launchCamera({
            title: 'Escolha a imagem',
            maxWidth: 800,
            maxHeight: 600
        }, res => {
            if (!res.didCancel) {
                setImage({  uri: res.uri, base64: res.data } )
            }
        })
    }

    const save = async () => {
        if (!state.name) {
            Alert.alert('Error!', noUser)
            return
        }

        setPost({
            id: Math.random(),
            nickname: state.name,
            email: state.email,
            image: props.image,
            comments: [{
                nickname: state.name,
                comment: props.comment
            }]
        })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Compartilhe uma imagem</Text>
                <View style={styles.imageContainer}>
                    <Image source={props.image} style={styles.image} />
                </View>
                <TouchableOpacity onPress={pickImage} style={styles.buttom}>
                    <Text style={styles.buttomText}>Escolha a foto</Text>
                </TouchableOpacity>
                <TextInput placeholder='Algum comentario na foto?'
                    editable={!!state.name}
                    style={styles.input} value={props.comment}
                    onChangeText={comment => setComment( comment)} />
                <TouchableOpacity onPress={save}
                    style={[styles.buttom, state.loading ? styles.buttomDisabled : null]}
                    disabled={state.loading}>
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#DDD',
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    buttomText: {
        fontSize: 20,
        width: '90%'
    },
    input: {
        marginTop: 20,
        width: '90%'
    },
    buttomDisabled: {
        backgroundColor: "#AAA"
    }

})