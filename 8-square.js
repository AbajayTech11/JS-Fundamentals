const args = process.argv.slice(2);
const size = parseInt(args[0]);

if (isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) {
  const row = "X".repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(row);
  }
}
// If size is 0 or negative, the script does nothing (no output)
