import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
<section class="home">
<p>Hello there, I´m</p>
<h1>Óscar C.R ‹MCWolvie›</h1>
<p>I'm a software engineer based in Toronto, Canada and also a communication and journalism student. I enjoy creating things that
<a href="mailto:peterparker@gmail.com">Say hi →</a>
</section>`;
};
