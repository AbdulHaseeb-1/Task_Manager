import React from "react";
import { AllThemes } from "../Contexts/ThemeContext";
import { MoonIcon, SunDimIcon } from "lucide-react";
import { Button } from "@nextui-org/react";
export default function ThemeChanger() {
  const { Theme, setTheme, Themes } = AllThemes();
  function ChangeTheme() {
    if (Theme.Label == "Dark") setTheme(Themes.Light);
    else setTheme(Themes.Dark);
  }
  if (Theme.Label == "Dark") {
    return (
      <Button
        isIconOnly
        className="transition rounded-3xl text-gray-300 bg-black"
        onClick={ChangeTheme}
      >
        <SunDimIcon />
      </Button>
    );
  } else {
    return (
      <Button
        isIconOnly
        className="rounded-3xl text-gray-300 bg-black"
        onClick={ChangeTheme}
      >
        <MoonIcon />
      </Button>
    );
  }
}
