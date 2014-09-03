var dde = require('node-dde');

client = dde.createClient('myapp', 'mytopic');

client.on('advise', function(service, topic, item, text) {
  console.log('OnAdvise: '
    + 'Service: ' + service
    + ', Topic: ' + topic
    + ', Item: ' + item
    + ', Text: ' + text);
});

client.connect();

client.startAdvise('myitem');
