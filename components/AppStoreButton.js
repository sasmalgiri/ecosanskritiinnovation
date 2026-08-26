/* Shared "Download on the App Store" action. Renders a muted, non-clickable
   chip when an app has no store URL yet, so unreleased apps never ship a
   dead link. */
export default function AppStoreButton({ url, platform = 'Coming soon', label = 'App Store' }) {
  const glyph = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12M8 11l4 4 4-4" />
      <path d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2" />
    </svg>
  );

  if (!url) {
    return (
      <span className="appstore appstore--muted" role="note">
        {glyph}
        <span className="appstore__lines">
          <span className="appstore__small">{platform}</span>
          <span className="appstore__big">Coming soon</span>
        </span>
      </span>
    );
  }

  return (
    <a className="appstore" href={url} target="_blank" rel="noopener noreferrer">
      {glyph}
      <span className="appstore__lines">
        <span className="appstore__small">Download on the</span>
        <span className="appstore__big">{label}</span>
      </span>
    </a>
  );
}
