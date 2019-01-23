// Алгоритм позаимствован отсюда, чтобы не изобретать велосипед
// https://github.com/lampelay/react-redux-test-task/blob/master/src/functions/calcDiscPrice.js

const calculateDiscount = (products, discount) => {

    const newProducts = new Array(products.length);
    if (newProducts.length) {
        /**Суммарная стоимость без скидки */
        let sum = 0;
        /**Максимальная цена товара */
        let maxPrice = -Infinity;
        /**Индекс товара с максимальной ценой */
        let maxPriceIdx;
        // используем классический цикл for как наиболее быстрый
        // для обхода массива
        for (let i = 0; i < products.length; i++) {
            // ищем товар с максимальной ценой
            if (maxPrice < products[i].price) {
                maxPrice = products[i].price;
                maxPriceIdx = i;
            }
            // ищем суммарную стоимость
            sum += products[i].price;
        }
        /**Суммарная стоимость со скидкой */
        let discSum = sum - discount;
        if (discSum < 0) discSum = 0;
        /**Относительня стоимость (отношение суммы со скидкой к начальной сумме) */
        const disc = discSum / sum || 0;
        /**Суммарная стоимость товаров со скидкой без самого дорогого товара */
        let sumWithoutMaxPrice = 0;
        for (let i = 0; i < products.length; i++) {
            // наполняем массив результата
            newProducts[i] = {...products[i]};
            if (i !== maxPriceIdx) {
                // вычисляем стоимость каждого товара со скидкой, округляем вверх
                newProducts[i].discPrice = Math.ceil(newProducts[i].price * disc);
                // стоимость товара не должна быть отрицательной
                if (newProducts[i].discPrice < 0) newProducts[i].discPrice = 0;
                sumWithoutMaxPrice += newProducts[i].discPrice;
            }
        }
        // стоимость самого дорогого товара со скидкой вычисляем путём вычитания
        // суммарной стоимости остальных товаров со скидкой из общей стоимости со скидкой
        newProducts[maxPriceIdx].discPrice = discSum - sumWithoutMaxPrice;
        // если его стоимость меньше нуля, приравниваем её к нулю
        // и снижаем стоимость любого другого товара, чтобы сумма со скидкой сохранилась
        if (newProducts[maxPriceIdx].discPrice < 0) {
            const idx = maxPriceIdx === 0 ? 1 : 0;
            newProducts[idx].discPrice += newProducts[maxPriceIdx].discPrice;
            newProducts[maxPriceIdx].discPrice = 0;
        }
    }
    return newProducts;

};

export default calculateDiscount;