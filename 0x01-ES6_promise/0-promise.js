export default function getResponseFromAPI() {
  const advance = true;
  return new Promise((resolve, reject) => {
    if (advance) {
      resolve();
    } else {
      reject();
    }
  });
}
