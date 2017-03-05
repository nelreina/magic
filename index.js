const rstars = (times) => '*'.repeat(times);

const print = (stars, title) => {
  const spaces = stars - title.length;
  
	console.log(`${rstars(spaces)} ${title} ${rstars(spaces)}`);
}

if (require.main === module) {
  // Run as console  program
  const [n, n1, times, title] = process.argv;
  print(times, title);
} else {
  module.exports = print;
}
