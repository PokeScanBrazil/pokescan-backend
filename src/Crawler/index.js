import { spawn } from "child_process";

export function runCrawler(name, col1, col2) {
  return new Promise((resolve, reject) => {
    const py = spawn("python3", [
      "src/scripts/ligaPokemonCrawler.py",
      name,
      col1,
      col2,
    ]);

    let data = "";

    py.stdout.on("data", (chunk) => {
      data += chunk.toString();
    });

    py.stderr.on("data", (err) => {
      console.error("Crawler error:", err.toString());
    });

    py.on("close", () => {
      try {
        const json = JSON.parse(data);
        resolve(json);
      } catch (e) {
        console.error("JSON parse error:", e);
        reject("Crawler returned invalid JSON");
      }
    });
  });
}
