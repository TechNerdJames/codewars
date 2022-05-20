// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

// PREP
// Castle is surrounded by dragons. Each dragon takes 2 bullets to be defeated.
// Hero has no idea how many bullets to carry for the amount of dragons
// I have to write a function to determine if he survives based on the number of dragons and bullets he carries.
// Return a boolean value, There will also be conditionals

function hero(bullets, dragons) {
	bullets >= dragons * 2 ? console.log(true) : console.log(false);
}
