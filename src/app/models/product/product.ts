import { Expose, Transform, Type } from "class-transformer";
import { Group } from "../group/group";

export class Product {
    id!: number;
    name: string | undefined;
    image: string | undefined;
    acceptedPhotos!: number;
    price!: number;
    description: string | undefined;
    shortDescription: string | undefined;
    @Type(() => Group)
    Group: Group | undefined;
    
    @Expose()
    @Transform(({ value, key, obj, type }) => [obj.image])
    images: string[] | undefined;
}
