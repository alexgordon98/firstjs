let money = prompt('Ваш бюджет на месяц?', ""),
	time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

console.log(money);
console.log(time);



let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: '',
	income : {},
	savings: false
}

let	i1 = prompt('Введите обязательную статью расходов в этом месяце'),
	i2 = prompt('Во сколько обойдется?');
	i3 = prompt('Введите обязательную статью расходов в этом месяце'),
	i4 = prompt('Во сколько обойдется?');

appData.expenses[i1] = i2,
appData.expenses[i3] = i4,

alert(appData.budget/30);