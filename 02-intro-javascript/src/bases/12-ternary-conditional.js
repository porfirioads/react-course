// Normal condition

let active = true;
let message = '';

if (active) {
  message = 'Active';
} else {
  message = 'Inactive';
}

console.log(message);

// Ternary conditional

active = false;
message = active ? 'Active' : 'Inactive';
console.log(message);

// Short ternary conditional

active = true;
message = active && 'Active'
console.log(message);