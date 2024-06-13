const russianMonths = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

export const formatDate = (day: number, month: number): string => {
    const dayStr = String(day).padStart(2, '0');
    const monthStr = String(month + 1).padStart(2, '0');

    return `${dayStr}.${monthStr}`;
};

export const getMonthByNumber = (monthNumber: number): string => {
    return russianMonths[monthNumber-1]
}

export const formatNumber = (value: number): string => {
    return (`${value}`.length === 2 ? `${value}` : `0${value}`)
}

export const formatMonth = (month: string): number => {
    if(`${month}`.length === 2 && `${month}`.charAt(0) === '0')
        return Number(`${month}`.slice(1));
    return Number(month)
}

export const formatDateMySql = (day: string, month: string, year: number, hour: string, minutes: string): string => {
    return `${year}-${month}-${day} ${hour}:${minutes}:00`;
}