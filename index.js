const Dice = function(seed) {
  
  return {
    roll:function(roll) {
    
    }
  };
};

const d = new Dice();

// Normal Tests
console.log(d.roll('d1'));
console.log(d.roll('d20'));
console.log(d.roll('d10'));
console.log(d.roll('d100'));
console.log(d.roll('d1000'));

// Addition & Subtraction Tests
console.log(d.roll('d1+10'));
console.log(d.roll('d20+5'));
console.log(d.roll('d10+5'));
console.log(d.roll('d100+5'));
console.log(d.roll('d1-0+5'));

// Multiple Dice Tests
console.log(d.roll('5d1'));
console.log(d.roll('5d20'));
console.log(d.roll('2d10'));
console.log(d.roll('100d1'));
console.log(d.roll('1000d5'));

// Seed Tests
const d1 = new Dice('seed1'), 
			d2 = new Dice('seed1');
console.log(`d1: ${d1.roll('d10')}, d2: ${d2.roll('d10')}`);
console.log(`d1: ${d1.roll('d10')}, d2: ${d2.roll('d10')}`);
console.log(`d1: ${d1.roll('d100')}, d2: ${d2.roll('d100')}`);
console.log(`d1: ${d1.roll('d10')}, d2: ${d2.roll('d10')}`);
console.log(`d1: ${d1.roll('d10')}, d2: ${d2.roll('d10')}`);
