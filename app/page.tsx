/** @jsxImportSource @emotion/react */

"use client";

import { Box } from "@/app/components/Box/Box";
import { Button } from "./components/Button/Button";
// import { css } from "@emotion/react";

// const styles = css`
//   width: 200px;
//   height: 200px;
//   background-color: lightcoral;
// `;

export default function Home() {
  return (
    <div>
      <main>
        <Button />
        <Box />
      </main>
    </div>
  );
}
