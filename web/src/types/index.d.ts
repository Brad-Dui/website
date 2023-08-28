export interface BlogSummary {
    id             : Id,
    createAt       : string,
    title          : string,
    abstract       : string,
    imgUrl         : string,
    views          : number,
    authorName     : string,
    authorAvatarUrl: string
}

export type Id = string | number