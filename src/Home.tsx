import { memo } from "react";

interface HomeProps {
  resetCount: () => void;
}

const Home = memo(({ resetCount }: HomeProps) => {
  // console.log("Re-render child component.");
  return (
    <div>
      <h1>Home</h1>
      <button onClick={resetCount}>resetCount</button>
    </div>
  );
});

export default Home;
