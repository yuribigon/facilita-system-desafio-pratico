import {v4 as uuidv4} from 'uuid';

export class Task {
    private uuid: string;

    constructor(
        private title: string,
        private description: string,
    ){
        this.uuid = uuidv4();
    }

    getUuid(): string{
        return this.uuid
    }

    getTitle(): string {
        return this.title
    }

    getDescription(): string {
        return this.description
    }
    updateTask(
        title: string,
        description: string,
    ): void {
        this.title = title
        this.description = description
    }
}

