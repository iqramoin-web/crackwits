/** Where the dark -> light hand-off happens: 60% of the way down the viewport. */
const THEME_LINE = 0.6;

/**
 * Calls `onChange(true)` while the light section's top is above the theme
 * line and `onChange(false)` while it is below, checking on every scroll and
 * resize (wheel, trackpad, keyboard, scrollbar and touch alike). The same
 * line applies in both directions, as on plastic.design. Returns a cleanup.
 */
export function onThemeLine(getSection: () => HTMLElement | null, onChange: (light: boolean) => void) {
  let frame = 0;
  const check = () => {
    frame = 0;
    const section = getSection();
    if (section) onChange(section.getBoundingClientRect().top < window.innerHeight * THEME_LINE);
  };
  const schedule = () => {
    if (!frame) frame = window.requestAnimationFrame(check);
  };
  check();
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  return () => {
    window.cancelAnimationFrame(frame);
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
  };
}
