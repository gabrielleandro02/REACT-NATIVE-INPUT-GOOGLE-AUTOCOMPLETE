import React, {Component} from 'react';
import {InputGoogleMapsComponent} from './src/components/InputGoogleMapsComponent';

export default class App extends Component {
  render() {
    const a = {
      key: 'API-GOOGLE-KEY',
      debounce: 0,
      minlength: 2,
      language: 'pt',
      placeholder: 'Search',
      titleButton: 'Clear',
    };
    return <InputGoogleMapsComponent prop={a} />;
  }
}
