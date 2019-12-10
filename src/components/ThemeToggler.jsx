/** @jsx jsx */
import React from "react";
import {css} from "@emotion/core";
import styled from "@emotion/styled";
import Moon from "./Moon";
import Sun from "./Sun";
import { useColorMode } from "theme-ui";
import {jsx} from "theme-ui";


function ThemeToggler(){
    const [colorMode, setColorMode] = useColorMode();
    return(
        <div css = {css`
            cursor: pointer;
            /** */
        `} onClick = {() => {colorMode === "light"? setColorMode("dark"): setColorMode("light")}}>
            {colorMode === "light" ? <Moon /> : <Sun />}
        </div>
    );
}

export default ThemeToggler;