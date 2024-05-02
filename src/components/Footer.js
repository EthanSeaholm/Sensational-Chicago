/**
 * This component renders a footer containing a link to my personal LinkedIn page.
 * @returns {ReactNode} A React element that renders the footer.
 */

export default function Footer() {
  return (
    <span className="footer">
      <a
        href="https://www.linkedin.com/in/ethanseaholm/"
        target="blank"
        rel="noopener noreferrer"
      >
        By Ethan Seaholm
      </a>
    </span>
  );
}
