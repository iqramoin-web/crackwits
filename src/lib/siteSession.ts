// Tracks whether the visitor has moved between pages inside the site since
// the document loaded. Module state survives client-side navigation and resets
// on a full reload, which is exactly the lifetime of the "hello" loader.
let navigatedWithinSite = false;

export function markSiteNavigation() {
  navigatedWithinSite = true;
}

/** True only for the page the site was opened on (before any in-site navigation). */
export function isEntryPageView() {
  return !navigatedWithinSite;
}
