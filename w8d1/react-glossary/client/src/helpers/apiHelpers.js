export const fetchStatements = () => {
  return axios.get("/api/statements").then((res) => res.data);
  // fetch
};

export const sendStatement = (subject, content) => {
  return axios.post("/api/statements", { id: statements.length, subject, content });
};
