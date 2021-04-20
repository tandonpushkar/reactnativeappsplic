import React, { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView, FlatList, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const axios = require('axios');

const Home = () => {
    const [searchValue, setsearchValue] = useState('');
    const [data, setdata] = useState([]);
    const [loader, setloader] = useState(false);
    const [Message, setMessage] = useState(false)

    const onSearch = () => {
        setloader(true);
        axios.get(`https://google-search3.p.rapidapi.com/api/v1/search/q=${searchValue}&num=100`, {
            headers: {
                'x-rapidapi-key': '30a79d49e4msh60149164f98a8a5p16accdjsn3726a274f766',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'useQueryString': true
            }
        }).then(function (response) {
            setloader(false);

            setdata(response.data.results)
        })
            .catch(function (error) {
                setloader(false);
                setMessage(true);
                console.log(error);
            })

    }


    const renderItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback>
                <View style={styles.mainCardView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginLeft: 12 }}>
                            <Text
                                style={{
                                    fontSize: 14,

                                    fontWeight: 'bold',

                                    textTransform: 'capitalize',
                                }}>
                                {item.title}
                            </Text>
                            <View
                                style={{
                                    marginTop: 4,
                                    borderWidth: 0,
                                    width: '85%',
                                }}>
                                <Text
                                    style={{

                                        fontSize: 12,
                                    }}>
                                    <TouchableOpacity onPress={() =>
                                        Linking.canOpenURL(item.link).then(supported => {
                                            if (supported) {
                                                Linking.openURL(item.link);
                                            } else {
                                                console.log("Don't know how to open URI: " + item.link);
                                            }
                                        })}>
                                        <Text style={{ color: 'blue' }}>
                                            Click on this Link
                                        </Text>
                                    </TouchableOpacity>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            height: 25,
                            borderWidth: 0,
                            width: 25,
                            marginLeft: -26,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 50,
                        }}>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    return (
        <View>
            <View>
                <TextInput placeholder={'Enter your text'} value={searchValue} onChangeText={(text) => setsearchValue(text)} />
                <Button title='Search' onPress={onSearch} />
            </View>
            <SafeAreaView>
                {

                    loader ? <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator color={'red'} size="large" />
                    </View>
                        :
                        Message ? <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text>no results found</Text>
                        </View> :
                            <FlatList
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                ListHeaderComponent={
                                    <View style={{ width: '100%', height: 8 }} />
                                }
                                ListFooterComponent={
                                    <View style={{ width: '100%', height: 28 }} />
                                }

                            />
                }

            </SafeAreaView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    mainCardView: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 15,

        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },
    subCardView: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
