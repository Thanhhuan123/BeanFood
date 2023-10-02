import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons'; // Import thư viện biểu tượng FontAwesome

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === '1' && password === '1') {
            // Đăng nhập thành công
            alert('Thành công!');
        } else {
            // Đăng nhập thất bại
            alert('Đăng nhập thất bại. Vui lòng thử lại!');
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Animatable.View animation="rotate" iterationCount="infinite" duration={10000}>
                    <Image style={{ width: 100, height: 100, marginBottom: 120 }} source={require('./Image/red-beans.png')} />
                </Animatable.View>
            </View>
            <Text style={styles.header}>Nóng giòn đây!</Text>

            <View style={styles.inputContainer}>
                <FontAwesome name="user" size={24} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Tên đăng nhập"
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name="lock" size={24} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            <TouchableOpacity style={styles.btn_login} onPress={handleLogin}>
                <Text style={styles.btn_txt}>Đăng nhập</Text>
            </TouchableOpacity>

            <Text style={styles.registerText}>
                Chưa có tài khoản?{' '}
                <Text
                    style={styles.linkText}
                    onPress={() => navigation.navigate('Register')}
                >
                    Đăng ký ngay
                </Text>
            </Text>
            <View style={styles.ccc}>
                <View style={styles.line}></View>
                <Text style={styles.text}>Đăng nhập bằng</Text>
                <View style={styles.line}></View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image style={{ width: 45, height: 45, margin: 10 }} source={require('./Image/google.png')} />
                <Image style={{ width: 45, height: 45, margin: 10 }} source={require('./Image/facebook.png')} />
                <Image style={{ width: 45, height: 45, margin: 10 }} source={require('./Image/icloud.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        fontFamily: 'Futura',
        fontSize: 24,
        marginBottom: 30,
    },

    btn_login: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    btn_txt: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },

    inputContainer: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 14,
        flexDirection: 'row', // hàng ngang
        alignItems: 'center', // Căn dọc
    },

    icon: {
        marginLeft: 10,
        marginRight: 10,
    },

    input: {
        flex: 1,
        fontSize: 16,
    },

    registerText: {
        fontSize: 14,
        marginTop: 20,
    },

    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
    },

    ccc: {
        marginTop: 25,
        flexDirection: 'row',   // Căntrục ngang
        alignItems: 'center',    // Căn dọc
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
    },

    text: {
        marginHorizontal: 10, // Khoảng cách giữa văn bản và đường thẳng
    },
});
