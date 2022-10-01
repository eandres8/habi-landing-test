import urls from '../routes.json';

type InputType = 'text' | 'email' | 'textArea' | 'select' | 'checkbox';

type PathType = {
    url: string;
    inputType: InputType;
};

type UrlMapper = PathType & {
    step: number;
};

export const useManageUrls = () => {
    const { paths } = urls;

    const pathDataList = () => paths.map((path, idx) => ({
        url: path.url,
        inputType: path['input-type'],
        step: ++idx,
    }));

    const pathList = () => paths.map(path => path.url);

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
    
    return {
        pathList: pathList(),
        pathDataList: pathDataList(),
        next,
        previous,
    };
}
