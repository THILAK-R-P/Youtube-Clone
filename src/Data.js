export const API_KEY = 'AIzaSyDaEjwTXTeGL9HNW5GXnYTVkzLZD1mY_Pg';

export const value_converter = (value) => {
    if(value >= 1000000){
        return Math.floor(value/1000000)+ 'M';
    }
    if(value >= 1000){
        return Math.floor(value/1000)+ 'K';
    }
    return value;
}