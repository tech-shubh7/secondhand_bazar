const authService = require('../services/auth-service');

const defaultIntervalMs = 6 * 60 * 60 * 1000;

const parseCleanupInterval = (value) => {
    const parsed = Number.parseInt(value || `${defaultIntervalMs}`, 10);
    if (Number.isFinite(parsed) && parsed > 0) {
        return parsed;
    }
    return defaultIntervalMs;
};

const runRefreshTokenCleanup = async () => {
    try {
        await authService.cleanupExpiredRefreshTokens();
    } catch (error) {
        console.error('ERROR: refresh token cleanup failed', error);
    }
};

const startRefreshTokenCleanupJob = () => {
    const intervalMs = parseCleanupInterval(process.env.REFRESH_TOKEN_CLEANUP_INTERVAL_MS);
    void runRefreshTokenCleanup();
    return setInterval(runRefreshTokenCleanup, intervalMs);
};

module.exports = { startRefreshTokenCleanupJob };
