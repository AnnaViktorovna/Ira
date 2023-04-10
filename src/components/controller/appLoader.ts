import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '7652bda0a9bb4778b8abef2bfdd89eb1', 
        });
    }
}

export default AppLoader;
