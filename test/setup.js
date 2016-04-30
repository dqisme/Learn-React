import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

global.document = doc;
global.window = doc.defaultView;
global.navigator = doc.defaultView.navigator;

chai.use(chaiEnzyme());

global.expect = chai.expect;

global.React = React;
