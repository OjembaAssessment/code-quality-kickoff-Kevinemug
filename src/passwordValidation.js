export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

export default function isValidPassword(password = "") {
  if (typeof password !== "string") password = String(password);

  if (password.length !== 10) return false;
  if (!/^[0-9a-zA-Z]+$/.test(password)) return false;
  
  if (!(/[0-9]/.test(password) && /[a-zA-Z]/.test(password))) return false;
  
  if (password === password.toLowerCase() || password === password.toUpperCase()) return false;
  if (forbiddenPasswords.includes(password)) return false;

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;

  const digitSequences = ['0123456789', '9876543210'];
  for (let sequence of digitSequences) {
    for (let start = 0; start <= sequence.length - 3; start++) {
      const subSequence = sequence.substr(start, 3);
      if (password.includes(subSequence)) return false;
    }
  }
  
  return true;
}
