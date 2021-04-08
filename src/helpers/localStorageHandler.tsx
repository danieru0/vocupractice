export const saveToLocalStorage = (name: string, data: any) => {
    localStorage.setItem(name, JSON.stringify(data));
}

export const loadFromLocalStorage = (name: string) => {
    return localStorage.getItem(name) 
        ? JSON.parse(localStorage.getItem(name)!)
        : undefined;
}