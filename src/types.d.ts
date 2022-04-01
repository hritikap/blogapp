export interface IWriteBlog{
    title:string;
    description:string;
    id?:string;

  }
export interface IGalleryBlog{
    albumId?:number;
    id:number;
    title?:string;
    url:string;
    thumbnailUrl?:string;

  }