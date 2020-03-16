import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Button,
} from 'react-native';
import {GoogleAutoComplete} from 'react-native-google-autocomplete';
import LocationItem from './LocationItem';

const InputGoogleMapsComponent = ({prop}) => {
  return (
    <View style={styles.container}>
      <GoogleAutoComplete
        apiKey={prop.key}
        debounce={prop.debounce}
        minLength={prop.minLength}
        language={prop.language}
        renderDescription={row => row.description}>
        {({
          handleTextChange,
          locationResults,
          fetchDetails,
          isSearching,
          inputValue,
          clearSearch,
        }) => (
          <React.Fragment>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder={prop.placeholder}
                style={styles.textInput}
                onChangeText={handleTextChange}
                value={inputValue}
              />
              <Button title={prop.titleButton} onPress={clearSearch} />
            </View>
            {isSearching && <ActivityIndicator size="large" color="red" />}
            <ScrollView>
              {locationResults.map(el => (
                <LocationItem
                  {...el}
                  key={el.place_id}
                  fetchDetails={fetchDetails}
                />
              ))}
            </ScrollView>
          </React.Fragment>
        )}
      </GoogleAutoComplete>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: 270,
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  inputWrapper: {
    marginTop: 50,
    flexDirection: 'row',
  },
});

export {InputGoogleMapsComponent};
