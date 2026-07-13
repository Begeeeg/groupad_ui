import { ListType } from "./list.enum";

export interface List {
    _id: string;
    userId: string;
    title?: string;
    type?: ListType;
    members?: string[];
    dueDate?: string;
}

export interface GetListsResponse {
    message: string;
    data: List[];
}
