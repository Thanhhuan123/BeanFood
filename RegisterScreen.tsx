import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";

export default function RegisterScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        if (username && password) {
            // Đăng ký thành côngf
            alert('Đăng ký thành công!');
            // Thực hiện các hành độngkhi đăng ký thành công
        } else {
            // Đăng ký thất bại???
            alert('Đăng ký thất bại. Vui lòng điền đầy đủ thông tin!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Đăng ký tài khoản</Text>

            <Image style={{width:45,height:45,marginBottom:20}} source={require('./Image/user.png')} />

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
            <View style={styles.inputContainer}>
                <FontAwesome name="key" size={24} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Xác nhận mật khẩu"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <Button title="Đăng ký" onPress={handleRegister} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    input: {
        flex: 1,
        fontSize: 16,
    },
    icon: {
        marginLeft: 10,
        marginRight: 10,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },

});
