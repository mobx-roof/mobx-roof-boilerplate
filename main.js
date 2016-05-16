const app = require('electron').app;
const BrowserWindow = require('browser-window');
const join = require('path').join;

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 690,
    show: false,
  });
  if (process.env.HOT) {
    win.loadURL(`http://127.0.0.1:8989/index-hot.html`);
  } else {
    win.loadURL(`file://${__dirname}/dist/index.html`);
  }
  win.show();
});
