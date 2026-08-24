import { useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import Box from "@mui/material/Box";

const BUTTON_WIDTH = "80px";

const languages = [
  { code: "en", name: "English", countryCode: "US", displayCode: "Eng" },
  { code: "es", name: "Español", countryCode: "ES", displayCode: "Esp" },
  { code: "hi", name: "हिंदी", countryCode: "IN", displayCode: "हिं" },
];

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
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
        aria-label={t("navigation.language", "Select language")}
        onClick={handleClick}
        startIcon={<LanguageIcon />}
        sx={{
          color: "inherit",
          minWidth: BUTTON_WIDTH,
          width: "auto",
          justifyContent: "flex-start",
          paddingLeft: "8px",
          paddingRight: "8px",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.9rem",
        }}
      >
        {currentLanguage.displayCode}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "language-button",
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            minWidth: "120px",
            backgroundColor: "var(--color-bg-alt)",
            color: "var(--color-text-primary)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            boxShadow: "var(--shadow-lg)",
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
              gap: "12px",
              fontSize: "0.9rem",
              padding: "8px 16px",
              "&.Mui-selected": {
                backgroundColor: "rgba(var(--color-accent-rgb), 0.15)",
                color: "var(--color-accent-light)",
                "&:hover": {
                  backgroundColor: "rgba(var(--color-accent-rgb), 0.25)",
                },
              },
            }}
          >
            <Box component="span" sx={{ fontWeight: 700, minWidth: "28px" }}>
              {language.displayCode}
            </Box>
            <span>{language.name}</span>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default LanguageSwitcher;
