import React from 'react'
import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput,
    Picker,
    Slider,
    Button,
    ScrollView,
    KeyboardAvoidingView } from 'react-native'

import { connect } from 'react-redux'
import { setField, saveSerie } from '../actions'

import FormRow from '../components/FormRow'


const SeriesFormPage = ({ serieForm, setField, saveSerie }) => (
    <KeyboardAvoidingView 
        behavior="padding" 
        enabled 
        keyboardVerticalOffset={200}
    >
        <ScrollView>
            <FormRow first>
                <TextInput 
                    style={styles.input}
                    placeholder="Título"
                    value={serieForm.title}
                    onChangeText={value => setField('title', value)}
                />
            </FormRow>
            <FormRow>
                <TextInput 
                    style={styles.input}
                    placeholder="URL da imagem"
                    value={serieForm.img}
                    onChangeText={value => setField('img', value)}
                />
            </FormRow>
            <FormRow>
                <Picker
                    selectedValue={serieForm.gender}
                    onValueChange={(itemValue) => setField('gender', itemValue)}
                >
                    <Picker.Item label="Policial" value="police" />
                    <Picker.Item label="Comedia" value="comedy" />
                    <Picker.Item label="Terror" value="horror" />
                </Picker>
            </FormRow>
            <FormRow>
                <View style={styles.sameRow}>
                    <Text>Nota:</Text>
                    <Text>{serieForm.rate}</Text>
                </View>
                <Slider 
                    onValueChange={value => setField('rate', value)}
                    value={serieForm.rate}
                    minimumValue={0}
                    maximumValue={100}
                    step={5}
                />
            </FormRow>
            <FormRow>
                <TextInput 
                    style={styles.input}
                    placeholder="Descrição"
                    value={serieForm.description}
                    onChangeText={value => setField('description', value)}
                    multiline={true}
                    numberOfLines={4}
                />
            </FormRow>
            <Button 
                title="Salvar"
                onPress={() => saveSerie(serieForm)}
            />
        </ScrollView>
    </KeyboardAvoidingView>
)

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    },
    sameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    }
})

function mapStateToProps(state) {
    return {
        serieForm: state.serieForm
    }
}

const mapDispatchToProps = {
    setField,
    saveSerie
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesFormPage);