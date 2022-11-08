export function choice (arg) {
  let idx = Math.floor(Math.random() * arg.length);
  return arg[idx]; 
}