const fs = require("fs");

class DownloadedFiles {
  constructor() {
    this._registry = new Map();
  }

  addoingToFileClass(id, filePath) {
    const downloadTime = Date.now();

    const timeoutId = setTimeout(() => {
      this.freeingToFileClass(id);
    }, 1 * 1000);

    this._registry.set(id, { downloadTime, filePath, timeoutId });
    console.log(`Scheduled deletion of ${id} in 1 sec`);
    this.removeOldestIfNeeded();
  }

  freeingToFileClass(id) {
    const entry = this._registry.get(id);
    if (!entry) return;

    fs.unlink(entry.filePath, (err) => {
      if (err) {
        console.error(`Failed to delete ${entry.filePath}:`, err);
      } else {
        console.log(`Deleted file ${entry.filePath} (id=${id})`);
      }
    });

    clearTimeout(entry.timeoutId);
    this._registry.delete(id);
  }

  deleteNow(id) {
    const entry = this._registry.get(id);
    if (!entry) return false;

    clearTimeout(entry.timeoutId);
    this._registry.delete(id);

    try {
      fs.unlinkSync(entry.filePath);
      console.log(`File ${entry.filePath} deleted immediately.`);
    } catch (err) {
      console.error(`Failed to delete file ${entry.filePath}:`, err);
    }

    return true;
  }

  removeOldestIfNeeded() {
    while (this._registry.size > 5) {
      const oldestEntry = [...this._registry.entries()].sort(
        (a, b) => a[1].downloadTime - b[1].downloadTime
      )[0];

      const oldestId = oldestEntry[0];
      console.log(
        `Removing oldest file with id ${oldestId} because limit exceeded`
      );
      this.freeingToFileClass(oldestId);
    }
  }

  clearAll() {
    for (const id of this._registry.keys()) {
      this.deleteNow(id);
    }
  }
}
module.exports = { DownloadedFiles };
