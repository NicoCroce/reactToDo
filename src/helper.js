'use strict';
import React from 'react';

(() => {
    let UiClass = (obj) => {
        let response = ' ';
        for (let key in obj) {
            obj[key] ? response += key + ' ' : response;
        }
        return response;
    }

    React.UI = {
        class: UiClass
    }
})();