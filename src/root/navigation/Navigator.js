import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { App } from './Routes';

const Navigator = () => {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>

    );
}
export default Navigator;
