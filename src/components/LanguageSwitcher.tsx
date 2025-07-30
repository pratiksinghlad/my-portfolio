import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import Box from "@mui/material/Box";

// Using proper country codes for consistent display
const languages = [
  { code: "en", name: "English", countryCode: "US", displayCode: "EN" },
  { code: "es", name: "Español", countryCode: "ES", displayCode: "ES" },
  { code: "hi", name: "हिंदी", countryCode: "IN", displayCode: "HI" },
];

// Flag component using CSS to display flag emojis consistently
const FlagIcon = ({ countryCode }: { countryCode: string }) => {
  // Convert country code to flag emoji using Unicode regional indicator symbols
  const flag = countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("");

  return (
    <Box
      component="span"
      sx={{
        fontSize: "16px",
        minWidth: "24px",
        height: "16px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
        // Ensure consistent rendering across browsers
        fontFeatureSettings: '"liga" off',
        fontVariantEmoji: "emoji",
        WebkitFontSmoothing: "antialiased",
        // Fallback styling
        backgroundColor: "transparent",
        borderRadius: "2px",
        position: "relative",
        "&::before": {
          content: `"${flag}"`,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "16px",
          lineHeight: 1,
        },
      }}
      title={`${countryCode} Flag`}
    >
      {flag}
    </Box>
  );
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    document.documentElement.lang = languageCode;
    handleClose();
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <>
      <Button
        id="language-button"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<LanguageIcon />}
        sx={{
          color: "#fff",
          minWidth: "80px", // Fixed width to prevent layout shift
          width: "80px", // Consistent width
          justifyContent: "flex-start",
          paddingLeft: "8px",
          paddingRight: "8px",
        }}
      >
        <FlagIcon countryCode={currentLanguage.countryCode} />
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
        sx={{
          // Prevent menu from causing layout shift
          "& .MuiPaper-root": {
            minWidth: "160px",
          },
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={language.code === i18n.language}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FlagIcon countryCode={language.countryCode} />
            <span>{language.name}</span>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default LanguageSwitcher;
