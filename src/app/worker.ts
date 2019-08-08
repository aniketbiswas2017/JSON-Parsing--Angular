export interface IWorkOrder {
    deadline: number;
    description: string;
    id: string;
    name: string;
    workerId: number;
    }

export interface IWorker {
    companyName: string;
        email: string;
        id: number;
        image: string;
        name: string;
}
