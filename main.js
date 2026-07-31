const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("path");

const appVersion = "20260731-app-icon-jin";
const appIcon = path.join(__dirname, "assets", "icons", "gc-tracker-jin.ico");

function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 920,
    minWidth: 1100,
    minHeight: 720,
    title: "GC Tracker",
    backgroundColor: "#080d18",
    icon: appIcon,
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  win.once("ready-to-show", () => {
    win.maximize();
    win.show();
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  win.webContents.on("will-navigate", (event, url) => {
    if (!url.startsWith("file://")) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  win.loadFile(path.join(__dirname, "index.html"), {
    query: { v: appVersion }
  });
}

app.setName("GC Tracker");
if (process.platform === "win32") {
  app.setAppUserModelId("local.gctracker.app");
}
Menu.setApplicationMenu(null);

app.whenReady().then(createWindow);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
