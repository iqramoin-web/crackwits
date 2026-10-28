import { Fragment, type CSSProperties } from "react";

/**
 * Splits text into word spans (`--i` = index) for staggered reveals.
 * `offset` continues the count from earlier text, so several runs (lines,
 * paragraphs) stagger as one sequence.
 */
// The space sits between the inline-block words: inside them it would be
// trimmed and the words would run together.
export function SplitWords({ text, mask = false, offset = 0 }: { text: string; mask?: boolean; offset?: number }) {
  return text
    .trim()
    .split(/\s+/)
    .map((word, i) => (
      <Fragment key={i}>
        {i > 0 && " "}
        <span className="word" style={{ "--i": offset + i } as CSSProperties}>
          {mask ? <span>{word}</span> : word}
        </span>
      </Fragment>
    ));
}

/** Number of words SplitWords will produce for `text`. */
export const wordCount = (text: string) => text.trim().split(/\s+/).length;
