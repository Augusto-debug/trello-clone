import formatTodosforOpenAi from "./formatTodosforOpenAi";

const fetchSuggestions = async (board: Board) => {
  const todos = formatTodosforOpenAi(board);

  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todos }),
  });

  console.log(res);

  const GPTdata = await res.json();
  const { content } = GPTdata;

  return content;
};

export default fetchSuggestions;
