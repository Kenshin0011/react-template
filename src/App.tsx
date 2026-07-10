import { css } from "../styled-system/css";
import { Accordion } from "./components/ui/Accordion";

const items = [
  {
    value: "1",
    title: "Panda CSS",
    content: "Build-time CSS generation with typed design tokens.",
  },
  {
    value: "2",
    title: "Ark UI",
    content:
      "Accessible, headless UI primitives that work perfectly with Panda.",
  },
  {
    value: "3",
    title: "React",
    content:
      "React 19 + Panda CSS + Ark UI is a great stack for modern applications.",
  },
];

function App() {
  return (
    <main
      className={css({
        minH: "100vh",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        bg: `
      radial-gradient(circle at top left,#ede9fe 0%,transparent 40%),
      radial-gradient(circle at bottom right,#dbeafe 0%,transparent 35%),
      #fafafa
    `,

        p: 12,
      })}
    >
      <section
        className={css({
          w: "full",
          maxW: "720px",

          bg: "rgba(255,255,255,.72)",
          backdropFilter: "blur(24px)",

          border: "1px solid rgba(255,255,255,.8)",

          borderRadius: "32px",

          boxShadow: "0 20px 80px rgba(15,23,42,.08)",

          overflow: "hidden",
        })}
      >
        <header
          className={css({
            px: 10,
            py: 10,
          })}
        >
          <p
            className={css({
              color: "violet.600",
              fontWeight: "medium",
              fontSize: "sm",
              letterSpacing: ".08em",
              textTransform: "uppercase",
            })}
          >
            Design System
          </p>

          <h1
            className={css({
              mt: 3,
              fontSize: "5xl",
              fontWeight: "800",
              lineHeight: "1",
              letterSpacing: "-0.04em",
            })}
          >
            Panda CSS
            <br />
            <span
              className={css({
                color: "gray.500",
              })}
            >
              × Ark UI
            </span>
          </h1>

          <p
            className={css({
              mt: 5,
              maxW: "520px",
              color: "gray.600",
              fontSize: "lg",
              lineHeight: "1.8",
            })}
          >
            Build beautiful, accessible interfaces with typed styling and
            headless components.
          </p>
        </header>

        <Accordion items={items} defaultValue={["1"]} />
      </section>
    </main>
  );
}

export default App;
