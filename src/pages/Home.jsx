import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../shared/cookie";

function Home() {
  const navi = useNavigate();

  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      navi("/signup");
    }
  });

  return (
    <div>
      <div>
        <button
          onClick={() => {
            navi(`/board`);
          }}
        >
          board
        </button>
      </div>
    </div>
  );
}

export default Home;
