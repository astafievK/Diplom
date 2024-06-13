export const isNumeric = (str: string): boolean => {
    const regex = /^\d+$/;
    return regex.test(str);
}