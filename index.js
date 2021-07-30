const Dice = function(seed) {
	multiply = (nums) => { return parseInt(nums[0]) * parseInt(nums[1]); }

	add = (nums) => {	return parseInt(nums[0]) + parseInt(nums[1]);	}

	sub = (nums) => { return parseInt(nums[0]) - parseInt(nums[1]); }

	random = (min = 1, max, doMax = false) => {
		if (!seed) {
			return min !== max || !doMax ? Math.floor(Math.random() * (max - min) + min) : max;
		} else {
			return max;
		}
	}

	diceRoll = (arr) => {
		let doMax = false;

		if (!arr[0]) {
			arr.shift();

			return random(1, parseInt(arr.map((n, i, a) => {
				if (n) {
					if (n.match(/[+]/g)) { doMax = true; return add(n.split('+')); }
					if (n.match(/[-]/g)) { doMax = true; return sub(n.split('-')); }
	
					return n;
				}
			})), doMax);
		} else {
			const times = arr.shift();

			return random(parseInt(times), parseInt(arr.map((n, i, a) => {
				if (n) {
					if (n.match(/[+]/g)) { doMax = true; return add(n.split('+')); }
					if (n.match(/[-]/g)) { doMax = true; return sub(n.split('-')); }
	
					return multiply([times, n]);
				}
			})), doMax);
		}
	}
	
	return {
		roll: (roll) => {
			const arr = roll.split('d');

			return diceRoll(arr);
		}
	};
};

const d = new Dice();

// Normal Tests
console.log('Normal Tests!');
console.log(d.roll('d1')); // 1 - 1
console.log(d.roll('d20')); // 1 - 20
console.log(d.roll('d10')); // 1 - 10
console.log(d.roll('d100')); // 1 - 100
console.log(d.roll('d1000')); // 1 - 1000

// Addition & Subtraction Tests
console.log('Addition & Subtraction Tests!');
console.log(d.roll('d1+10')); // 11 - 11
console.log(d.roll('d20+5')); // 6 - 25
console.log(d.roll('d10+5')); // 6 - 15
console.log(d.roll('d100+5')); // 6 - 105
console.log(d.roll('d1-0+5')); // 6 - 6

// Multiple Dice Tests
console.log('Multiple Dice Tests!');
console.log(d.roll('5d1')); // 5 - 5
console.log(d.roll('5d20')); // 5 - 100
console.log(d.roll('2d10')); // 2 - 20
console.log(d.roll('100d1')); // 100 - 100
console.log(d.roll('1000d5')); // 1000 - 5000

// Seed Tests
const d1 = new Dice('seed1'), 
			d2 = new Dice('seed1');
console.log('Seed Tests!');
console.log(`d1: ${d1.roll('d10')}, d2: ${d2.roll('d10')}`);
console.log(`d1: ${d1.roll('d10')}, d2: ${d2.roll('d10')}`);
console.log(`d1: ${d1.roll('d100')}, d2: ${d2.roll('d100')}`);
console.log(`d1: ${d1.roll('d10')}, d2: ${d2.roll('d10')}`);
console.log(`d1: ${d1.roll('d10')}, d2: ${d2.roll('d10')}`);
