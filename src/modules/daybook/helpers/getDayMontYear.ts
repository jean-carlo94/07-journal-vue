const getDay = ( dateString: string ) => {
    return new Date(dateString).getDate();
};

const getNameDay = ( dateString: string ) => {
    const date = new Date(dateString);
    const day = new Intl.DateTimeFormat("es-ES",{ weekday: "long" }).format(date);
    return day[0].toUpperCase() + day.substring(1);
};

const getNameMonth = ( dateString: string ) => {
    const date = new Date(dateString);
    const month = new Intl.DateTimeFormat("es-ES",{ month: "long" }).format(date);
    return month[0].toUpperCase() + month.substring(1);
};

const getYear = ( dateString: string ) => {
    return new Date(dateString).getFullYear();
};

const getDayMontYear = ( dateString: string ) => {

    return {
        day: getDay( dateString ),
        dayName: getNameDay( dateString ),
        month: getNameMonth( dateString ),
        year: getYear( dateString ),

    }
};

export default getDayMontYear;

