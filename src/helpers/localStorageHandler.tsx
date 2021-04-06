export const saveToLocalStorage = (vocabulary: any) => {
    localStorage.setItem('vocupractice', JSON.stringify(vocabulary));
}

export const loadFromLocalStorage = () => {
    return localStorage.getItem('vocupractice') 
        ? JSON.parse(localStorage.getItem('vocupractice')!)
        : undefined;
}