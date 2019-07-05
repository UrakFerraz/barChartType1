var barsContainer = document.querySelector('.barsContainer');
var interval = 2000;
var numbers = {
	n1: barsContainer.children[0].children[1].children[0].children[1],
	n2: barsContainer.children[1].children[1].children[0].children[1],
	n3: barsContainer.children[2].children[1].children[0].children[1],
	n4: barsContainer.children[3].children[1].children[0].children[1],
	n5: barsContainer.children[4].children[1].children[0].children[1],
	n6: barsContainer.children[5].children[1].children[0].children[1],
	n7: barsContainer.children[6].children[1].children[0].children[1],
	n8: barsContainer.children[7].children[1].children[0].children[1],
	n9: barsContainer.children[8].children[1].children[0].children[1],
	n10: barsContainer.children[9].children[1].children[0].children[1]
};
var totals = {
	n_1: 60,
	n_2: 30,
	n_3: 20,
	n_4: 80,
	n_5: 40,
	n_6: 50,
	n_7: 80,
	n_8: 30,
	n_9: 50,
	n_10: 70
}
function count(number, total) {
	var setIntervalVar = interval/total;
	var cont = 0;
	setInterval(() => {
		cont += 1;
		if (cont <= total) {
		number.textContent = cont;
		};
	}, setIntervalVar);
};
count(numbers.n1, totals.n_1);
count(numbers.n2, totals.n_2);
count(numbers.n3, totals.n_3);
count(numbers.n4, totals.n_4);
count(numbers.n5, totals.n_5);
count(numbers.n6, totals.n_6);
count(numbers.n7, totals.n_7);
count(numbers.n8, totals.n_8);
count(numbers.n9, totals.n_9);
count(numbers.n10, totals.n_10);


