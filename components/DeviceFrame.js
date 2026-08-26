/* Pure presentational chrome — no client JS, so these render on the server. */

export function MacWindow({ src, alt, title = '', className = '', priority = false }) {
  return (
    <figure className={'macwin ' + className}>
      <div className="macwin__bar">
        <span className="macwin__dots" aria-hidden="true"><i /><i /><i /></span>
        {title && <span className="macwin__title">{title}</span>}
      </div>
      <img
        className="macwin__shot"
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </figure>
  );
}

export function PhoneFrame({ src, alt, className = '' }) {
  return (
    <figure className={'phone ' + className}>
      <span className="phone__notch" aria-hidden="true" />
      <img className="phone__shot" src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  );
}
