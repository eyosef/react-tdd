// configures enzyme adapter for tests 
// disableLifecycleMethods allows us to modify props through different tests

import requestAnimationFrame from './tempPolyfills';
 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter(), disableLifecycleMethods: true });