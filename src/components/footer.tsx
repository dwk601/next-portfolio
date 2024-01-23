import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Dongwook Kim. All rights reserved.</p>
      <div>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/dwk1/"
          target="_blank"
          rel="Dongwook Kim LinkedIn profile"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/dwk601"
          target="_blank"
          rel="Dongwook Kim GitHub profile"
        >
          GitHub
        </a>
      </div>
      <p>Contact: your-email@example.com</p>
    </footer>
  );
}
