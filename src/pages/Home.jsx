import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../shared/cookie";

function Home() {
  // ========= LEH "Add Guard" ===========
  const navi = useNavigate();

  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      navi("/login");
    }
  });
  // ========= LEH "Add Guard" ===========

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
