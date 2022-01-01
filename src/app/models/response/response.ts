import { plainToInstance } from "class-transformer";

export class Response<T> {
    constructor(
        public ok: boolean,
        public data: T,
        public message: string,
    ) { }
}

export const handleError = (response: Response<any>) => {
    if (response.message) {
        console.log(response.message);
    }
};