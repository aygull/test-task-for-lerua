let y = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
        }
    },
    "stock": {
        "stocks": {
            "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
};

let obj = y.stock.stocks["34"];

//название товара
let nameOfProduct = y.displayedName.displayedName.value[0];

//массив номеров магазинов, где товар в наличиии
let shops = Object.keys(obj).filter(key => obj[key] > 0);

//максимальное  товаров в магазине
let max = Math.max.apply(null, Object.values(y.stock.stocks["34"]));
//номер магазина с максимальным числом товаров
let shopMaxValue = Object.keys(obj).find(key => obj[key] === String(max));
