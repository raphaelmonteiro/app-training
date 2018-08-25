import firebase from 'firebase' 
import { Alert } from 'react-native'
export const USER_LOGIN_SUCESS = 'USER_LOGIN_SUCESS'
export const USER_LOGOUT = 'USER_LOGOUT'

const userLoginSucess = user => ({
    type: USER_LOGIN_SUCESS,
    user
})

const userLogout = () => ({
    type: USER_LOGOUT,
})

export const tryLogin = (email, password) => dispatch => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(userLoginSucess(user))
            return user;
        })
        .catch(error => {
            if(error.code === 'auth/user-not-found') {
                return new Promise((resolve, reject) => {
                    Alert.alert(
                        'Usuário não encontrado',
                        'Deseja criar um cadastro com as informações inseridas?',
                        [
                            {
                                text: 'Não', 
                                onPress: () => resolve(),
                                style: 'cancel'
                            }, 
                            {
                                text: 'Sim', 
                                onPress: () => {
                                    firebase
                                        .auth()
                                        .createUserWithEmailAndPassword(email, password)
                                        .then(resolve)
                                        .catch(reject)
                                }
                            }
                        ],
                        { cancelable: false }
                    )
                })
            }
            return Promise.reject(error);
        })
}

function createUser() {
    const { mail, password } = this.state
    
}