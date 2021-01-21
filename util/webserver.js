const dev = process.env.NODE_ENV !== 'production';

export const webserver = dev ? 'http://localhost:3000' : 'https://dan-image-grid.herokuapp.com';