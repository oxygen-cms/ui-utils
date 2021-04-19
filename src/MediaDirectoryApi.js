import  { CrudApi } from './CrudApi';

export default class MediaDirectoryApi extends CrudApi {

    static getResourceName() {
        return 'mediaDirectory';
    }

    static prepareModelForAPI(data) {
        let m = { ...data  };
        delete m.id;
        delete m.fullPath;
        delete m.selected;
        return m;
    }

}

export const getDirectoryBreadcrumbItems = (currentDir) => {
    let items = [];
    let dir = currentDir;
    while(dir !== null && typeof dir !== 'undefined') {
        items.push({
            text: dir.name,
            separator: false,
            link: dir === currentDir ? null : dir.fullPath
        });
        dir = dir.parentDirectory;
    }
    items.push({
        home: true,
        separator: false
    });
    return items.reverse();
};

export const getDirectoryPathString = (dir) => {
    if(dir === null) {
        return '/';
    } else {
        let path = '';
        while(dir !== null && typeof dir !== 'undefined') {
            path = dir.name + ' / ' + path;
            dir = dir.parentDirectory;
        }
        return path;
    }
};