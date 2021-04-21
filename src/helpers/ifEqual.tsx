const ifEqual = (value1: string, value2: string) => {
    if (value1.toLocaleLowerCase() === value2.toLocaleLowerCase()) {
        return true;
    }

    return false;
}

export default ifEqual;