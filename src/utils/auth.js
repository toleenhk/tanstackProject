export function isAuthenticated() {
  return localStorage.getItem("isAuthenticated") === "true";
}

export function signIn() {
  localStorage.setItem("isAuthenticated", "true");
}

export function signOut() {
  localStorage.removeItem("isAuthenticated");
}
//we are not using them becuase we used a hook
