import { useTranslation } from "react-i18next";

type SectionTitleProps = {
  /** i18n key of the section title */
  translationKey: string;
  /** HTML heading level tag, defaults to 'h2' */
  as?: "h1" | "h2" | "h3";
};

/**
 * Renders a section title where the last word is highlighted with
 * the `text-accent` class.
 *
 * @param translationKey i18n key to translate and split into words
 */
const SectionTitle = ({ translationKey, as: Tag = "h2" }: SectionTitleProps) => {
  const { t } = useTranslation();
  const title = t(translationKey);

  return (
    <Tag className="section-title">
      {title.split(" ").map((word: string, i: number, arr: string[]) => (
        <span key={`${word}-${i}`} className={i === arr.length - 1 ? "text-accent" : ""}>
          {word}{" "}
        </span>
      ))}
    </Tag>
  );
};

export default SectionTitle;
