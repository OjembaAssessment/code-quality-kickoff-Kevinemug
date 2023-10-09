export default function penaltyPoints(password = "") {
  if (!password || typeof password !== "string") return 0; 

  let penalty = 0;
  let count = 1;

  for (let i = 1; i < password.length; i++) {
    if (password[i] === password[i - 1]) {
      count++;
    } else {
      if (count >= 3) {
        penalty += 2;
      } else if (count === 2) {
        penalty += 1;
      }
      count = 1;
    }
  }

  if (count >= 3) {
    penalty += 2;
  } else if (count === 2) {
    penalty += 1;
  }

  return penalty;
}
