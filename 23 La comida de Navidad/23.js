function organizeChristmasDinner(dishes) {

    const dishesMap = {};

    for (const dish of dishes) {
        const [plate, ...ingredients] = dish;

        // Almacenamos los ingredientes en el objeto dishesMap con los platos donde aparecen
        for (const ingredient of ingredients) {
            if (!dishesMap[ingredient]) {
                dishesMap[ingredient] = [plate];
            } else {
                dishesMap[ingredient].push(plate);
            }
        }
    }

    // Filtramos aquellos ingredientes que estén en al menos dos platos
    const commonIngredients = Object.entries(dishesMap).filter(
        ([ingredient, plates]) => plates.length >= 2
    );

    // Ordenamos alfabéticamente los ingredientes y los platos
    const sortedCommonIngredients = commonIngredients.sort(
        ([ingredientA], [ingredientB]) => ingredientA.localeCompare(ingredientB)
    );

    const result = sortedCommonIngredients.map(([ingredient, plates]) =>
        [ingredient, ...plates.sort()]
    );
    return result
}

// TESTS
const assert = require('assert');

try {
    assert.deepStrictEqual(organizeChristmasDinner([
        ["christmas turkey", "turkey", "sauce", "herbs"],
        ["cake", "flour", "sugar", "egg"],
        ["hot chocolate", "chocolate", "milk", "sugar"],
        ["pizza", "sauce", "tomato", "cheese", "ham"],
    ]), [
        ["sauce", "christmas turkey", "pizza"],
        ["sugar", "cake", "hot chocolate"]
    ]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(organizeChristmasDinner([
        ["fruit salad", "apple", "banana", "orange"],
        ["berry smoothie", "blueberry", "banana", "milk"],
        ["apple pie", "apple", "sugar", "flour"]
    ]), [
        ["apple", "apple pie", "fruit salad"],
        ["banana", "berry smoothie", "fruit salad"]
    ]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(organizeChristmasDinner([
        ["gingerbread", "flour", "ginger", "sugar"],
        ["glazed ham", "ham", "honey", "sugar", "vinegar"],
        ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
        ["vegetable soup", "carrot", "potato", "onion", "garlic"],
        ["fruit punch", "apple juice", "orange juice", "sugar"]
    ]), [
        ["garlic", "roast chicken", "vegetable soup"],
        ["sugar", "fruit punch", "gingerbread", "glazed ham"]
    ]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}

try {
    assert.deepStrictEqual(organizeChristmasDinner([
        ["chicken alfredo", "chicken", "pasta", "parmesan"],
        ["parmesan chicken", "chicken", "parmesan", "bread crumbs"],
        ["pasta salad", "pasta", "olive oil", "tomato"],
        ["tomato soup", "tomato", "basil", "cream"]
    ]), [
        ["chicken", "chicken alfredo", "parmesan chicken"],
        ["parmesan", "chicken alfredo", "parmesan chicken"],
        ["pasta", "chicken alfredo", "pasta salad"],
        ["tomato", "pasta salad", "tomato soup"]
    ]);
    console.log('Test ok!');
} catch (error) {
    console.error('Failed test:', error);
}