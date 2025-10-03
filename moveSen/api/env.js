// api/env.js
import Constants from 'expo-constants';

const { BASE_URL } = Constants.expoConfig.extra || { BASE_URL: 'http://localhost:3000' };

export default { BASE_URL };
