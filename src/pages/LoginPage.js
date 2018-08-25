import React from 'react'
import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    Button, 
    ActivityIndicator,
    Alert  
} from 'react-native'
import FormRow from '../components/FormRow'
import firebase from 'firebase'

import { tryLogin } from '../actions'
import { connect } from 'react-redux'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    componentDidMount() {
        var config = {
            apiKey: "AIzaSyBZH9KPQiqBrqYrOE-ECCXfXZPp_I7GsNM",
            authDomain: "series-1b1de.firebaseapp.com",
            databaseURL: "https://series-1b1de.firebaseio.com",
            projectId: "series-1b1de",
            storageBucket: "series-1b1de.appspot.com",
            messagingSenderId: "904164427111"
        };
        firebase.initializeApp(config);
    }

    onChangeHandler(field, value) {
        this.setState({ [field]: value})
    }

    tryLogin() {
        this.setState({isLoading: true, message: ''})
        const {mail, password} = this.state
        this.props.tryLogin(mail, password)
            .then(user =>{
                if(user) 
                    return this.props.navigation.replace('Main');

                this.setState({
                    isLoading: false,
                    message: ''
                })    
            })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    message: this.getMessageByErrorCode(error.code)
                })
            })
    }

    getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                console.log('wrong-password')
                return 'Senha incorreta';
            case 'auth/user-not-found':
                console.log('user-not-found')
                return 'Usuário não encontrado';
            default: 
                return 'Erro desconhecido';
        }
    }

    renderButton() {
        const { isLoading } = this.state
        return isLoading ? <ActivityIndicator /> : (<Button title="Entrar" onPress={() => this.tryLogin()} />)
    }

    renderMessage() {
        const { message } = this.state
        return message ? (<View><Text>{message}</Text></View>) : null
    }

    render () {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput style={styles.input}
                        placeholder="email@dominio.com.br"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput style={styles.input}
                        placeholder="********"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormRow>
                { this.renderButton() }
                { this.renderMessage() }
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
})

export default connect(
    null, 
    { tryLogin } || { actionCreator }
)(LoginPage)