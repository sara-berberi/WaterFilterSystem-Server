interface Repository<T> {s
    getAll(): Promise<Array<T>>;
    getById(id: number): Promise<T | undefined>;
    add(item: T): Promise<void>;
    update(id: number, item: T): Promise<void>;
    delete(id: number): Promise<void>;
}