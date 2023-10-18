export default function penaltyPoints(password = "") {
  if (typeof password !== "string") password = String(password);
  if (password.length < 10) return 0;

  //This regex captures the character and checks if it occurs more than two times conseutively

  const regex = /([a-zA-Z0-9])(\1{2,}|\1)/g;
  const matches = password.match(regex);

  const penaltyPoints = matches?.reduce((points, match) => {
    if (match.length > 2) return points + 2;
    return points + 1;
  }, 0);
  return penaltyPoints || 0
}
