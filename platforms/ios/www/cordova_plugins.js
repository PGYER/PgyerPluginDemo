cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.pgyer.plugin.pgyer",
    "file": "plugins/com.pgyer.plugin/www/pgyer.js",
    "pluginId": "com.pgyer.plugin",
    "clobbers": [
      "pgyer"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.pgyer.plugin": "1.0.0",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});