console.log(__filename);
console.log(__dirname);

process.argv.forEach((val,index) => {
    console.log(`${index}: ${val}`);
});
console.log(process.argv[0]);
console.log(process.argv[1]);