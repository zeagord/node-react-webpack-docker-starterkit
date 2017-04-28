require('babel-register')();
if (!global.document) {
  try {
    const jsdom = require('jsdom').jsdom; // could throw

    const exposedProperties = ['window', 'navigator', 'document'];

    global.document = jsdom('');
    global.window = document.defaultView;
    Object.keys(document.defaultView).forEach((property) => {
      if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
      }
    });

    global.navigator = {
      userAgent: 'node.js',
    };
    documentRef = document;

  } catch (e) {
    // jsdom is not supported...
    console.log("JSDOM not supported: " + e);
  }
}
