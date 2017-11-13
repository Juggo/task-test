import React from 'react';
import ReactDOM from 'react-dom';
import App, {handleFlightsUpdate} from './App';

//import TypeaheadInput from './components/SearchForm/TypeaheadInput';
//import DateInput from './components/SearchForm/DateInput';
//
//import Enzyme, { shallow, render, mount } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
//Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


//describe('SearchForm inputs', () => {
//  for(let i = 0; i < 2; i++) {
//    let customElement, basicElement, input, updateSearch, place, date, label;
//    let type = typeof updateSearch;
//    
//    if(i == 0) {
//      customElement = "TypeaheadInput";
//      basicElement = "AsyncTypeahead";
//      
//      beforeEach(() => {
//        updateSearch = jest.fn();
//        place = 'origin';
//        label = 'Origin';
//        input = mount(<TypeaheadInput updateSearch={updateSearch} place={place} label={label} />);
//      });
//      
//      it(customElement + ' requires place prop', () => {
//        expect(input.props().place).toBe("origin");
//      });
//    }
//    if(i == 1) {
//      customElement = "DateInput";
//      basicElement = "input";
//      
//      beforeEach(() => {
//        updateSearch = jest.fn();
//        date = 'dateFrom';
//        label = 'Departure';
//        input = mount(<DateInput updateSearch={updateSearch} date={date} label={label} />);
//      });
//      
//      it(customElement + ' requires date prop', () => {
//        expect(input.props().date).toBe("dateFrom");
//      });
//    }
//
//    it(customElement + ' requires updateSearch prop', () => {
//      expect(input.props().updateSearch).toBeDefined();
//    });
//
//    it(customElement + ' requires label prop', () => {
//      expect(input.props().label).toBeDefined();
//    });
//
//    it(customElement + ' renders ' + basicElement, () => {
//      const tempInput = input.find(basicElement).first();
//      expect(tempInput).toBeDefined();
//    });
//  }
//  
//});