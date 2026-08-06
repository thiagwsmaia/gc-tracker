const { app, BrowserWindow, Menu, shell } = require("electron");
const fs = require("fs");
const path = require("path");

const appVersion = "20260806-accuracy-visual";
const appIcon = path.join(__dirname, "assets", "icons", "gc-tracker-jin.ico");
const reloadableExtensions = new Set([".html", ".css", ".js", ".png", ".jpg", ".jpeg", ".webp", ".svg", ".ico"]);
const ignoredPathParts = new Set([".git", "node_modules"]);
let reloadTimer = null;

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

function shouldReloadForFile(fileName = "") {
  const parts = fileName.split(/[\\/]+/);
  if (parts.some(part => ignoredPathParts.has(part))) return false;
  return reloadableExtensions.has(path.extname(fileName).toLowerCase());
}

function scheduleReload() {
  clearTimeout(reloadTimer);
  reloadTimer = setTimeout(() => {
    BrowserWindow.getAllWindows().forEach(win => {
      if (!win.isDestroyed()) {
        win.webContents.reloadIgnoringCache();
      }
    });
  }, 250);
}

function watchProjectFiles() {
  try {
    fs.watch(__dirname, { recursive: true }, (_eventType, fileName) => {
      if (shouldReloadForFile(String(fileName || ""))) {
        scheduleReload();
      }
    });
  } catch {
    // Auto-reload is a convenience for local development; the app still works without it.
  }
}

app.setName("GC Tracker");
if (process.platform === "win32") {
  app.setAppUserModelId("local.gctracker.app");
}
Menu.setApplicationMenu(null);

app.whenReady().then(() => {
  createWindow();
  watchProjectFiles();
});

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
