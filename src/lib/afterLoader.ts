/** Resolves once the homepage "hello" loader has finished (immediately elsewhere). */
export function afterLoader() {
  return new Promise<void>((resolve) => {
    const body = document.body;
    if (!body.classList.contains("loader-is-active")) return resolve();
    const observer = new MutationObserver(() => {
      if (body.classList.contains("loader-is-active")) return;
      observer.disconnect();
      resolve();
    });
    observer.observe(body, { attributes: true, attributeFilter: ["class"] });
  });
}
