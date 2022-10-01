import urls from '../path-routes.json';
import { JsonData } from '../interfaces/json-data.type';
import { mapJsonRoutes } from '../utils/map-json-routes';

export const useManageUrls = () => {
    const pathDataList: JsonData[] = mapJsonRoutes(urls.paths);

    const pathList = () => pathDataList.map(path => path.pathname);

    const next = (pathname: string) => {
        const listItems = pathList();
        const idx = listItems.indexOf(pathname);

        return idx < listItems.length ? listItems.at(idx + 1) : null;
    };

    const previous = (pathname: string) => {
        const listItems = pathList();
        const idx = listItems.indexOf(pathname);

        return idx >= 0 ? listItems.at(idx - 1) : null;
    };

    const getDataFromUrl = (pathname: string) => {
        return pathDataList.find(data => data.pathname === pathname)!;
    };
    
    return {
        pathList: pathList(),
        pathDataList,
        next,
        previous,
        getDataFromUrl,
    };
}
