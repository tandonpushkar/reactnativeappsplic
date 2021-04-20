import Toast from 'react-native-toast-message';
import React from 'react';
import {successLog} from './fireLog';
import {View} from 'react-native';
import {widthToDp} from './Responsive';
import {colors} from '../styles';

export const ifNotValid = (value) =>
    value == undefined || value == null;

export const ifValid = (value) =>
    value != undefined && value != null;


export const ifValidNLenZ = (value) =>
    value != undefined && value != null && value.length === 0;

export const ifGreaterArray = (value) =>
    value != undefined && value != null && value.length > 0;

export const ifEmpty = (value) =>
    value != undefined && value != null && value == '';

export const ifNotEmpty = (value) =>
    value != undefined && value != null && value != '';

export const ifNValidObj = (value) =>
    value == undefined || value == null ? {} : value;

const IsEmpty = value =>
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);

export default IsEmpty;


//show toast message
export const showToastMsg = (text1 = '', text2 = '', type = 'error') => {
    try {
        Toast && Toast.show({
            type: type,
            text1: ifValid(text1) ? text1 : '',
            text2: ifValid(text2) ? text2 : '',
        });
    } catch (e) {
        console.log(e);
    }
};


export const calculateDistance = (dlatitude, dlongitude, mlatitude, mlongitude) => {
    // console.log('$$$calculateDistance', dlatitude, dlongitude, mlatitude, mlongitude);
    var latitude = dlatitude ? dlatitude : mlatitude;
    var lang = dlongitude ? dlongitude : mlongitude;
    var radlat1 = Math.PI * mlatitude / 180;
    var radlat2 = Math.PI * latitude / 180;
    var theta = mlongitude - lang;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
        dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    return (dist = dist * 1.609344).toFixed(2);
};


export const sortArrayAsc = (array, key) => {
    if (array.length) {
        return array.sort(function (a, b) {
            return b.distance > a.distance ? -1
                : b.distance < a.distance ? 1
                    : 0;
        });
    } else {
        return [];
    }
};

export const getLineView = () => <View style={{height: widthToDp(1.4), backgroundColor: colors.background}}/>


export const getNumberOfQuantityItems = (quantity) => {
    let output = [];
    for (let i = 1; i <= quantity; i++) {
        output.push({label: i.toString(), value: i.toString()});
    }
    return output;
};

export const generateKey = (pre, type = '2') => {
    return `${pre}_${new Date().getTime()}${type}`;
};
