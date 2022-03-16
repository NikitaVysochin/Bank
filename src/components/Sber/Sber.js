import React, { useState } from "react";
import styled from "styled-components";
import { Switch } from "@sberdevices/plasma-ui";
import { gradient } from "@sberdevices/plasma-tokens";
import { darkSber } from "@sberdevices/plasma-tokens/themes";
import { sberBox } from "@sberdevices/plasma-tokens/typo";
import "./Sber.css";

export const StyledPreview = styled.div`
  ${sberBox[":root"]}
  ${darkSber[":root"]}
  border-radius: 7px;
  background-image: ${gradient};

  padding: 1rem;
  > div {
    font-size: 1.5rem;
    display: flex;
    gap: 1rem;
  }
`

export function Sber({ children }) {
  const [check, SetCheck] = useState(false);
  console.log(check);

  return (
    <StyledPreview>
      <Switch
        className="sber-switch"
        checked={check}
        label="Мои карты"
        onChange={(e) => SetCheck(e.target.checked)}
        defaultChecked
      />
      <div className={`cards ${check ? " open" : " closed"}`}>{children}</div>
    </StyledPreview>
  );
}
