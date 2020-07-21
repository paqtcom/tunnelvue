/**
 * Control the storage.
 */
class StorageControl {
    /**
     * Check if the version is changed.
     *
     * @param {number} version
     */
    static check(version) {
        let sessionVersion = sessionStorage.getItem('appVersion');

        let localVersion = localStorage.getItem('appVersion');

        if (sessionVersion && sessionVersion != version) {
            sessionStorage.clear();
        }

        if (localVersion && localVersion != version) {
            localStorage.clear();
        }

        sessionStorage.setItem('appVersion', version);
        localStorage.setItem('appVersion', version);
    }
}

export default StorageControl;
