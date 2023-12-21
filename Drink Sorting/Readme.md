### Сортировка напитков

Вам будет предоставлен массив напитков, каждый из которых представляет собой объект с двумя свойствами: названием и ценой. Создайте функцию, которая имеет массив напитков в качестве аргумента и возвращает объекты напитков, отсортированные по цене в порядке возрастания.
Ссылка на задание: https://edabit.com/challenge/nuXdWHAoHv9y38sn7

### Теститрование задачи

<table>
    <tr>
        <th>**Название:** </th>
        <th>**Входные данные:** </th>
        <th>**Результат:** </th>
    </tr>
    <tr>
        <td>sortDrinkByPrice first test </td>
        <td>{ name: "lemonade", price: 90 },{ name: "lime", price: 432 },{ name: "peach", price: 23 }</td>
        <td>{name: "peach", price: 23 },{ name: "lemonade", price: 90 },{ name: "lime", price: 432 }</td>
    </tr>
    <tr>
        <td>sortDrinkByPrice second test </td>
        <td>{ name: "water", price: 120 },{ name: "lime", price: 80 },{ name: "peach", price: 90 }</td>
        <td>{ name: "lime", price: 80 },{ name: "peach", price: 90 },{ name: "water", price: 120 } </td>
    </tr>
    <tr>
        <td>sortDrinkByPrice third test </td>
        <td>{ name: 'water', price: 120 },
      { name: 'lime', price: 120 },
      { name: 'peach', price: 120 }</td>
        <td>{ name: 'water', price: 120 },
    { name: 'lime', price: 120 },
    { name: 'peach', price: 120 } </td>
    </tr>
    <tr>
        <td>sortDrinkByPrice four test </td>
        <td>{}</td>
        <td>{}</td>
    </tr>
</table>