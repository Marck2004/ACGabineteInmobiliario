export interface footerItemsInterface {
    title: string,
    childs: Array<childsWithSvg>
}

interface childsWithSvg {
    name: string,
    svg?: any,
    url?: string
}
