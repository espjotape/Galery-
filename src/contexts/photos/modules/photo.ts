import type { Album } from "../album/modules/album";

export interface Photo {
 id: string;
 title: string;
 imageId: string;
 albuns: Album[]
}