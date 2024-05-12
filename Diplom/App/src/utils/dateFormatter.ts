const russianMonths = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

export const formatDate = (date: Date): string => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    return `${dd}.${mm}`;
};

export const getMonthByNumber = (monthNumber: number): string => {
    return russianMonths[monthNumber-1]
}

export const formatMonth = (month: string): number => {
    if(`${month}`.length === 2 && `${month}`.charAt(0) === '0')
        return Number(`${month}`.slice(1));
    return Number(month)
}

export const formatDateMySql = (day: string, month: string, year: number, hour: string, minutes: string): string => {
    return `${year}-${month}-${day} ${hour}:${minutes}:00`;
}