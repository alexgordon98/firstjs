let money, time;

function start() {
	money = +prompt('Ваш бюджет на месяц?', ""),
	time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', "");
	}
}

start();



let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income : [],
	savings: true,
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
			let	a = prompt('Введите обязательную статью расходов в этом месяце'),
				b = prompt('Во сколько обойдется?');
		
			if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
				console.log('done');
				appData.expenses[a] = b;
			} else {
				console.log('bad');
				i = 0;
			}
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget/30).toFixed();
		alert('Ежедневный бюджет: ' + appData.moneyPerDay);
	},
	detectLevel: function() {
		if(appData.moneyPerDay < 100) {
			console.log('Минимальный уровень достатка');
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log('Средний уровень достатка');
		} else if(appData.moneyPerDay > 2000) {
			console.log('Высокий уровень достатка');
		} else {
			console.log('mistake');
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt('Какова сумма накоплений?'),
				percent = +prompt('Под какой процент?');
	
			appData.monthIncome = save/100/12*percent;
			alert('Доход в месяц с депозита: ' + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let z = 1; z <= 3; z++) {
			let e = +prompt('Статья необязательных расходов?');
	
			appData.optionalExpenses[z] = e;
			console.log(appData.optionalExpenses);
			
		}
	},
	chooseIncome: function() {
		let items = prompt('Что несет дополнительный доход? (перечислить через запятую)', '');
			
			if ( (typeof(items)) !="string" || items == '' || typeof(items) == null) {
				console.log('Wrong items, try again');
			} else {
				appData.income = items.split(', ');
				appData.income.push(prompt('Что-то еще?'));
				appData.income.sort();
			}

			appData.income.forEach(function(itemmassiv, i) {
				alert('Способы доп. заработка:' + (i+1) + ' - ' + itemmassiv);
			});
			
			for(let key in appData) {
				console.log('Наша программа включает в себя данные: ' + key + '-' + appData[key]);
			}
	}
};


