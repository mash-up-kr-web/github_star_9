import devConfig from './webpack.config.dev';
import prodConfig from './webpack.config.prod';

export default process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
